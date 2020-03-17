import React, { useState } from "react";
import Scanner from "./Scanner";
import "../../assets/components/Inventory/Scan.css";
import history from "../../history";

const ScanProduct = () => {
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);
  const [zoom, setZoom] = useState(1);
  const onDetected = result => {
    setResult(result);
  };

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
        <div className="card-body row">
          <button
            className="btn btn-secondary mb-2 mr-3"
            onClick={() => setCamera(!camera)}
          >
            {camera ? "Stop" : "Scan"}
          </button>

          <div className="form-group" style={{ width: "60px" }}>
            <label>Zoom</label>
            <select
              className="form-control"
              onChange={event => setZoom(parseInt(event.target.value))}
              value={zoom}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div className="scanner-container">
            {camera && <Scanner onDetected={onDetected} zoom={zoom} />}
          </div>
        </div>
      </div>

      {result && (
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
                <h5 class="modal-title">Detected barcode</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setResult(null)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: "0.5rem" }}>
                {result}
              </div>
              <div className="modal-footer" style={{ padding: "0.5rem" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setResult(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    setCamera(false);
                    setResult(null);
                    // history.push(`/dashboard/inventories/upc/${result}`);
                    history.push(`/dashboard/inventories?upc=${result}`);
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScanProduct;
