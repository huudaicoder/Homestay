import {UserCircleIcon} from '@heroicons/react/solid'
function Feedback(users) {
    const {description, userName, createdAt} = users.detail;
    return (
        <div className="">
            <div className="feedback mt-8">
                <div> 
                    <div className="flex">
                        <UserCircleIcon className="flex flex-row w-8 h-8 mt-2 bg-gray-500 text-white rounded-full"/>
                        <div className="flex flex-col pl-3">
                            <p className="text-lg font-medium text-black justify-start">{userName}</p>
                            <p className="text-sm text-gray-600 mb-2"> {createdAt.substring(0, 10)} </p>
                        </div>
                    </div>
                    <p className="text-md leading-relaxed ml-6"> {description} </p>
                </div>
            </div>
        </div>
    )
}

export default Feedback;