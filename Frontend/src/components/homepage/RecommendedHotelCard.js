import pointToComment from "../../helpers/pointToComment"
import { Link } from 'react-router-dom'
const evaluated = [
    { text: "Perfect", color: "text-green-600", bg: "bg-green-100" },
    { text: "Good", color: "text-blue-600", bg: "bg-blue-100" },
    { text: "Acceptable", color: "text-yellow-600", bg: "bg-yellow-100" },
]
function RecommendedHotelCard(props) {
    const { averageRates, address, name, price, _id } = props.detail
    const evaluatedPoint = pointToComment(averageRates)
    const ratingShow = (
        <div className="flex">
            <div className={`${evaluated[evaluatedPoint].bg} w-10 items-center  text-center rounded-md`}>
                <p className={`font-bold ${evaluated[evaluatedPoint].color}`}>{averageRates}</p>
            </div>
            <p className={`ml-2 font-bold ${evaluated[evaluatedPoint].color}`}>{evaluated[evaluatedPoint].text}</p>

        </div>
    )
    return (
        <div className="shadow-2xl p-4 rounded-2xl">
            <Link to={`/detail/${_id}`}>
                <div className="bg-gray-800 h-64 shadow-xl rounded-2xl">
                    <img src={`http://localhost:8000${props.detail.photos[0].url}`} className="w-full h-full shadow-xl rounded-2xl" />
                </div>
                <p className="my-2 font-bold text-xl h-12"> {name}</p>
                <p className="my-2">{address}</p>
                <div className="flex justify-between mt-8">
                    {ratingShow}
                    <div className="flex flex-row">
                        <p className="font-bold mr-1"> {price}</p>
                        <p> VND/Ngày</p>
                    </div>

                </div>
            </Link>
        </div>

    )

}

export default RecommendedHotelCard