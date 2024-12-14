// PopDelete.js
import React from "react";
import "./PopDelete.css";

const PopDelete = ({ closeModal, onDeleteConfirm }) => {
  return (
    <div className="pop-delete-overlay">
      <div className="pop-delete-container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Are you sure you want to delete this property?</h2>
        <div className="button-group">
          <button className="button yes-button" onClick={onDeleteConfirm}>
            Yes
          </button>
          <button className="button no-button" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopDelete;
