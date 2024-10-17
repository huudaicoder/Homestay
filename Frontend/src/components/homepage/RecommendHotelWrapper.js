import {useEffect, useState} from 'react'
import axios from 'axios'
import RecommendedHotelCard from "./RecommendedHotelCard"


function RecommendedHotelWrapper () {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try {
                const {data: response} = await axios.get('http://localhost:8000/homestays/ranking?quantity=4');
                setData(response.content)
                console.log(response.content)
            } 
            catch (error) {
                console.error(error.message);
              }
        }
        fetchData()


    }, [])
    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8"> 
            {data.map(homestay => <RecommendedHotelCard detail={homestay} />)}
        </div>
    )

}

export default RecommendedHotelWrapper