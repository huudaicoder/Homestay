import HomepageHeader from "../components/homepage/HomepageHeader"
import RecommendedHotelWrapper from "../components/homepage/RecommendHotelWrapper"
import FamousCity from '../components/homepage/FamousCity'
import Type from '../components/homepage/Type'
import Footer from "../components/Shared/Footer"

import React, { useState, useReducer, useEffect } from 'react'

function Homepage() {
    return (
        <div classnName="bg-gray-200">
            <HomepageHeader />
            <FamousCity />
            <Type />
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <p className="text-4xl font-bold mt-5  ">Được đánh giá tốt</p>
                <p className="text-xl mt-3">Homestay nào có nhiều đánh giá tốt, hãy cùng JadeHill khám phá nhé</p>
            </div>
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <RecommendedHotelWrapper />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Homepage