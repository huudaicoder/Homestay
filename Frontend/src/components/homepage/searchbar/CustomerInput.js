import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";

function CustomerInput(props) {
  const [data, setData] = props.dataProps;
  const [isOpen, setIsOpen] = props.openProps;
  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleFocus = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <button
        className={`w-full h-full flex flex-col justify-center sm:px-4 px-8 hover:bg-green-50 rounded-full ${
          isOpen ? "shadow-lg" : ""
        }`}
        onClick={handleOpen}
      >
        <h1 className="text-sm font-bold">Khách</h1>
        <p className="text-gray-400">Thêm khách</p>
      </button>

      {isOpen ? (
        <div
          className="absolute top-16 right-12 px-4 py-2 w-80 bg-white rounded-lg divide-y-2 divide-green-50"
          onClick={handleFocus}
        >
          {/* Adult */}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-lg">Nguời lớn</h1>
              <p className="text-sm text-gray-500">Từ 13 tuổi trở lên</p>
            </div>
            <div className="flex items-center">
              <button
                className={`${
                  data.adult === 0 ? "opacity-10 cursor-not-allowed" : ""
                }`}
                onClick={() =>
                  data.adult > 0 ?
                  setData((old) => ({ ...old, adult: data.adult - 1 })) : ""
                }
              >
                <MinusCircleIcon className="w-6" />
              </button>
              <span className="mx-3 text-xl">{data.adult}</span>
              <button
                onClick={() =>
                  setData((old) => ({ ...old, adult: data.adult + 1 }))
                }
              >
                <PlusCircleIcon className="w-6" />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-lg">Trẻ em</h1>
              <p className="text-sm text-gray-500">Độ tuổi 2 - 12</p>
            </div>
            <div className="flex items-center">
              <button
                className={`${
                  data.children === 0 ? "opacity-10 cursor-not-allowed" : ""
                }`}
                onClick={() =>
                  data.children > 0 ?
                  setData((old) => ({ ...old, children: data.children - 1 })) : ""
                }
              >
                <MinusCircleIcon className="w-6" />
              </button>
              <span className="mx-3 text-xl">{data.children}</span>
              <button
                onClick={() =>
                  setData((old) => ({ ...old, children: data.children + 1 }))
                }
              >
                <PlusCircleIcon className="w-6" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CustomerInput;
