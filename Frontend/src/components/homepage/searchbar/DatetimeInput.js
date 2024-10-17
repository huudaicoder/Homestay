import { useState, useEffect } from "react";
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";

function DatetimeInput(props) {
  const [data, setData] = props.dataProps;

  const [fromFocus, setFromFocus] = useState(false);
  const [toFocus, setToFocus] = useState(false);
  
  const renderCustomInput = ({ ref }) => {
    return (
      <div className="flex h-full">
        <button
          ref={ref}
          className={`w-32 h-full flex flex-col justify-center sm:px-4 px-8 hover:bg-green-50 rounded-full ${
            fromFocus ? "shadow-xl" : ""
          }`}
          onFocus={() => setFromFocus(true)}
          onBlur={() => setFromFocus(false)}
        >
          <h1 className="text-sm font-bold">Nhận phòng</h1>
          <p className="text-gray-400">
            {data.from
              ? Object.values(data.from).join("-")
              : "Thêm ngày"}
          </p>
        </button>
        <button
          className={`w-32 h-full flex flex-col justify-center sm:px-4 px-8 hover:bg-green-50 rounded-full ${
            toFocus ? "shadow-xl" : ""
          }`}
          ref={ref}
          onFocus={() => setToFocus(true)}
          onBlur={() => setToFocus(false)}
        >
          <h1 className="text-sm font-bold">Trả phòng</h1>
          <p className="text-gray-400">
            {data.to
              ? Object.values(data.to).join("-")
              : "Thêm ngày"}
          </p>
        </button>
      </div>
    );
  };

  return (
    <>
      <DatePicker
        minimumDate={utils().getToday()}
        calendarClassName="cld"
        value={data}
        onChange={setData}
        renderInput={renderCustomInput}
        shouldHighlightWeekends
      />
      <style>{`
        .cld {
          font-size: 8px !important;
        }
      `}</style>
    </>
  );
}

export default DatetimeInput;
