import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function HomestayCard(props) {
    const dispatch = useDispatch()
    const { name, type, price, averageRates, photos, _id } = props.detail
    function detailHandler() {
        dispatch({
            type: "ID-SET",
            payload: _id
        })
    }
    return (
        <div className="">
            <Link to={`/detail/${_id}`} onClick={detailHandler}>
            <div className="bg-gray-800 h-56 2xl:h-72 rounded-2xl overflow-hidden">
                <img 
                src={photos[0]?.url === undefined? "../../public/no_image.png":`http://localhost:8000${photos[0]?.url}`}
                className="w-full h-full shadow-xl rounded-2xl transition-all duration-300 ease-in-out hover:scale-110 transform" />
            </div>
            </Link>
            <p className="mb-2 font-bold md:text-base text-base h-auto truncate my-2"> {name}</p>
            <div className="flex justify-between my-2 flex-row">
                <p className="">{type}</p>
                <div className="flex flex-row">
                    <p className="font-bold mr-1"> {price}</p>
                    <p> VND/ Ngày</p>
                </div>
            </div>
        </div>
    )
}
export default HomestayCard;