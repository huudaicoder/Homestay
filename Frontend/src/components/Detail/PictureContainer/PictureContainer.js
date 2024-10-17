import Modal from "react-modal";
import Masonry from "react-masonry-css";
import {useState} from "react";

import './PictureContainer.css';

function PictureContainer(props) {
    const _id = props._id
    const [pictureShow, setPictureShow] = useState(false)
    const pictureList  = props.pictureList
    const fakedataPictureURL = pictureList.map((item)=> item.url)
    
    // const fakedataPictureURL = [
    // "https://picsum.photos/id/129/4910/3252",
    // "https://picsum.photos/id/13/2500/1667",
    // "https://picsum.photos/id/130/3807/2538",
    // "https://picsum.photos/id/131/4698/3166",
    // "https://picsum.photos/id/132/1600/1066",
    // "https://picsum.photos/id/133/2742/1828",
    // "https://picsum.photos/id/134/4928/3264",
    // "https://picsum.photos/id/135/2560/1920",
    // "https://picsum.photos/id/141/2048/1365",
    // "https://picsum.photos/id/142/4272/2848",
    // "https://picsum.photos/id/1025/4951/3301",
    // "https://picsum.photos/id/1024/1920/1280",
    // "https://picsum.photos/id/1023/3955/2094",
    // "https://picsum.photos/id/1022/6000/3376",
    // "https://picsum.photos/id/1021/2048/1206",
    // "https://picsum.photos/id/1020/4288/2848",
    // "https://picsum.photos/id/102/4320/3240",
    // "https://picsum.photos/id/1019/5472/3648",
    // "https://picsum.photos/id/1023/3955/2094",
    // "https://picsum.photos/id/1022/6000/3376",
    // "https://picsum.photos/id/1021/2048/1206",
    // "https://picsum.photos/id/1020/4288/2848",
    // "https://picsum.photos/id/102/4320/3240"
    // ]
const [modalImg, setModalImg] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState("")
const [indexImg, setIndexImg] = useState(100000)

const showImg  = (imgSrc,imgIndex) =>{
    setModalImg(true)
    setTempImgSrc(imgSrc)
    setIndexImg(imgIndex)
    
}

const NextImg = (i) =>{
    if((i+1) !== fakedataPictureURL.length){
    setIndexImg(i+1)
    setTempImgSrc(fakedataPictureURL[i+1])
    }
}

const BackImg = (i) =>{
    if(i!==0){
    setIndexImg(i-1)
    setTempImgSrc(fakedataPictureURL[i-1])
    }
}

const picturelist = fakedataPictureURL.map((item,index) =>
    <div  onClick={()=> showImg(item,index)}>
        <img className="picture" src={`http://localhost:8000${item}`} key={index}></img>
    </div>
)
    
    return(
        <div className="max-w-2/3 mx-auto mt-4">
            <div className="grid-container">
                    <img onClick={()=> setPictureShow(true)} src = {`http://localhost:8000${fakedataPictureURL[0]}`} className=" rounded-l-xl picture picture1 "></img>
                    <img onClick={()=> setPictureShow(true)} src = {`http://localhost:8000${fakedataPictureURL[1]}`} className=" picture"></img>
                    <img onClick={()=> setPictureShow(true)} src = {`http://localhost:8000${fakedataPictureURL[2]}`} className=" picture rounded-tr-xl"></img>
                    <img onClick={()=> setPictureShow(true)} src = {`http://localhost:8000${fakedataPictureURL[3]}`} className=" picture"></img>
                    <img onClick={()=> setPictureShow(true)} src = {`http://localhost:8000${fakedataPictureURL[4]}`} className=" picture rounded-br-xl"></img> 
            </div>
            <div >
                <Modal
                className="modal1"
                isOpen = {pictureShow}>
                    <button onClick={()=>setPictureShow(false)} className=" my-5 pl-5 sticky top-10">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    
                    <Modal
                        className="modal2"
                        isOpen={modalImg}>

                        <button onClick={()=>setModalImg(false)} className="X sticky top-10">
                            <svg class="w-12 h-12 text-gray-500 hover:text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <div className="flex flex-row justify-center"> 

                        <button className="Back" onClick={()=> BackImg(indexImg)}>
                            <svg class="w-20 h-20 text-gray-500 hover:text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <img className="max-w-2/3 mx-auto" src={tempImgSrc} key={indexImg}></img>


                        <button className="Next " onClick={()=> NextImg(indexImg)}>
                            <svg class="w-20 h-20 text-gray-500 hover:text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                        </div>
                        <div>
                            <p className="mt-3 text-center text-white text-xl">{indexImg+1} /{ fakedataPictureURL.length}</p>
                        </div>
                    </Modal>

                    <Masonry
                        className = "max-w-2/3 mx-auto"
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {picturelist}
                    </Masonry>
                    
                </Modal>
            </div>
        </div>
    )
}

export default PictureContainer;