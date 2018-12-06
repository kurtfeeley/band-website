import React from "react";

import "./Modal.scss";

const Modal = ({ handleClose, show, merch, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button
          style={{ zIndex: 15, backgroundColor: '#fff' }}
          onClick={handleClose}
          className="close mr-2 mt-2"
        >
          &times;
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
