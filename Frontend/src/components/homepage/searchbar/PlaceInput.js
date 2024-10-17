import { useState } from "react";
import { matchSorter } from "match-sorter";

const cityList = [
  "An Giang",
  "Bà Rịa – Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "TP Hồ Chí Minh",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

function PlaceInput(props) {
  const [data, setData] = props.dataProps;
  const [focus, setFocus] = useState(false);

  // const handleInput = (e) => {
  //   const tempData = { ...data, place: e.target.value };
  //   setData(tempData);
  // };

  return (
    <>
      <label
        htmlFor="search-place"
        className={`flex flex-col justify-center font-bold px-8 py-2 w-max cursor-pointer rounded-full group hover:bg-green-50 ${
          focus ? "shadow-lg" : ""
        }`}
      >
        <span className="text-sm">Địa điểm</span>
        <input
          id="search-place"
          className="text-md border-none group-hover:bg-green-50 focus:outline-none"
          placeholder="Bạn muốn đi đâu?"
          value={data.place}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) =>
            setData((old) => ({ ...old, place: e.target.value }))
          }
          autoComplete="off"
        />
      </label>
      {data.place === "" || !focus ? null : (
        <div
          className="absolute top-16 left-6 w-1/3 font-normal text-md bg-white overflow-y-auto px-2 "
          style={{ maxHeight: "15rem" }}
        >
          {/* No suggestions, you're on your own */}
          {matchSorter(cityList, data.place).length === 0 ? (
            "Không có kết quả"
          ) : (
            <ul>
              {matchSorter(cityList, data.place).map((item) => (
                <li
                  key={item}
                  className="mt-1 cursor-pointer"
                  onMouseDown={() =>
                    setData((old) => ({ ...old, place: item }))
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default PlaceInput;
