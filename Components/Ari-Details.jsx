import React, { Fragment, useContext, useState } from "react";
import { PageContext } from "@/Store/PageContext";
function AriDetails() {
  // const [formData, setFormData] = useState({
  //   sharePrice: "",
  //   propertyType: "",
  //   hotelStars: "",
  //   roomFees: "",
  //   carParking: "",
  // });
  const {
    DataVal,
    editData,
    handlerEdit,
    handlerCancel,
    handlerSave,
    handlerChange,
  } = useContext(PageContext);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <Fragment>
      <div className="mt-12 ps-4">
        <h1 className="text-xl mb-6 font-medium text-zinc-600">Deluxe Room</h1>
        <div className="w-11/12 mx-auto ps-6 pt-6 ">
          <div className="mb-6 flex flex-col md:flex-row items-start">
            <label className="block mt-2 text-sm font-medium text-gray-700 md:w-32">
              Share Price :
            </label>
            <div className="md:flex items-center flex-1">
              <input
                type="text"
                name="sharePrice"
                className="mt-1 md:h-12 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={DataVal.sharePrice}
                onChange={(e) => handlerChange("sharePrice", e)}
              />
            </div>
            {editData.sharePrice && (
              <>
                <button
                  className="mt-2 ml-2 mr-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
                  onClick={() => handlerCancel("sharePrice")}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                  onClick={() => handlerSave("sharePrice")}
                >
                  Save
                </button>
              </>
            )}
            {!editData.sharePrice && (
              <button
                onClick={() => handlerEdit("sharePrice")}
                className="mt-2 ml-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
          <div className="mb-6 flex flex-col md:flex-row items-start">
            <label className="block mt-2 text-sm font-medium text-gray-700 md:w-32">
              Property Type :
            </label>
            <div className="md:flex items-center flex-1">
              <input
                type="text"
                name="propertyType"
                className="mt-1 md:h-12 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={DataVal.propertyType}
                onChange={(e) => handlerChange("propertyType", e)}
              />
            </div>
            {editData.propertyType && (
              <>
                <button
                  className="mt-2 ml-2 mr-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
                  onClick={() => handlerCancel("propertyType")}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                  onClick={() => handlerSave("propertyType")}
                >
                  Save
                </button>
              </>
            )}
            {!editData.propertyType && (
              <button
                onClick={() => handlerEdit("propertyType")}
                className="mt-2 ml-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
          <div className="mb-6 flex flex-col md:flex-row items-start">
            <label className="block mt-2 text-sm font-medium text-gray-700 md:w-32">
              Hotel Stars :
            </label>
            <div className="md:flex items-center flex-1">
              <input
                type="text"
                name="hotelStars"
                className="mt-1 md:h-12 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={DataVal.hotelStars}
                onChange={(e) => handlerChange("hotelStars", e)}
              />
            </div>
            {editData.hotelStars && (
              <>
                <button
                  className="mt-2 ml-2 mr-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
                  onClick={() => handlerCancel("hotelStars")}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                  onClick={() => handlerSave("hotelStars")}
                >
                  Save
                </button>
              </>
            )}
            {!editData.hotelStars && (
              <button
                onClick={() => handlerEdit("hotelStars")}
                className="mt-2 ml-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
          <div className="mb-6 flex flex-col md:flex-row items-start">
            <label className="block mt-2 text-sm font-medium text-gray-700 md:w-32">
              Room Fees :
            </label>
            <div className="md:flex items-center flex-1">
              <input
                type="text"
                name="roomFees"
                className="mt-1 md:h-12 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={DataVal.roomFees}
                onChange={(e) => handlerChange("roomFees", e)}
              />
            </div>
            {editData.roomFees && (
              <>
                <button
                  className="mt-2 ml-2 mr-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
                  onClick={() => handlerCancel("roomFees")}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                  onClick={() => handlerSave("roomFees")}
                >
                  Save
                </button>
              </>
            )}
            {!editData.roomFees && (
              <button
                onClick={() => handlerEdit("roomFees")}
                className="mt-2 ml-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
          <div className="mb-6 flex flex-col md:flex-row items-start">
            <label className="block mt-2 text-sm font-medium text-gray-700 md:w-32">
              Car Parking :
            </label>
            <div className="md:flex items-center flex-1">
              <input
                type="text"
                name="carParking"
                className="mt-1 md:h-12 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={DataVal.carParking}
                onChange={(e) => handlerChange("carParking", e)}
              />
            </div>
            {editData.carParking && (
              <>
                <button
                  className="mt-2 ml-2 mr-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
                  onClick={() => handlerCancel("carParking")}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                  onClick={() => handlerSave("carParking")}
                >
                  Save
                </button>
              </>
            )}
            {!editData.carParking && (
              <button
                onClick={() => handlerEdit("carParking")}
                className="mt-2 ml-2 md:mt-3 px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-md"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AriDetails;
