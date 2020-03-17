/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import history from "../../history";
import queryString from "query-string";
import userActions from "../../actions/userActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ListUser = ({ match }) => {
  const defaultParams = {
    offset: 0,
    limit: 10
  };
  const params = {
    ...defaultParams,
    ...queryString.parse(history.location.search)
  };
  const dispatch = useDispatch();
  let data = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userActions.list(params));
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

  return (
    <>
      <div className="card-header border-0">
        <div className="d-md-flex justify-content-between">
          <h3>Users</h3>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Active</th>
                  <th>Super User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <label className="custom-toggle">
                        <input
                          type="checkbox"
                          checked={user.is_active}
                          onChange={() => {
                            if (user.is_active) {
                              dispatch(userActions.deactivate(user.id));
                            } else {
                              dispatch(userActions.activate(user.id));
                            }
                          }}
                          disabled={user.is_superuser}
                        />
                        <span className="custom-toggle-slider rounded-circle"></span>
                      </label>
                    </td>
                    <td>{user.is_superuser ? "True" : "False"}</td>
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
    </>
  );
};

export default ListUser;
