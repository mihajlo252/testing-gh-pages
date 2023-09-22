import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

export const CvModal = () => {
  return (
    <div>
      <button
        className="btn bg-base-300 border-none bg-opacity-50 absolute bottom-2 right-2 rounded-full"
        onClick={() => window.my_modal_1.showModal()}
        aria-label="Expand Image"
      >
        <BsArrowsAngleExpand />
      </button>
      <dialog id="my_modal_1" className="modal scale-[1.2]">
        <form
          method="dialog"
          className="modal-box"
        >
          {/* Izmeniti src i alt po potrebi */}
          <img src="/cv/cv_example.png" alt="CV Example" />
          <div className="modal-action scale-100">
            <button className="btn" aria-label="Close Button">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
