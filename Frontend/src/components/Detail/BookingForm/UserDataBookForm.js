import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const defaultCustomer = {
  name: "",
  age: 20,
};

const UserDataBookForm = (props) => {
  const [rootState, setRootState] = props.userProps;
  const countCustomer = props.countCustomer;

  /* State for accompaning customer */
  const [customer, setCustomer] = useState(defaultCustomer);
  // const handleChangeName = (e) => setCustomer(e.target.value);

  const handleEnterName = (e) => {
    if (e.key === "Enter" && customer.name !== "") {
      const customerTogether = [
        ...rootState.customerTogether,
        { age: customer.age, name: customer.name.trim() },
      ];
      setRootState({ ...rootState, customerTogether });
      setCustomer(defaultCustomer);
    }
  };

  const handleRemoveName = (index) => {
    const customerTogether = [...rootState.customerTogether];
    customerTogether.splice(index, 1);
    setRootState({
      ...rootState,
      customerTogether,
    });
  };

  const handleInputChange = (e) => {
    if (e.target.validity.valid) {
      const customer = {
        ...rootState.customer,
        [e.target.name]: e.target.value,
      };
      setRootState({ ...rootState, customer });
    }
  };

  return (
    <>
      <h1 className="text-xl font-medium">Thông tin liên hệ</h1>
      <div>
        <label htmlFor="customerName" className="flex flex-col p-2">
          <p className="text-md pl-4">Họ và Tên người đặt phòng</p>
          <input
            className="border px-4 py-2 rounded-md focus:outline-none"
            id="customerName"
            type="text"
            name="name"
            value={rootState.customer.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="accompanyingCustomerName" className="flex flex-col p-2">
          <p className="text-md pl-4">Họ và Tên người đi kèm</p>
          <input
            className="border px-4 py-2 rounded-md focus:outline-none"
            id="accompanyingCustomerName"
            type="text"
            name="name"
            value={customer.name}
            onChange={(e) =>
              setCustomer({ ...customer, [e.target.name]: e.target.value })
            }
            onKeyDown={handleEnterName}
            autoComplete="off"
            disabled={rootState.customerTogether.length >= countCustomer - 1}
          />
        </label>
        <div className="flex flex-wrap">
          {rootState.customerTogether.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 pr-1 border rounded-md m-2 flex items-center pointer-cursor"
            >
              {item.name}
              <button
                className="ml-2 w-6 h-6 p-1 rounded-full hover:bg-gray-200"
                onClick={() => handleRemoveName(index)}
              >
                <XIcon />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* ======================================================== */}

      <label htmlFor="phone-number" className="flex flex-col p-2">
        <span className="text-md pl-4">Số điện thoại</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="phone-number"
          type="text"
          name="phoneNumber"
          pattern="[0-9]*"
          value={rootState.customer.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="identification-number" className="flex flex-col p-2">
        <span className="text-md pl-4">Số chứng minh nhân dân</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="identification-number"
          type="text"
          name="identification"
          pattern="[0-9]*"
          value={rootState.customer.identification}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="email" className="flex flex-col p-2">
        <span className="text-md pl-4">Email</span>
        <input
          className="border px-4 py-2 rounded-md focus:outline-none"
          id="email"
          type="text"
          name="email"
          value={rootState.customer.email}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
};

export default UserDataBookForm;
