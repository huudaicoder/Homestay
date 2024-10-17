import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";



const ServiceBookForm = (props) => {
  const [serviceState, setServiceState] = props.serviceProps;

  const handleAddService = (index, flag) => () => {
    /**
     * flag = true: plus
     * flag = false: minus
     */
    if (flag === false && serviceState[index].amount === 0) return;

    const tempServiceState = [
      ...serviceState.slice(0, index),
      {
        ...serviceState[index],
        amount: serviceState[index].amount + (flag === true ? 1 : -1),
      },
      ...serviceState.slice(index + 1),
    ];
    setServiceState(tempServiceState);
  };

  return (
    <div className="mt-6 pt-2 border-t">
      <h1 className="text-xl font-medium">Danh mục dịch vụ</h1>
      <div className="grid grid-cols-2 gap-2 px-4">
        {serviceState.map((item, index) => (
          <div
            className="py-2 mr-6 flex items-center justify-between"
            key={index}
          >
            {/* Infomation */}
            <div>
              <p className="font-semibold text-md">{item.name}</p>
              <p className="font-light text-sm opacity-50">{item.pricePerUnit}đ</p>
            </div>

            {/* Button */}
            <div className="flex items-center">
              <button
                className={`${
                  item.amount === 0 ? "opacity-10 cursor-not-allowed" : ""
                }`}
                onClick={handleAddService(index, false)}
              >
                <MinusCircleIcon className="w-6 h-auto" />
              </button>
              <span className="mx-2 text-xl font-medium">{item.amount}</span>
              <button onClick={handleAddService(index, true)}>
                <PlusCircleIcon className="w-6 h-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBookForm;
