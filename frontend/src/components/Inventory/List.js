/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../actions/productActions";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import history from "../../history";
import queryString from "query-string";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ListProduct = ({ match }) => {
  const defaultParams = {
    offset: 0,
    limit: 10
  };
  const params = {
    ...defaultParams,
    ...queryString.parse(history.location.search)
  };
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();
  let data = useSelector(state => state.product);
  const [showModal, setShowModal] = useState(true);
  const [search, setSearch] = useState(
    queryString.parse(history.location.search).upc
  );
  const searchInputRef = useRef(null);

  useEffect(() => {
    setShowModal(true);
    dispatch(productActions.list(params));
  }, [history.location.search]);
  const handlePageChange = pageNumber => {
    let newParams = params;
    let offset = (pageNumber - 1) * newParams.limit;
    if (offset > data.count) {
      offset = data.count;
    }
    newParams = { ...newParams, offset };

    let paramsString = Object.keys(newParams).length > 0 ? "?" : "";
    for (let [key, value] of Object.entries(newParams)) {
      if (value) {
        paramsString += key + "=" + value + "&";
      }
    }
    history.push(match.path + paramsString.slice(0, -1));
  };
  const deleteRecord = () => {
    dispatch(productActions.delete(selectedId, match.params));
  };
  const onSubmit = e => {
    searchInputRef.current.blur();
    e.preventDefault();
    const newParams = {
      ...queryString.parse(history.location.search),
      ...defaultParams,
      upc: search
    };

    let paramsString = Object.keys(newParams).length > 0 ? "?" : "";
    for (let [key, value] of Object.entries(newParams)) {
      if (value) {
        paramsString += key + "=" + value + "&";
      }
    }
    history.push(match.path + paramsString.slice(0, -1));
  };

  return (
    <>
      <div className="card-header border-0">
        <div className="d-lg-flex justify-content-between">
          <h3>Inventories</h3>

          <div className="d-lg-flex">
            <form lass="form-group" onSubmit={onSubmit}>
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  style={{ width: "200px" }}
                  className="form-control"
                  placeholder="Search UPC"
                  type="text"
                  onChange={event => setSearch(event.target.value)}
                  onBlur={onSubmit}
                  value={search}
                  ref={searchInputRef}
                />
              </div>
            </form>
            <Link
              to={`${match.path}/scan`}
              className="btn btn-success ml-3 mt-3 mt-lg-0"
            >
              Scan
            </Link>
          </div>
          <Link
            className="btn btn-info ml-3 mt-3 mt-lg-0"
            to={`${match.path}/create`}
          >
            Create
          </Link>
        </div>
      </div>
      {data.loading ? (
        <div className="m-auto">
          <Loader
            type="ThreeDots"
            color="green"
            height={80}
            width={80}
            className="mb-5"
          />
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-items-center table-flush">
              <thead className="thead-light">
                <tr>
                  <th width="25%">Name</th>
                  <th width="25%">Category</th>
                  <th width="25%">Department</th>
                  <th width="15%">UPC</th>
                  <th width="15%">Expiration</th>
                  <th width="10%">Expiration Count</th>
                  <th width="10%"></th>
                </tr>
              </thead>
              <tbody>
                {data.products.map(product => (
                  <tr key={product.id}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <div className="mb-0 text-sm">{product.name}</div>
                        </div>
                      </div>
                    </th>
                    <td>{product.category && product.category.name}</td>
                    <td>{product.department && product.department.name}</td>
                    <td>{product.upc}</td>
                    <td>
                      {product.expiration.length >= 1 && product.expiration[0]}
                    </td>
                    <td>{product.expiration_count}</td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <Link
                            className="dropdown-item"
                            to={`${match.path}/${product.id}`}
                          >
                            View
                          </Link>
                          <a
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#deleteModal"
                            onClick={() => setSelectedId(product.id)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer py-4">
            <div className="pagination justify-content-end mb-0">
              <Pagination
                activePage={Math.floor(params.offset / params.limit) + 1}
                itemsCountPerPage={params.limit}
                totalItemsCount={data.count}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </>
      )}
      {data.count === 0 && params.upc && showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modal-default"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ padding: "0.5rem" }}>
                <h5 className="modal-title">The product not found</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: "0.5rem" }}>
                Do you want to create new product?
              </div>
              <div className="modal-footer" style={{ padding: "0.5rem" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => {
                    setShowModal(false);
                    history.push(
                      `/dashboard/inventories/create?upc=${params.upc}`
                    );
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="modal"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal-default"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ padding: "0.5rem" }}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: "0.5rem" }}>
              Are you sure to delete this record?
            </div>
            <div className="modal-footer" style={{ padding: "0.5rem" }}>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={deleteRecord}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
