import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import IntroTitle from "./IntroTitle";
import PlaceInput from "./PlaceInput";
import DatetimeInput from "./DatetimeInput";
import CustomerInput from "./CustomerInput";
import {Link} from "react-router-dom"

const defaultData = {
  place: "",
  from: "",
  to: "",
  adult: 0,
  children: 0,
};

function SearchBar() {
  const [data, setData] = useState(defaultData);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // const testDate = new Date(data.from.year, data.from.month, data.from.day);

    dispatch({
      type: "UPDATE",
      payload: {
        province: data.place,
      },
    });
    dispatch({
      type: "GUEST-SET",
      payload: data.adult + data.children
    })
    dispatch({
      type: "DAY-UPDATE",
      payload: {
        checkinDate: new Date(data.from.year, data.from.month, data.from.day),
        checkoutDate: new Date(data.to.year, data.to.month, data.to.day)
      }
    })
  };

  /* This will effect when click outside the dropdown */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="container mx-auto pb-32 w-11/12 h-screen flex flex-col items-center justify-center"
        onClick={() => setIsOpen(false)}
      >
        <IntroTitle />
        <div className="relative flex bg-white rounded-full">
          <PlaceInput dataProps={[data, setData]} />
          <DatetimeInput dataProps={[data, setData]} />
          <CustomerInput
            dataProps={[data, setData]}
            openProps={[isOpen, setIsOpen]}
          />
          <Link
            className="flex justify-center flex-col sm:px-4 px-8 hover:bg-green-50 focus:shadow-xl rounded-full"
            onClick={handleSubmit}
            to="/homestay"
          >
            <SearchIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
