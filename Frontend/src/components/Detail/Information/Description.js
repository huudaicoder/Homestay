import {HeartIcon, LocationMarkerIcon} from '@heroicons/react/outline'

function Description (homestay) {
    const {name, averageRates, address, description} = homestay.detail;
    return (
        <div className="border-b border-gray-300">
            <div className="title border-b border-gray-300 pb-8">
                <p className="md:text-4xl sm:text-3xl font-bold mb-4"> {name}</p>
                <span className="flex mb-2 ml-4">
                    <div className="w-7 h-7 rounded-full bg-gray-400">
                        <HeartIcon className="flex flex-row w-5 text-white ml-1 mt-1" />
                    </div>
                    <p className="flex flex-row text-base font-semibold ml-3 pt-1"> {averageRates} / 5.0</p>
                </span>

                <span className="flex mb-2 ml-4">
                    <div className="w-7 h-7 rounded-full bg-gray-400">
                        <LocationMarkerIcon className="flex flex-row w-5 text-white ml-1 mt-1" />
                    </div>
                    <p className="flex flex-row text-base font-semibold ml-3 pt-1"> {address} </p>
                </span>
            </div>
            
            <div className="description my-6">
                <p className="text-2xl font-bold my-3 ml-3"> Giới thiệu </p>
                <p className="text-md mb-2 leading-loose">{description} </p>
            </div>
            
        </div>
    )
}

export default Description;