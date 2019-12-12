import React from "react";
import Footer from "../../layouts/Footer";

const Inventory = () => {
  return (
    <>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        </div>
        <div className="container-fluid mt--7">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header border-0">
              <h3 className="mb-0">Card tables</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/bootstrap.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Argon Design System</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $2,500 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> pending
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/angular.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Angular Now UI Kit PRO</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $1,800 USD
                    </td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-success"></i> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/sketch.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $3,150 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-danger"></i> delayed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width:'72%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/react.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">React Material Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $4,400 USD
                    </td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-info"></i> on schedule
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/vue.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $2,200 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-success"></i> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer py-4">
              <nav aria-label="...">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                      <i className="fas fa-angle-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="card bg-default shadow">
            <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Card tables</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/bootstrap.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Argon Design System</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $2,500 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> pending
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/angular.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Angular Now UI Kit PRO</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $1,800 USD
                    </td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-success"></i> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/sketch.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $3,150 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-danger"></i> delayed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width:'72%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/react.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">React Material Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $4,400 USD
                    </td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-info"></i> on schedule
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="/assets/img/theme/vue.jpg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      $2,200 USD
                    </td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-success"></i> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                          <img alt="Image placeholder" src="/assets/img/theme/team-1-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                          <img alt="Image placeholder" src="/assets/img/theme/team-2-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                          <img alt="Image placeholder" src="/assets/img/theme/team-3-800x800.jpg" className="rounded-circle"/>
                        </a>
                        <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                          <img alt="Image placeholder" src="/assets/img/theme/team-4-800x800.jpg" className="rounded-circle"/>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Inventory;
