import React, { createContext, useState } from "react";
import db from "@/fireStone";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const PageContext = createContext();

const PageDataProvider = ({ children }) => {
  const [DataVal, setDataVal] = useState({
    AirConditioning: true,
    ChildFriendly: true,
    Laundry: true,
    RoomService: true,
    Hottub: true,
    restaurant: true,
    SwimmingPool: true,
    FitnessCenter: true,
    hotelDescription: "",
    sharePrice: "",
    propertyType: "",
    hotelStars: "",
    roomFees: "",
    carParking: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    contact: "",
  });
  const [editData, setEditData] = useState({
    AirConditioning: "",
    ChildFriendly: "",
    Laundry: "",
    RoomService: "",
    Hottub: "",
    restaurant: "",
    SwimmingPool: "",
    FitnessCenter: "",
    hotelDescription: "",
    sharePrice: "",
    propertyType: "",
    hotelStars: "",
    roomFees: "",
    carParking: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    contact: "",
  });
  const [PreValues, setPreValues] = useState({});

  const handlerEdit = (fieldName) => {
    setPreValues((prevOldValues) => ({
      ...prevOldValues,
      [fieldName]: DataVal[fieldName],
    }));
    setEditData((prevEditData) => ({
      ...prevEditData,
      [fieldName]: true,
    }));
  };
  const handlerCancel = (fieldName) => {
    setEditData((prevEditMode) => ({
      ...prevEditMode,
      [fieldName]: false,
    }));
    setDataVal((prevValues) => ({
      ...prevValues,
      [fieldName]: PreValues[fieldName],
    }));
  };

  const handlerSave = async (fieldName) => {
    setEditData((prevEditMode) => ({
      ...prevEditMode,
      [fieldName]: false,
    }));
    const querySnapshot = await getDocs(collection(db, "userData"));
    querySnapshot.forEach(async (docs) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const docID = docs.id;
      const washingtonRef = doc(db, "userData", docID);
      await updateDoc(washingtonRef, {
        [fieldName]: DataVal[fieldName],
      });
    });
  };

  const handlerChange = (fieldName, e) => {
    setDataVal((prevValues) => ({
      ...prevValues,
      [fieldName]: e.target.value,
    }));
  };

  const handlerSubmit = async () => {
    console.log("function submit");
    const result = await addDoc(collection(db, "userData"), {
      AirConditioning: DataVal.AirConditioning,
      ChildFriendly: DataVal.ChildFriendly,
      Laundry: DataVal.Laundry,
      RoomService: DataVal.RoomService,
      Hottub: DataVal.Hottub,
      restaurant: DataVal.restaurant,
      SwimmingPool: DataVal.SwimmingPool,
      FitnessCenter: DataVal.FitnessCenter,
      hotelDescription: DataVal.hotelDescription,
      sharePrice: DataVal.sharePrice,
      propertyType: DataVal.propertyType,
      hotelStars: DataVal.hotelStars,
      roomFees: DataVal.roomFees,
      carParking: DataVal.carParking,
      address: DataVal.address,
      landmark: DataVal.landmark,
      city: DataVal.city,
      state: DataVal.state,
      postalCode: DataVal.postalCode,
      email: DataVal.email,
      contact: DataVal.contact,
    });
    console.log(result);
  };

  const getAllData = async () => {
    const querySnapshot = await getDocs(collection(db, "userData"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setDataVal(doc.data());
    });
  };

  return (
    <PageContext.Provider
      value={{
        DataVal,
        editData,
        handlerEdit,
        handlerCancel,
        handlerSave,
        handlerChange,
        handlerSubmit,
        getAllData,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageDataProvider };
