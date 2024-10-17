import { Dialog, Transition } from "@headlessui/react";
import { Fragment} from "react";
import { useDispatch } from "react-redux";

import Categories from "./Categories";
import Cities from "./Cities";
import RangeSlider from "./RangeSlider";
import Service from "./Service";
import { XIcon } from "@heroicons/react/outline";

export default function FilterModal(props) {
    let [isOpen, setIsOpen] = props.openProp;
    let [filterInput, setFilterInput] = props.filterModalProps

    const dispatch = useDispatch()

    function closeModal() {
        setIsOpen(false);
    }

    function searchHandler() {
        closeModal()
        console.log(filterInput)
        dispatch({
            type: 'UPDATE',
            payload : filterInput
        })
    }

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
                    Bộ lọc
                  </Dialog.Title>
                  <button
                    className="absolute top-0 left-0 rounded-full transition ease-in-out duration-400 hover:bg-gray-200"
                    onClick={closeModal}
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                                <div className="my-4 border-t border-b max-h-xl overflow-auto">
                                    <Cities filterInputProps={[filterInput, setFilterInput]} />
                                    <Categories filterInputProps={[filterInput, setFilterInput]} />
                                    <RangeSlider filterInputProps={[filterInput, setFilterInput]} />
                                    <Service  filterInputProps={[filterInput, setFilterInput]}/>
                                </div>

                                <div className="text-center">
                                    <button 
                                    className="inline-flex justify-center px-4 py-2 text-md font-bold text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={searchHandler}
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
}
