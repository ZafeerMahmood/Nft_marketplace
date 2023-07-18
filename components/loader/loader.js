const Loader = () => {
    const circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';

    return (
   <div className='flex h-fit w-fit '>
        <div className={`${circleCommonClasses} mr-1 dark:bg-slate-900 bg-gray-200 animate-pulse ` }></div>
        <div className={`${circleCommonClasses} mr-1 dark:bg-slate-900 bg-gray-200 animate-pulse `}></div>
        <div className={`${circleCommonClasses} mr-1 dark:bg-slate-900 bg-gray-200 animate-pulse `}></div>
   </div>
    );
};

export default Loader;