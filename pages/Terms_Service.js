import React from 'react'
const Terms = React.lazy(()=>(import('../components/Terms_and_Service/Terms_Service_Layout')))
import Discover_Loading from '../components/Dynamic_Pages_Layout/Discover_Loading'
import { Suspense } from 'react'
export default function Terms_Service() {
  return (
    <div className='flex dark:bg-black bg-white'>
        <Suspense fallback={<div><Discover_Loading/></div>}>

<Terms/>
        </Suspense></div>
  )
}
