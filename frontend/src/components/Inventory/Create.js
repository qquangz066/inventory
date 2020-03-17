import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../../history";
import useForm from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ErrorMessage from "../Common/ErrorMessage";
import categoryActions from "../../actions/categoryActions";
import queryString from "query-string";
import "../../assets/components/Inventory/Create.css";
import productActions from "../../actions/productActions";
import departmentActions from "../../actions/departmentActions";

const CreateProduct = () => {
  const categories = useSelector(state => state.category.categories);
  const departments = useSelector(state => state.department.departments);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateList, setDateList] = useState([]);
  const [categoryId, setCategoryId] = useState(undefined);
  const [departmentId, setDepartmentId] = useState(undefined);
  let { register, handleSubmit, errors } = useForm({
    defaultValues: { upc: queryString.parse(history.location.search).upc }
  });

  useEffect(() => {
    dispatch(categoryActions.list());
    dispatch(departmentActions.list());
  }, [dispatch]);

  const onSubmit = data =>
    dispatch(
      productActions.create({
        ...data,
        expiration: dateList,
        category_id: categoryId,
        department_id: departmentId
      })
    );

  return (
    <>
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
          <h3 className="mb-0">Inventories</h3>
          <button className="btn btn-primary" onClick={history.goBack}>
            Back
          </button>
        </div>
      </div>
      <div className="card bg-secondary shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="name"
                      ref={register({
                        required: "This is required.",
                        minLength: {
                          value: 3,
                          message: "This field required minLength of 3"
                        }
                      })}
                    />
                    <ErrorMessage errors={errors} name="name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label">UPC</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="upc"
                      ref={register({ required: "This is required." })}
                    />
                    <ErrorMessage errors={errors} name="upc" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Department</label>
                    <select
                      className="form-control form-control-alternative"
                      value={departmentId}
                      onChange={e => {
                        if (e.target.value === "") {
                          setDepartmentId(undefined);
                        } else {
                          setDepartmentId(e.target.value);
                        }
                      }}
                    >
                      <option value="">None</option>
                      {departments.map(department => (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Category</label>
                    <select
                      className="form-control form-control-alternative"
                      value={categoryId}
                      onChange={e => {
                        if (e.target.value === "") {
                          setCategoryId(undefined);
                        } else {
                          setCategoryId(e.target.value);
                        }
                      }}
                    >
                      <option value="">None</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Aisle</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="aisle"
                      ref={register}
                    />
                    <ErrorMessage errors={errors} name="aisle" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Bay</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="bay"
                      ref={register}
                    />
                    <ErrorMessage errors={errors} name="bay" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Description</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="description"
                      ref={register}
                    />
                    <ErrorMessage errors={errors} name="description" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Description 2</label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      name="description_2"
                      ref={register}
                    />
                    <ErrorMessage errors={errors} name="description_2" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">
                      Expiration count
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-alternative"
                      name="expiration_count"
                      ref={register({ required: "This is required." })}
                    />
                    <ErrorMessage errors={errors} name="expiration_count" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Physical count</label>
                    <input
                      type="number"
                      className="form-control form-control-alternative"
                      name="physical_count"
                      ref={register({ required: "This is required." })}
                    />
                    <ErrorMessage errors={errors} name="physical_count" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Cost</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="form-control form-control-alternative"
                      name="cost"
                      ref={register({ required: "This is required." })}
                    />
                    <ErrorMessage errors={errors} name="cost" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label">Expiration</label>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ni ni-calendar-grid-58"></i>
                        </span>
                      </div>
                      <DatePicker
                        className="form-control form-control-alternative"
                        selected={selectedDate}
                        dateFormat="yyyy-MM-dd"
                        onChange={setSelectedDate}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setDateList([
                            ...new Set([
                              ...dateList,
                              moment(selectedDate).format("YYYY-MM-DD")
                            ])
                          ]);
                        }}
                        className="form-control form-control-alternative btn btn-success"
                      >
                        Add
                      </button>
                    </div>
                    <div
                      className="form-control-copy mt-3"
                      style={{ height: "80px" }}
                    >
                      {dateList.map((date, index) => (
                        <span
                          key={index}
                          className="mr-2 fat-remove"
                          style={{ display: "inline-block" }}
                        >
                          {date}
                          <i
                            className="ni ni-fat-remove"
                            style={{
                              color: "red",
                              fontSize: "large",
                              cursor: "pointer"
                            }}
                            onClick={() => {
                              let list = [...dateList];
                              list.splice(index, 1);
                              setDateList(list);
                            }}
                          ></i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
