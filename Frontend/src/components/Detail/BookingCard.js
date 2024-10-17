import React, { useState, useMemo, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

function BookingCard(props) {
  const dispatch = useDispatch();

  const [rootState, setRootState] = props.rootProps;
  const [countCustomer, setCountCustomer] = props.countCustomerProps;
  const homestayPrice = props.homestayPrice;
  const { bill } = props;

  let [isOpen, setIsOpen] = props.formProp;

  const CountOrderDay = useMemo(
    () =>
      Math.round(
        (rootState.checkoutDate - rootState.checkinDate) / (1000 * 60 * 60 * 24)
      ),
    [rootState.checkinDate, rootState.checkoutDate]
  );

  function checkdate(startDayChoose, endDayChoose, start, end) {
    if (
      (startDayChoose.getTime() >= new Date(start).getTime() &&
        startDayChoose.getTime() <= new Date(end).getTime()) ||
      (endDayChoose.getTime() >= new Date(start).getTime() &&
        endDayChoose.getTime() <= new Date(end).getTime()) ||
      (new Date(start).getTime() >= startDayChoose.getTime() &&
        new Date(start).getTime() <= endDayChoose.getTime()) ||
      (new Date(end).getTime() >= startDayChoose.getTime() &&
        new Date(end).getTime() <= endDayChoose.getTime())
    )
      return false;

    return true;
  }

  function checkSubmit() {
    var check = true;
    for (var i = 0; i < bill.length; i++) {
      if (
        !checkdate(
          rootState.checkinDate,
          rootState.checkoutDate,
          bill[i].checkinDate,
          bill[i].checkoutDate
        )
      ) {
        check = false;
        break;
      }
    }
    if (rootState.checkinDate.getTime() >= rootState.checkoutDate.getTime())
      toast("Vui lòng chọn lại ngày", { type: toast.TYPE.ERROR });
    else if (parseInt(countCustomer) <= 0)
      toast("Nhập lại số lượng khách", { type: toast.TYPE.ERROR });
    else if (check) {
      dispatch({
        type: "GUEST-SET",
        payload: countCustomer,
      });
      setIsOpen(true);
    } else
      toast("Đã có khách đặt vào khoảng thời gian đó", {
        type: toast.TYPE.ERROR,
      });
  }
  const handleInputChange = (e) => {
    if (e.target.validity.valid) setCountCustomer(e.target.value);
  };

  const [dayPrice, setDayPrice] = useState(0);
  const [totalPrice, setTotalPrice] = props.totalPriceProps;
  const servicePrice = props.servicePriceProps;

  useEffect(() => {
    setDayPrice(CountOrderDay * homestayPrice);
    setTotalPrice(CountOrderDay * homestayPrice + servicePrice);
  }, [CountOrderDay, servicePrice]);

  return (
    <div className>
      <div>
        <div className="border-solid border-2  shadow-xl rounded-xl lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
          <p className="text-center text-xl font-bold text-gray-800 mb-5">
            {homestayPrice} VND/đêm
          </p>
          <div className="grid grid-cols-2 border rounded-t-xl">
            <div className="grid grid-rows-2">
              <label className=" p-3 text-lg font-medium text-gray-800 text-center rounded-tl-xl border">
                Nhận Phòng
              </label>
              <ReactDatePicker
                className="text-center border rounded-md p-2 px-4 focus:outline-none border-none w-full"
                minDate={new Date()}
                selected={rootState.checkinDate}
                dateFormat="dd/MM/yyyy"
                onChange={(e) => setRootState({ ...rootState, checkinDate: e })}
              />
            </div>

            <div className="grid grid-rows-2">
              <label className="p-3 text-lg font-medium text-gray-800 text-center rounded-tr-xl border items-center">
                Trả Phòng
              </label>
              <ReactDatePicker
                className="text-center border rounded-md p-2 px-4  focus:outline-none border-none w-full"
                minDate={rootState.checkinDate}
                selected={rootState.checkoutDate}
                dateFormat="dd/MM/yyyy"
                onChange={(e) =>
                  setRootState({ ...rootState, checkoutDate: e })
                }
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-end grid grid-rows-2 border rounded-b-xl ">
            <label className="pl-5 text-lg font-medium text-gray-800 align-baseline mr-2 w-1/3">
              Khách
            </label>
            <input
              className="pl-5 border-none focus:outline-none text-md font-medium leading-6 text-gray-800 w-2/3 pb-1 pt-3"
              type="text"
              name="Số khách"
              pattern="[0-9]+"
              value={countCustomer}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-8">
            <div
              className="text-sm font-semibold leading-none text-white bg-green-400 border rounded hover:bg-green-600 py-4 w-full text-center"
              onClick={checkSubmit}
            >
              Đặt Homestay
            </div>
          </div>
          <div className="text-center my-4 font-light italic">
            bạn sẽ không phải thanh toán ngay
          </div>
          <div className="grid grid-cols-2 my-2">
            <div>
              {homestayPrice} x {CountOrderDay} đêm
            </div>
            <div className="text-right">
              <p>{dayPrice} VNĐ</p>
            </div>
          </div>

          <div className="grid grid-cols-2 my-2">
            <p className="font-bold">Phí Dịch Vụ</p>
            <div className="text-right">
              <p>{servicePrice} VNĐ</p>
            </div>
          </div>
          <hr className="border"></hr>
          <div className="grid grid-cols-2 mt-5 text-lg">
            <p className="font-bold">Tổng tiền</p>
            <div className="text-right">
              <p>{totalPrice} VNĐ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
