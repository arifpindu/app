import React from "react";
function Alert(props) {
  return (
    props.alert && (
      <div className=" my-1">
        <div
          id="alert"
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong></strong> {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            id="myid"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
