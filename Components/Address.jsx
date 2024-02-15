import { Fragment, useState, useContext } from "react";
import { PageContext } from "@/Store/PageContext";
function Address() {
  const {
    DataVal,
    editData,
    handlerEdit,
    handlerCancel,
    handlerSave,
    handlerChange,
  } = useContext(PageContext);
  // State variables to store input field values
  const [formData, setFormData] = useState({
    address: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    contact: "",
  });

  // Handler function to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <div className="mt-12 ps-4">
        <h1 className="text-xl mb-6 font-medium text-zinc-600">Deluxe Room</h1>
        <div className="w-full ms-4  ">
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              Address :
            </label>
            <div class="md:flex flex-1 items-start">
              <textarea
                id="address"
                name="address"
                value={DataVal.address}
                onChange={(e) => {
                  handlerChange("address", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.address && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("address")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("address")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.address && (
                <button
                  onClick={() => handlerEdit("address")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="landmark"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              Landmark :
            </label>
            <div class="md:flex flex-1 items-start">
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={DataVal.landmark}
                onChange={(e) => {
                  handlerChange("landmark", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.landmark && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("landmark")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("landmark")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.landmark && (
                <button
                  onClick={() => handlerEdit("landmark")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              City :
            </label>
            <div class="md:flex flex-1 items-start">
              <input
                type="text"
                id="city"
                name="city"
                value={DataVal.city}
                onChange={(e) => {
                  handlerChange("city", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.city && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("city")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("city")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.city && (
                <button
                  onClick={() => handlerEdit("city")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              State :
            </label>
            <div class="md:flex flex-1 items-start">
              <input
                type="text"
                id="state"
                name="state"
                value={DataVal.state}
                onChange={(e) => {
                  handlerChange("state", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.state && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("state")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("state")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.state && (
                <button
                  onClick={() => handlerEdit("state")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              Postal Code :
            </label>
            <div className="md:flex flex-1 items-start">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={DataVal.postalCode}
                onChange={(e) => {
                  handlerChange("postalCode", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.postalCode && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("postalCode")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("postalCode")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.postalCode && (
                <button
                  onClick={() => handlerEdit("postalCode")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              Email:
            </label>
            <div className="md:flex flex-1 items-start">
              <input
                type="email"
                id="email"
                name="email"
                value={DataVal.email}
                onChange={(e) => {
                  handlerChange("email", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.email && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("email")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("email")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.email && (
                <button
                  onClick={(e) => handlerEdit("email", e)}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-start">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 md:w-32 md:mt-2"
            >
              Contact:
            </label>
            <div className="md:flex flex-1 items-start">
              <input
                type="number"
                id="contact"
                name="contact"
                value={DataVal.contact}
                onChange={(e) => {
                  handlerChange("contact", e);
                }}
                className="mt-1 p-2 w-full md:mr-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {editData.contact && (
                <>
                  <button
                    className="mt-2 md:mt-3 mr-2 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerCancel("contact")}
                  >
                    Cancel
                  </button>
                  <button
                    className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                    onClick={() => handlerSave("contact")}
                  >
                    Save
                  </button>
                </>
              )}
              {!editData.contact && (
                <button
                  onClick={() => handlerEdit("contact")}
                  className="mt-2 md:mt-3 block text-sm font-medium text-white bg-indigo-500 py-1 px-2 rounded-md md:w-auto"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
