import { useEffect, useState } from "react";

const cateList = [ 
    { id: 'cate-0', checked: false, label: 'Biệt thự'}, 
    { id: 'cate-1', checked: false, label: 'Căn hộ studio'}, 
    { id: 'cate-2', checked: false, label: 'Căn hộ chung cư'}, 
    { id: 'cate-3', checked: false, label: 'Căn hộ dịch vụ'}, 
    { id: 'cate-4', checked: false, label: 'Hotel'}, 
    { id: 'cate-5', checked: false, label: 'Nhà riêng'}, 
    { id: 'cate-6', checked: false, label: 'Căn hộ'}, 
    { id: 'cate-7', checked: false, label: 'Khác'}
];

const Categories = (props) => {
    let [filterInput, setFilterInput] = props.filterInputProps
    const [cate, setCate] = useState(cateList);

    const handleCheck = index => () => {
        const tempCate = cate
        tempCate[index].checked = !tempCate[index].checked
        const reduxCate = tempCate.filter(item => item.checked === true).map(item => item.label)
        console.log(tempCate)
        setCate(tempCate)
        setFilterInput({...filterInput, type: reduxCate[0]}) // gán tạm => về sau sửa thành 1 list các type
    }

    return (
        <>
            <div className="border-b p-4">
                <h1 className="text-2xl font-bold mb-4">Danh mục</h1>
                <div className="grid grid-cols-2 gap-4">{
                    cate.map((item, index) => (
                        <label className="flex items-center space-x-3">
                            <input 
                            type="checkbox" {...item} 
                            onClick={handleCheck(index)} 
                            className="h-4 w-4"/>
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        </label>
                    ))
                }</div>
            </div>
        </>
    );
}

export default Categories;