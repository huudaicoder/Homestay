import CellWifiOutlinedIcon from '@mui/icons-material/CellWifiOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SoapOutlinedIcon from '@mui/icons-material/SoapOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import WbShadeOutlinedIcon from '@mui/icons-material/WbShadeOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

const matchIcon = [
  //amenities
  {
    icon: <CellWifiOutlinedIcon className="text-gray-900 mr-3"/>,
    name: "Wifi"
  },
  {
    icon: <OpacityOutlinedIcon className="text-gray-900 mr-3"/>,
    name: "Dầu gội, dầu xả"
  },
  {
    icon: <PersonalVideoOutlinedIcon  className="text-gray-900 mr-3"/>,
    name: "Tivi"
  },
  {
    icon: <DryCleaningOutlinedIcon  className="text-gray-900 mr-3"/>,
    name: "Khăn tắm"
  },
  {
    icon: <SentimentSatisfiedOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Kem đánh răng"
  },
  {
    icon: <SoapOutlinedIcon  className="text-gray-900 mr-3"/>,
    name: "Xà phòng tắm"
  },
  {
    icon: <AirOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Máy sấy"
  },
  {
    icon: <SoupKitchenOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Bếp điện"
  },
  {
    icon: <KitchenOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Tủ lạnh"
  },
  {
    icon: <WbShadeOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Ban công"
  },
  //generalServies
  {
    icon: <PoolOutlinedIcon className="text-gray-900 mr-3"/>,
    name: "Bể bơi"
  },
  {
    icon: <LibraryMusicOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Phòng karaoke"
  },
  {
    icon: <HotTubOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Suối nước nóng"
  },
  {
    icon: <EmojiFoodBeverageOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Coffee bên hồ"
  },
  {
    icon: <CleaningServicesOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Dọn phòng"
  },
  {
    icon: <DirectionsCarOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Cho thuê xe tự lái"
  },
  {
    icon: <LocalLaundryServiceOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Dịch vụ giặt ủi"
  },
  {
    icon: <SpaOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Massage trị liệu"
  },
  {
    icon: <FireplaceOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Xông hơi"
  },
  {
    icon: <HailOutlinedIcon className="text-gray-900 mr-3" />,
    name: "Thuê hướng dẫn viên du lịch"
  }
]

function AmenitiesAndServices(homestay) {
    const {name}=homestay.detail;
   
    return (
        <div className='flex'>
            {matchIcon.map(item => (
                item.name === name
                    ? <p className="flex flex-row" >{item.icon}</p> 
                    : null)
                )
            }
            <p className="text-lg text-gray-900 flex flex-row">{name} </p>           
        </div>
    )
} 

export default AmenitiesAndServices;