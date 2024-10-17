import { useState } from "react";
import { matchSorter } from "match-sorter";

const cityList = [  
    'An Giang', 'Bà Rịa – Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước',
    'Bình Thuận', 'Cà Mau', 'Cần Thơ', 'Cao Bằng', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp',
    'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên',
    'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An',
    'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng',
    'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'TP Hồ Chí Minh', 'Trà Vinh', 'Tuyên Quang',
    'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
]

const Cities = (props) => {
    let [filterInput, setFilterInput] = props.filterInputProps
    const [place, setPlace] = useState(filterInput.province);
    const [focus, setFocus] = useState(false);

    const handleInput = (e) => {
        setPlace(e.target.value);
        setFilterInput({...filterInput, province: e.target.value})
    }
    const handleClick = (item) => () => {
        setFocus(false);
        setPlace(item);
        setFilterInput({...filterInput, province: item})
    } 

    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-2xl font-bold mb-4">Thành phố</h1>
                <input type="text" placeholder="Địa điểm" 
                    className="border rounded-md w-full p-2 mb-2 focus:outline-none" 
                    value={place} 
                    onChange={handleInput}
                    onFocus={() => setFocus(true)}
                />
                {
                    focus && place !== '' ? 
                    matchSorter(cityList, place).map(item => 
                        <button 
                            className="border rounded-full p-2 mr-2 mt-2 transition transform hover:border-8 hover:border-green-500 hover:shadow-sm hover:scale-105" 
                            onClick={handleClick(item)}
                        >
                            {item}
                        </button>)
                    : ''
                }
            </div>
        </>
    )
}

export default Cities;