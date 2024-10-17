import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import DaNang from '../../public/city/DaNang.jpg';
import NhaTrang from '../../public/city/NhaTrang.jpg';
import QuyNhon from '../../public/city/QuyNhon.jpg';
import PhuQuoc from '../../public/city/PhuQuoc.jpg';
import HaNoi from '../../public/city/HaNoi.jpg';
import DaLat from '../../public/city/DaLat.jpg';
import Sapa from '../../public/city/Sapa.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const cityList = [
    { name: 'Đà Nẵng', img: DaNang, href: '#' },
    { name: 'Nha Trang', img: NhaTrang, href: '#' },
    { name: 'Hà Nội', img: HaNoi, href: '#' },
    { name: 'Quy Nhơn', img: QuyNhon, href: '#' },
    { name: 'Đà Lạt', img: DaLat, href: '#' },
    { name: 'Phú Quốc', img: PhuQuoc, href: '#' },
    { name: 'Sapa', img: Sapa, href: '#' },
]
const filter = {
    province: '',
    type: '',
    avarageRates: '',
    amenities: [],
    generalService: [],
    minPrice: 0,
    maxPrice: 10000000,
    checkinDate: '',
    checkoutDate: '',
  }

function FamousCity() {
    const dispatch = useDispatch()

    function cityHandler(city) {
        const tempFilter = {...filter, province: city}
        dispatch({
            type: "UPDATE",
            payload: tempFilter
        })
    }
    return (
        <div className="container mx-auto pt-16 max-w-3/4 md:max-w-5/6">
            <p className="md:text-4xl text-base font-bold"> Thành phố nổi tiếng </p>
            <p className="md:text-xl text-base my-3"> Cùng Jade Hill bắt đầu chuyến hành trình chinh phục thế giới của bạn </p>
            <div className="flex items-center justify-center w-full h-full py-6 md:py-8">
                {/* Carousel for very large size devices */}
                <CarouselProvider className="2xl:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={5} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full overflow-x-hidden overflow-y-hidden mx-1">
                            <Slider>
                                <div id="slider" className="h-full flex md:gap-6 gap-10 items-center justify-start transition ease-out duration-700">
                                    {cityList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => cityHandler(item.name)}>  
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer" href={item.href}>
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <div className="bg-none absolute w-full h-full p-6">
                                                        <div className="flex h-full items-end justify-center pb-4">
                                                            <h3 className="px-4 bg-gray-700 rounded-lg bg-opacity-5 h-auto md:text-xl text-base font-semibold leading-5 lg:leading-6 text-white"> {item.name} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Slide>
                                    )}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide backward" className="w-12 h-12 rounded-full bg-white bg-opacity-50 absolute z-30 right-0 mr-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronRightIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="2xl:hidden lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full overflow-x-hidden overflow-y-hidden mx-1">
                            <Slider>
                                <div id="slider" className="h-full flex md:gap-6 gap-10 items-center justify-start transition ease-out duration-700">
                                    {cityList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => cityHandler(item.name)}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer" href={item.href}>
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <div className="bg-none absolute w-full h-full p-6">
                                                        <div className="flex h-full items-end justify-center pb-4">
                                                            <h3 className="px-4 bg-gray-700 rounded-lg bg-opacity-5 h-auto md:text-xl text-base font-semibold leading-5 lg:leading-6 text-white"> {item.name} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Slide>
                                    )}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide backward" className="w-12 h-12 rounded-full bg-white bg-opacity-50 absolute z-30 right-0 mr-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronRightIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full mx-1 overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {cityList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => cityHandler(item.name)}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer">
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <div className="bg-none absolute w-full h-full p-6">
                                                        <div className="flex h-full items-end justify-center pb-4">
                                                            <h3 className="px-4 bg-gray-700 rounded-lg bg-opacity-5 h-auto md:text-xl text-base font-semibold leading-5 lg:leading-6 text-white"> {item.name} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Slide>
                                    )}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide backward" className="w-12 h-12 rounded-full bg-white bg-opacity-50 absolute z-30 right-0 mr-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronRightIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full mx-1 overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    {cityList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => cityHandler(item.name)}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer" href={item.href}>
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <div className="bg-none absolute w-full h-full p-6">
                                                        <div className="flex h-full items-end justify-center pb-4">
                                                            <h3 className="px-4 bg-gray-700 rounded-lg bg-opacity-5 h-auto md:text-xl text-base font-semibold leading-5 lg:leading-6 text-white"> {item.name} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Slide>
                                    )}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide backward" className="w-12 h-12 rounded-full bg-white bg-opacity-50 absolute z-30 right-0 mr-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronRightIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonNext>
                    </div>
                </CarouselProvider >
            </div >
        </div >
    );
}
export default FamousCity