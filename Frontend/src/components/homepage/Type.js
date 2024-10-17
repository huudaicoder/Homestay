import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

import tag1 from '../../public/tag/tag1.jpg';
import tag2 from '../../public/tag/tag2.jpg';
import tag3 from '../../public/tag/tag3.jpg';
import tag4 from '../../public/tag/tag4.jpg';

const tagList = [
    { name: 'Biệt thự ', img: tag2, href: '#' },
    { name: 'Studio', img: tag3, href: '#' },
    { name: 'Nhà riêng', img: tag1, href: '#' },
    { name: 'Căn hộ', img: tag4, href: '#' },
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

function Type() {
    const dispatch = useDispatch()

    function typeHandler(type) {
        const tempFilter = { ...filter, type: type }
        dispatch({
            type: "UPDATE",
            payload: tempFilter
        })
    }
    return (
        <div className="container mx-auto max-w-3/4 md:max-w-5/6 pt-16">
            <p className="md:text-4xl text-base font-bold font-sans"> Chưa biết đi đâu? </p>
            <p className="md:text-xl text-base my-3 font-sans"> Hãy cùng Jade Hill khám phá những địa điểm thú vị </p>
            <div className="flex items-center justify-center w-full h-full py-6 md:py-8">
                <div className="lg:flex hidden items-center justify-center gap-4 mx-6">
                    {tagList.map(item =>
                        <div className="inline-block flex-shrink-0 w-1/4 bg-white cursor-pointer">
                            <Link to='/homestay' onClick={() => typeHandler(item.name)}>
                                <div className="overflow-hidden">
                                    <img src={item.img} alt="" className="transition-all duration-300 ease-in-out hover:scale-110 transform bg-center bg rounded-md object-cover object-center" />
                                </div>
                                <p className="text-center md:text-xl text-base font-semibold text-gray-800 pt-2"> {item.name} </p>
                            </Link>
                        </div>

                    )}
                </div>

                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full mx-1 overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex gap-5 items-center justify-start transition ease-out duration-700">
                                    {tagList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => typeHandler(item.name)}>
                                                <div className="inline-block flex-shrink-0 w-full bg-white cursor-pointer" href={item.href}>
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <p className="text-center md:text-sm text-base font-semibold text-gray-800 pt-2"> {item.name} </p>
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

                <CarouselProvider className="block md:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 shadow rounded-full bg-white bg-opacity-50 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-opacity-90 cursor-pointer" id="prev">
                            <ChevronLeftIcon className="w-4 h-4 mx-4 justify-between text-gray-800" />
                        </ButtonBack>
                        <div className="w-full h-full mx-1 overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex gap-4 items-center justify-start transition ease-out duration-700">
                                    {tagList.map((item, index) =>
                                        <Slide>
                                            <Link to='/homestay' onClick={() => typeHandler(item.name)}>
                                                <div className="inline-block flex-shrink-0 w-full bg-white cursor-pointer" href={item.href}>
                                                    <img src={item.img} alt="" className="rounded-md object-cover object-center w-full" />
                                                    <p className="text-center md:text-sm text-base font-semibold text-gray-800 pt-2"> {item.name} </p>
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
            </div>


        </div>
    );

}

export default Type