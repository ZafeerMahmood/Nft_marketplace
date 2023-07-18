export const CardUser = ({ image, link, name, Discription, type }) => {
    var component;
    if (type === "Video") {
        component = <video controls className="object-cover h-full w-full rounded-2xl scale-95 hover:scale-100 ease-in duration-300" src={image}></video>
    }
    else if (type === "Music") {
        component = <audio controls className="object-cover h-full w-full rounded-2xl scale-95 hover:scale-100 ease-in duration-300" src={image}></audio>
    }
    else {
        component = <img className="object-cover h-full w-full rounded-2xl scale-95 hover:scale-100 ease-in duration-300" src={image}></img>
    }

    return (
        <div className=" shadow-md dark:shadow-gray-800 shadow-gray-400 dark:bg-black bg-gray-200  dark:border-gray-900 border-gray-600 h-[16rem] w-[10rem]    md:h-[18rem] md:w-[12rem] lg:h-[22rem] lg:w-[16rem] xl:h-[22rem] xl:w-[16rem] 2xl:h-[22rem] 2xl:w-[16rem] rounded-2xl  border border-opacity-20 ">
            <a href={link} >
                <div className=" h-2/3 w-5/6 mt-4 mx-auto rounded-2xl ">
                    {component}
                </div>
                <div className="space-y-0 md:space-y-1 pl-8 pt-3 md:pl-10 md:pt-4">
                    <div className="dark:text-white text-black text-sm md:text-base font-light md:font-normal">{name}</div>
                    <div className="text-gray-600 text-xs md:text-sm ">{Discription} </div>
                </div>
            </a>
        </div>
    );
};


