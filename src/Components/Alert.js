import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}
