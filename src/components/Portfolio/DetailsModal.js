import React from "react";

const DetailsModal = ({ show, setShow, data }) => {
  const { info, technologies } = data;
  if (show && data) {
    return (
      <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal bg-slate-800 bg-opacity-80">
          <div className="modal-box relative bg-sky-800">
            <label
              htmlFor="my-modal-3"
              className="btn btn-xs btn-primary btn-circle absolute right-1 top-2"
              onClick={() => setShow(false)}
            >
              ✕
            </label>
            <h2 className="text-lg mb-2 pl-2 rounded-xl bg-sky-600 text-sky-100 font-semibold text-center">
              Short Description
            </h2>
            <ol className="text-slate-200">
              {info?.map((data, index) => (
                <li key={index}>
                  {index + 1}. {data}
                </li>
              ))}
            </ol>
            <h2 className="mt-8 text-lg mb-4 pl-2 rounded-xl bg-sky-600 text-sky-100 font-semibold text-center">
              Technologies
            </h2>
            <div className="flex flex-wrap flex-shrink-1 gap-2">
              {technologies?.map((technology) => (
                <span className="hover:scale-105 transition ease-in-out duration-300 px-2 py-1 bg-sky-800 rounded-xl border  border-sky-500 gap-2">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DetailsModal;
