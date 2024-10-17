function Rates({cleanRate, serviceRate, valueRate, accuracyRate}) {
    const showProgress = (rate) =>
    {
        return(
             <div class="flex w-40 2xl:w-60 flex-row bg-gray-200 rounded-full h-1.5 mt-3 mr-5">
                {rate<=1 
                ? (<div class="bg-green-600 rounded-full h-1.5 w-1/5" ></div>) :
                    rate>1 && rate<=2
                    ? (<div class="bg-green-600 rounded-full h-1.5 w-2/5" ></div>) :
                        rate>2 && rate<=3
                        ? (<div class="bg-green-600 rounded-full h-1.5 w-3/5" ></div>) :
                            rate>3 && rate<=4
                            ? (<div class="bg-green-600 rounded-full h-1.5 w-4/5" ></div>) :
                            (<div class="bg-green-600 rounded-full h-1.5 w-full" ></div>) 
                }
              </div>      
        )
    }
    return (
        <div className="grid grid-cols-2">
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800">Mức độ sạch sẽ </p>
                <div className="flex">
                    {showProgress(cleanRate)}
                    <p className="flex flex-row"> {cleanRate}</p>
                </div>
            </span>
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Chất lượng dịch vụ </p>
                <div className="flex">
                    {showProgress(serviceRate)}
                    <p className="flex flex-row"> {serviceRate}</p>
                </div>
            </span>            
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Giá cả hợp lý </p>
                <div className="flex">
                    {showProgress(valueRate)}
                    <p className="flex flex-row"> {valueRate}</p>
                </div>
            </span>
            <span className="flex justify-between pr-24">
                <p className="flex flex-row text-lg text-gray-800"> Vị trí chính xác </p>
                <div className="flex">
                    {showProgress(accuracyRate)}
                    <p className="flex flex-row"> {accuracyRate}</p>
                </div>
            </span>
        </div>
    
    )
}

export default Rates;