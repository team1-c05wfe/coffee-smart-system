import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaSearch, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa"; // Import thêm icon đăng xuất

const Dashboard = () => {
  const [selected, setSelected] = useState("dashboard");

  const handleClick = (item) => {
    setSelected(item);
  };
  return (
    <div>
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <Link className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Admin Management
            </h6>
          </Link>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <Link aria-current="page" className="active" to="/staff">
                <button
                  // className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white shadow-md  w-full flex items-center gap-4 px-4 capitalize bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                  className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "dashboard"
                      ? "shadow-md disabled:opacity-50 bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                      : ""
                    }`}
                  onClick={() => handleClick("dashboard")}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    dashboard
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link className="" to="/staff/sale">
                <button
                  className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "sale"
                      ? "shadow-md disabled:opacity-50 bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                      : ""
                    }`}
                  onClick={() => handleClick("sale")}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>

                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Sale
                  </p>
                </button>

              </Link>
            </li>
            <li>
              <Link className="" to="/staff/feedback">
                <button
                  // className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "manage"
                      ? "shadow-md disabled:opacity-50 bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                      : ""
                    }`}
                  onClick={() => handleClick("manage")}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>

                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Manage
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link className="" href="#">
                <button
                  className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    notifactions
                  </p>
                </button>
                <Link to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                  Quay Về Trang Chủ
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
