import { useEffect, useState } from "react";

const serviceList = [
  { id: "service-0", checked: false, label: "Bể bơi" },
  { id: "service-1", checked: false, label: "Phòng karaoke" },
  { id: "service-2", checked: false, label: "Suối nước nóng" },
  { id: "service-3", checked: false, label: "Coffee bên hồ" },
  { id: "service-4", checked: false, label: "Dọn phòng" },
  { id: "service-5", checked: false, label: "Cho thuê xe tự lái" },
  { id: "service-6", checked: false, label: "Dịch vụ giặt ủi" },
  { id: "service-7", checked: false, label: "Massage trị liệu" },
  { id: "service-8", checked: false, label: "Xông hơi" },
  { id: "service-9", checked: false, label: "Thuê hướng dẫn viên du lịch" },
];

const Service = (props) => {
  const [services, setServices] = useState(serviceList);
  let [filterInput, setFilterInput] = props.filterInputProps

  function handleCheck(index) {
    const tempService = services
    tempService[index].checked = !tempService[index].checked
    const reduxService = tempService.filter(item => item.checked === true).map(item => item.label)

    console.log(tempService)
    setServices(tempService)
    setFilterInput({ ...filterInput, generalService: reduxService })

  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Tiện nghi</h1>
        <div className="grid grid-cols-2 gap-4">
          {services.map((item, index) => (
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...item}
                onClick={() => handleCheck(index)}
                className="h-4 w-4"
              />
              <span className="text-gray-900 font-medium">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
