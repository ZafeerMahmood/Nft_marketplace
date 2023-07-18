import React from 'react'
const Search_Layout = React.lazy(()=>(import( '../components/Search/Search_Layout')))
import { Suspense } from 'react'
import Discover_Loading from '../components/Dynamic_Pages_Layout/Discover_Loading'
export default function home() {
    return (
      <div className=" max-h-fit w-screen flex flex-col bg-white dark:bg-black">
   <Suspense fallback={<div>{Discover_Loading()} </div>}>
          <Search_Layout/>
          </Suspense>
      </div>
    )
  }
