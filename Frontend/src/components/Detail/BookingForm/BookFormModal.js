import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookForm from "./BookForm";

const initUserInfo = {
  username: [],
  phoneNumber: "",
  identificationNumber: "",
  email: "",
};

const serviceName = [
  { name: "Lẩu thái", pricePerUnit: 300000, amount: 0 },
  { name: "Buffet", pricePerUnit: 1000000, amount: 0 },
  { name: "Karaoke", pricePerUnit: 500000, amount: 0 },
  { name: "Tiệc mini", pricePerUnit: 500000, amount: 0 },
  { name: "Lẩu hải sản", pricePerUnit: 250000, amount: 0 },
  { name: "BBQ King", pricePerUnit: 200000, amount: 0 },
  { name: "Nướng", pricePerUnit: 200000, amount: 0 },
  { name: "Cơm bình dân", pricePerUnit: 50000, amount: 0 },
  { name: "Gỏi", pricePerUnit: 500000, amount: 0 },
];

const BookFormModal = (props) => {
  const { from, to } = useSelector((state) => state.filterReducer);

  const [isOpen, setIsOpen] = props.openProp;
  const closeModal = () => setIsOpen(false);

  const [userInfo, setUserInfo] = useState(initUserInfo);
  const [timedate, setTimedate] = useState({
    startDate: from === "" ? new Date() : from,
    endDate: to === "" ? new Date() : to,
  });
  const [serviceState, setServiceState] = useState(serviceName);
  const [servicePrice, setServicePrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < serviceState.length; i++) sum += serviceState[i].pricePerUnit * serviceState[i].amount;
    setServicePrice(sum);
  }, [serviceState]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur-sm"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-2xl w-2/3 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="relative">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 text-center"
                  >
                    Đặt phòng
                  </Dialog.Title>
                  <button
                    className="absolute top-0 left-0 rounded-full transition ease-in-out duration-400 hover:bg-gray-200"
                    onClick={closeModal}
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="my-4 border-t border-b max-h-xl overflow-y-scroll overflow-x-hidden">
                  <BookForm
                    userProps={[userInfo, setUserInfo]}
                    timedateProps={[timedate, setTimedate]}
                    serviceProps={[serviceState, setServiceState]}
                  />
                </div>

                <div className="text-center">
                  <button className="inline-flex justify-center px-4 py-2 text-md font-bold text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                    {servicePrice === 0 ? 'Xác nhận' : `${servicePrice}đ`}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookFormModal;
