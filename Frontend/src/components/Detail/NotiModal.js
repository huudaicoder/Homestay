import { Dialog, Transition } from "@headlessui/react";
import { XIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const NotiModal = (props) => {
  const [isNotiModalOpen, setIsNotiModalOpen] = props.openProp;
  const setConfirmState = props.setConfirmState;
  const closeModal = () => {
    setIsNotiModalOpen(false);
    setConfirmState(false);
  };

  return (
    <>
      <Transition appear show={isNotiModalOpen} as={Fragment}>
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
              <div className="inline-block max-w-2xl w-1/4 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="relative">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 text-center"
                  >
                    Đặt phòng
                  </Dialog.Title>
                </div>

                <div className="mt-2 mb-6">
                  {props.state ? (
                    <div className="text-green-500 flex flex-col items-center">
                      <CheckCircleIcon className="w-36" />
                      <p>Thành công</p>
                    </div>
                  ) : (
                    <div className="text-red-500 flex flex-col items-center">
                      <XCircleIcon className="w-36" />
                      <p>Không thành công</p>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button
                    onClick={closeModal}
                    className="inline-flex justify-center px-4 py-2 text-md font-bold text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Xác nhận
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

export default NotiModal;
