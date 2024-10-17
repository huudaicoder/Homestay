import FilteredHomestays from "../components/homestay/pagination/FilteredHomestays"
import Pagination from "../components/homestay/pagination/Pagination"
import FilterModal from '../components/homestay/FilterModal'
import Header from '../components/Shared/Header'

import React, { useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import axios from "axios";


function Homestays() {
    const [homestays, setHomestays] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(null)
    const [isOpen, setIsOpen]= useState(false)
    const filterData = useSelector((state) => state.filterReducer)
    const [filterInput, setFilterInput] = useState(filterData)
      /* Loading State */
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8000/homestays/filter', {
            params: {...filterData, slice: currentPage}
        })
        .then(res => {
            setHomestays(res.data.content.homestays)
            //console.log(res.data.content.homestay)
            setTotalPage(res.data.content.sliceTotal)
            setIsLoading(false)
        })

    }, [])
    
    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8000/homestays/filter', {
            params: {...filterData, slice: currentPage}
        })
        .then(res => {
            setHomestays(res.data.content.homestays)
            setTotalPage(res.data.content.sliceTotal)
            setIsLoading(false)
        })

    }, [filterData, currentPage])

    function modalOpenHandler () {
        setIsOpen(true)
    }
    // Chọn page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="mx-auto py-2">
             <Header />
             <div className="flex flex-row item-centers mx-auto py-2 max-w-9/10 justify-between ">
                <span className="align-middle self-center "> Tìm kiếm theo filter</span>
                <button 
                onClick={modalOpenHandler} 
                className="mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-gray-300 rounded-full border-2 border-gray-200 pl-3 pr-3 py-2 text-sm"
                >
                    <p className=""> Bộ lọc</p>
                </button>
            </div>
            <FilterModal openProp={[isOpen, setIsOpen]} filterModalProps = {[filterInput, setFilterInput]}/>
            {isLoading ? (
            <div className="flex justify-center mt-6">
            <div
              className="w-16 h-16 border-8 border-green-400 rounded-full border-solid animate-spin"
              style={{ borderTop: "8px solid transparent" }}
            />
          </div>
        ): (
            <FilteredHomestays homestay={homestays}/>)}
            <Pagination
                totalPages={totalPage}
                paginate={paginate}
                currentPage={currentPage}
               
            />
        </div>
    )
}

export default Homestays
