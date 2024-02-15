import { useState, useContext, useEffect } from "react";
import { PageContext } from "@/Store/PageContext";
import { getDocs, collection } from "firebase/firestore";
import db from "@/fireStone";
function Attribute({ querySnapshot }) {
  const { getAllData } = useContext(PageContext);

  const [checkboxes, setCheckboxes] = useState({
    AirConditioning: true,
    ChildFriendly: true,
    Laundry: true,
    RoomService: true,
    Hottub: true,
    restaurant: true,
    SwimmingPool: true,
    FitnessCenter: true,
  });
  useEffect(() => {
    getAllData();
  }, []);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked || !checkboxes[name]) {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [name]: checked,
      }));
    }
  };

  return (
    <div className="mt-12 px-4">
      <h1 className="text-xl mb-6 font-medium text-zinc-600">Deluxe Room</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 ">
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Air Conditioning:
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="AirConditioning"
                checked={checkboxes.AirConditioning}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.AirConditioning}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    AirConditioning: !prevCheckboxes.AirConditioning,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Child - Friendly:
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="ChildFriendly"
                checked={checkboxes.ChildFriendly}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.ChildFriendly}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    ChildFriendly: !prevCheckboxes.ChildFriendly,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Room Service :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="RoomService"
                checked={checkboxes.RoomService}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.RoomService}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    RoomService: !prevCheckboxes.RoomService,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Laundry Service :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="Laundry"
                checked={checkboxes.Laundry}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.Laundry}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    Laundry: !prevCheckboxes.Laundry,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Hot Tub :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="Hottub"
                checked={checkboxes.Hottub}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.Hottub}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    Hottub: !prevCheckboxes.Hottub,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Restaurant :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="restaurant"
                checked={checkboxes.restaurant}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.restaurant}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    restaurant: !prevCheckboxes.restaurant,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Fitness Center :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="FitnessCenter"
                checked={checkboxes.FitnessCenter}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.FitnessCenter}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    FitnessCenter: !prevCheckboxes.FitnessCenter,
                  }))
                }
              />
            </label>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-base font-semibold text-stone-700 flex-1">
            Swimming Pool :
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              Yes
              <input
                type="checkbox"
                name="SwimmingPool"
                checked={checkboxes.SwimmingPool}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={handleCheckboxChange}
              />
            </label>
            <label className="text-md font-semibold text-gray-700 inline-flex items-center">
              No
              <input
                type="checkbox"
                checked={!checkboxes.SwimmingPool}
                className="h-4 w-4 ml-1 border border-gray-300 focus:ring-indigo-500 checked:bg-white checked:border-transparent"
                onChange={() =>
                  setCheckboxes((prevCheckboxes) => ({
                    ...prevCheckboxes,
                    SwimmingPool: !prevCheckboxes.SwimmingPool,
                  }))
                }
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "userData"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    console.log(doc);
    // setDataVal(doc.data());
  });

  // Return the fetched data as props
  return {
    props: {
      querySnapshot,
    },
  };
}
export default Attribute;
