import Address from "@/Components/Address";
import { getStaticPaths } from "next";

import Attribute from "@/Components/Attributes";
import AriDetails from "@/Components/Ari-Details";
import Description from "@/Components/Description";
import React, { Fragment, useState } from "react";
import { PageDataProvider } from "@/Store/PageContext";

function Data() {
  const [count, setCount] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PageDataProvider>
      {/* Sidebar Toggle Button */}
      <button
        className="block md:hidden fixed top-0 left-0 z-50 w-full h-full  "
        onClick={toggleSidebar}
        style={{ display: isSidebarOpen ? "block" : "none" }}
      ></button>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 z-50 w-4/5 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="mt-20">
            {/* Navigation Links */}
            <div
              className={`py-2 text-center ${
                count === 1 ? "border-b-2 rounded-t-lg border-blue-500" : ""
              }`}
              onClick={() => {
                setCount(1);
                toggleSidebar();
              }}
            >
              Attributes
            </div>
            <div
              className={`py-2 text-center ${
                count === 2 ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => {
                setCount(2);
                toggleSidebar();
              }}
            >
              ARI - Details
            </div>
            <div
              className={`py-2 text-center ${
                count === 3 ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => {
                setCount(3);
                toggleSidebar();
              }}
            >
              Address
            </div>
            <div
              className={`py-2 text-center ${
                count === 4 ? "border-b-2 rounded-b-lg border-blue-500" : ""
              }`}
              onClick={() => {
                setCount(4);
                toggleSidebar();
              }}
            >
              Description
            </div>
          </div>
          {/* Sidebar Close Button */}
          <button
            className="bg-indigo-500 text-white py-2 rounded-b-lg"
            onClick={toggleSidebar}
          >
            Close
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="w-full md:w-9/12 mx-auto mt-20">
          <div className="flex text-lg font-medium items-center justify-between mb-4">
            {/* Mobile Navbar Toggle Button */}
            <button className="block md:hidden ml-2" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {/* Desktop Navbar */}
            <div
              className={`py-2 w-1/4 text-center ${
                count === 1
                  ? "border-b-2 rounded-bl-lg border-blue-500"
                  : "border-e-2 bg-gray-100"
              } hidden md:block`}
              onClick={() => setCount(1)}
            >
              Attributes
            </div>
            <div
              className={`py-2 w-1/4 text-center ${
                count === 2
                  ? "border-b-2 border-blue-500"
                  : "border-e-2 bg-gray-100"
              } hidden md:block`}
              onClick={() => setCount(2)}
            >
              ARI - Details
            </div>
            <div
              className={`py-2 w-1/4 text-center ${
                count === 3
                  ? "border-b-2 border-blue-500"
                  : " border-e-2 bg-gray-100"
              } hidden md:block`}
              onClick={() => setCount(3)}
            >
              Address Details
            </div>
            <div
              className={`w-1/4 py-2 text-center ${
                count === 4
                  ? "border-b-2 rounded-br-lg border-blue-500"
                  : "bg-gray-100"
              } hidden md:block`}
              onClick={() => setCount(4)}
            >
              Description
            </div>
          </div>
          {/* Main Content based on count */}
          {count === 1 && <Attribute />}
          {count === 2 && <AriDetails />}
          {count === 3 && <Address />}
          {count === 4 && <Description />}
        </div>
      </div>
    </PageDataProvider>
  );
}

export default Data;
