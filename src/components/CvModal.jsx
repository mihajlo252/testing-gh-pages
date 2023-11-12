import React from "react";

export const CvModal = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box"
        >
          {/* Izmeniti src i alt po potrebi */}
          <img src="assets/cv/cv_example.png" alt="CV Example" />
          <div className="modal-action scale-100">
            <button className="btn" aria-label="Close Button">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
