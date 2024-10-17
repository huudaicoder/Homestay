import { Link } from "react-router-dom"
import logo from "../../public/logo.png"

const FooterCity =[
    {
        title: "Hà Nội",
        link: "link"
    },
    {
        title: "TP.Hồ Chí Minh",
        link: "link"
    },
    {
        title: "Đà Nẵng",
        link: "link"
    }
]

const FooterAboutUs =[
    {
        title: "FaceBook",
        link: "https://www.facebook.com/dhbkhanoi",
        icon: "https://img.icons8.com/color/30/000000/facebook.png"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/hust_dhbkhanoi/",
        icon: "https://img.icons8.com/fluency/30/000000/instagram-new.png"
    }
]

const FooterTag = [
    {
        title:"View Biển",
        link: "link"
    },
    {
        title: "Rừng Núi",
        link: "link"
    },
    {
        title: "Lửa Trại",
        link: "link"
    },
    {
        title: "Hồ Bơi",
        link: "link"
    }
]

const FooterCityList = FooterCity.map( (item) =>
    <li className = "my-2">
        <Link to = {item.link}>{item.title}</Link>
    </li>
);

const FooterAboutUsList = FooterAboutUs.map( (item) =>
    <li className = "flex flex-no-wrap my-5">
        <img src = {item.icon}/>
        <a href = {item.link} className ="ml-2">{item.title}</a>
    </li>
)

const FooterTagList = FooterTag.map( (item) =>
    <li className = "my-2">
        <Link to = {item.link}>{item.title}</Link>
    </li>
)
function Footer (){
    const FooterGrid = "text-white text:md mx-20";
    return (
        <div className="w-full bg-gray-600 grid grid-cols-4 pt-20 pb-10 mt-20">

            <div className= {FooterGrid}>
                <p className = "text-xl font-medium">Thành Phố Nổi Bật</p>
                <ul>
                    {FooterCityList}
                </ul>
            </div>

            <div className= {FooterGrid} >
            <p className = "text-xl font-medium">Khám Phá</p>
                <ul>
                    {FooterTagList}
                </ul>
            </div>

            <div className= {FooterGrid}>
                <p className = "text-xl font-medium">Về Chúng Tôi</p>
                <ul>
                    {FooterAboutUsList}
                    <li className = "flex flex-no-wrap my-5 ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="ml-2">(+84) 123 456 789</p>
                    </li>
                </ul>
            </div>

            <div className = "mx-auto">
                <img
                    className="h-40 w-40"
                    src= {logo}
                    alt="Logo"
                />
            </div>
        </div>
    );
}

export default Footer