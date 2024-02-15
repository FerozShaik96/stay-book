import React, { useState, useContext } from "react";
import { PageContext } from "@/Store/PageContext";
function Description() {
  const {
    DataVal,
    editData,
    handlerEdit,
    handlerCancel,
    handlerSave,
    handlerSubmit,
    handlerChange,
  } = useContext(PageContext);
  // State variables to store the input values
  // const [DataVal, setFormData] = useState({
  //   hotelDescription: "",
  //   hotelName: "",
  //   distance: "",
  //   duration: "",
  // });

  return (
    <div className="my-12 ps-4">
      <h1 className="text-xl mb-6 font-medium text-zinc-600">Deluxe Room</h1>
      <div className="w-11/12 mx-auto ps-6 pt-6 ">
        <div className="flex items-start mb-4 flex-wrap">
          <label
            htmlFor="hotel-description"
            className="flex-shrink-0 mr-4 mb-2 md:mb-0 mt-1 text-base font-semibold text-stone-700"
          >
            Hotel Description:
          </label>
          <textarea
            id="hotel-description"
            name="hotelDescription"
            className="border rounded-md w-full md:w-7/12 px-4 py-2"
            value={DataVal.hotelDescription}
            onChange={(e) => {
              handlerChange("hotelDescription", e);
            }}
            rows={4}
            placeholder="Write the Description"
          />
          {editData.hotelDescription && (
            <>
              <button
                className="inline mr-2 mt-2 md:mt-0 bg-indigo-500 text-white rounded-md px-2 py-1  ml-2"
                onClick={() => handlerCancel("hotelDescription")}
              >
                Cancel
              </button>
              <button
                className="inline mt-2 md:mt-0 bg-indigo-500 text-white rounded-md px-2 py-1  ml-2"
                onClick={() => handlerSave("hotelDescription")}
              >
                Save
              </button>
            </>
          )}
          {!editData.hotelDescription && (
            <button
              onClick={() => handlerEdit("hotelDescription")}
              className="inline mt-2 md:mt-0 bg-indigo-500 text-white rounded-md px-2 py-1  ml-2"
            >
              Edit
            </button>
          )}
        </div>

        <hr className="my-6" />
        <h1 className="text-base mb-6 font-semibold text-stone-700">
          Hotel near the Airport
        </h1>
        <div className="flex flex-col items-start gap-3 mb-6">
          <label className="block text-sm md:w-28 font-semibold text-stone-700">
            Hotel Name :
          </label>
          <div className="flex items-center w-full">
            <input
              type="text"
              name="hotelName"
              className="border rounded-md px-4 py-2 w-full md:w-2/5 text-sm placeholder-opacity-50"
              placeholder="Write the Name"
              value={DataVal.hotelName}
              onChange={(e) => {
                handlerChange("", e);
              }}
            />
            {/* <button className="inline bg-indigo-500 text-white rounded-md px-4 py-2 mt-1 ml-2">
              Edit
            </button> */}
          </div>
        </div>
        {/* Distance and Duration */}
        <div className="flex flex-col md:flex-row items-start gap-3 mb-6">
          <input
            type="text"
            name="distance"
            className="border rounded-md px-4 py-2 w-full md:w-2/5 text-sm placeholder-opacity-50"
            placeholder="Distance"
            value={DataVal.distance}
            onChange={(e) => {
              handlerChange("", e);
            }}
          />
          <input
            type="text"
            name="duration"
            className="border rounded-md px-4 py-2 w-full md:w-2/5 text-sm placeholder-opacity-50"
            placeholder="Duration"
            value={DataVal.duration}
            onChange={(e) => {
              handlerChange("", e);
            }}
          />
        </div>
        <div className="flex justify-end">
          <button
            className=" md:w-auto bg-indigo-500 text-white rounded-md px-4 py-2 text-sm font-medium"
            onClick={handlerSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
