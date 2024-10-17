import Footer from "../components/Shared/Footer";
import Description from "../components/Detail/Information/Description";
import AmenitiesAndServices from "../components/Detail/Information/AmenitiesAndServices";
import Rates from "../components/Detail/Information/Rates";
import Feedback from "../components/Detail/Information/Feedback";
import BookFormModal from "../components/Detail/BookFormModal";
import PictureContainer from "../components/Detail/PictureContainer/PictureContainer";
import BookingCard from "../components/Detail/BookingCard";
import NotiModal from "../components/Detail/NotiModal";
import Header from "../components/Shared/Header";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { toast } from "react-toastify";

const defaultState = {
  customer: {
    name: "",
    identification: "",
    email: "",
    phoneNumber: "",
    age: 20,
  },
  customerTogether: [],
  _id: "",
  checkinDate: "",
  checkoutDate: "",
  status: 2,
  servicesPerBill: [],
};

function Detail() {
  const { id } = useParams();
  const homestayId = useSelector((state) => state.homestayIdReducer);
  const filter = useSelector((state) => state.dayReducer);

  /* Root State, for query data from BE */
  const [rootState, setRootState] = useState({
    ...defaultState,
    _id: homestayId,
    checkinDate: filter.checkinDate || new Date(),
    checkoutDate: filter.checkoutDate || new Date(),
  });

  /* State for open Booking form modal */
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  /* State for open Notification modal */
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

  /* State for confirm book homestay */
  const [isConfirmed, setIsConfirmed] = useState(false);
  useEffect(() => {
    if (isConfirmed) {
      setIsConfirmed(false);
      toast("Đang chờ...", { type: toast.TYPE.INFO });
      axios({
        method: "POST",
        url: "http://localhost:8000/users/create/bills",
        data: rootState,
      })
        .then(() => toast("Thành công", { type: toast.TYPE.SUCCESS }))
        .catch((err) => {
          console.log(err.message);
          toast("Có lỗi xảy ra khi tạo đơn đặt phòng của bạn", {
            type: toast.TYPE.ERROR,
          });
        });
    }
  }, [isConfirmed]);

  /* Query data from BE */
  const [data, setData] = useState([]);
  const [bill, setBill] = useState([]);
  const [pictureList,setPictureList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/homestays/information/${id}`
        );
        console.log(response.content)
        setData(response.content.homestay);
        setBill(response.content.billOfHomestayArray);
        setPictureList(response.content.homestay.photos)
      } catch (error) {
        toast(error.message, { type: toast.TYPE.ERROR });
      }
    };
    fetchData();
  }, []);

  /* State for display total price user have to pay */
  const [servicePrice, setServicePrice] = useState();

  /* State for Booking card and Booking Form */
  const [totalPrice, setTotalPrice] = useState(0);
  const [countCustomer, setCountCustomer] = useState(0);

  //tính rate trung bình mỗi loại: clean, value, accuracy, service
  let count = 0;
  let cleanRate, valueRate, accuracyRate, serviceRate;
  if (undefined !== data.rates && data.rates.length) {
    count = data.rates.length;
    cleanRate = data.rates.reduce(
      (result, { cleanRate }) => result + cleanRate,
      0
    );
    cleanRate /= count;
    valueRate = data.rates.reduce(
      (result, { valueRate }) => result + valueRate,
      0
    );
    valueRate /= count;
    accuracyRate = data.rates.reduce(
      (result, { accuracyRate }) => result + accuracyRate,
      0
    );
    accuracyRate /= count;
    serviceRate = data.rates.reduce(
      (result, { serviceRate }) => result + serviceRate,
      0
    );
    serviceRate /= count;
  } else {
    count = 0;
    cleanRate = 0;
    valueRate = 0;
    accuracyRate = 0;
    serviceRate = 0;
  }

  const x4cmt = [...Array(4)].map((e, i) => (
    <div className="pr-24">
      {data.rates && data.rates.length
        ? data.rates.map((item) => <Feedback detail={item} />)
        : null}
    </div>
  ));

  return (
    <div>
      <Header />
      <div>
        {data.services ? (
          <BookFormModal
            openProp={[isBookingFormOpen, setIsBookingFormOpen]}
            serviceProps={data.services.map((item) => ({ ...item, amount: 0 }))}
            setServicePrice={setServicePrice}
            totalPrice={totalPrice}
            countCustomer={countCustomer}
            rootProps={[rootState, setRootState]}
            setIsConfirmed={setIsConfirmed}
          />
        ) : null}
        <NotiModal
          openProp={[isNotiModalOpen, setIsNotiModalOpen]}
          state={false}
        />
      </div>

      <PictureContainer _id = {id} pictureList = {pictureList}/>

      <div className=" max-w-2/3 mx-auto ">
        <div className="grid grid-cols-5 mt-10 border-b border-gray-300">
          <div className="col-start-1 col-end-4">
            <Description
              detail={data}
              className="border-b-2 border-gray-300 pb-8"
            />

            <div className="border-b border-gray-300 pb-8 pt-8">
              <p className="text-2xl font-bold ml-3 mb-3"> Tiện nghi có sẵn </p>
              <div className="grid grid-cols-2">
                {data.amenities && data.amenities.length
                  ? data.amenities.map((item) => (
                      <div className="flex py-1">
                        <AmenitiesAndServices
                          detail={item}
                          className="flex flex-row"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className="border-b border-gray-300 pb-8 pt-8">
              <p className="text-2xl font-bold ml-3 mb-3">
                {" "}
                Dịch vụ của Homestay{" "}
              </p>
              <div className="grid grid-cols-2">
                {data.generalServices && data.generalServices.length
                  ? data.generalServices.map((item) => (
                      <div className="flex py-1">
                        <AmenitiesAndServices
                          detail={item}
                          className="flex flex-row"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className="pb-8 pt-8">
              <p className="text-2xl font-bold ml-3 mb-3"> Dịch vụ đặt kèm </p>
              <div className="grid grid-cols-2">
                {data.services && data.services.length
                  ? data.services.map((item) => (
                      <div className="flex py-1">
                        <BoltOutlinedIcon className="text-gray-900 mr-3 mt-1" />
                        <p className="text-lg text-gray-900 flex flex-row">
                          {item.name}
                        </p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>

          <div className="col-start-4 col-span-2 my-8 ml-10">
            <BookingCard
              rootProps={[rootState, setRootState]}
              formProp={[isBookingFormOpen, setIsBookingFormOpen]}
              homestayPrice={data.price}
              bill={bill}
              servicePriceProps={servicePrice}
              totalPriceProps={[totalPrice, setTotalPrice]}
              countCustomerProps={[countCustomer, setCountCustomer]}
            />
          </div>
        </div>

        <div className="pb-8 pt-8">
          <div className="flex mb-3">
            <p className="flex flex-row text-2xl font-bold ml-3"> Đánh giá </p>
            <p className="flex flex-row text-lg font-medium mt-1 ml-5">
              ({count * 4} đánh giá)
            </p>
          </div>
          <Rates
            cleanRate={cleanRate}
            valueRate={valueRate}
            serviceRate={serviceRate}
            accuracyRate={accuracyRate}
          />

          <div className="grid grid-cols-2">{x4cmt}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
