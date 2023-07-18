import React from 'react'
const About = React.lazy(()=>import('../components/About_Us/About_us_Layout'))
import Discover_Loading from '../components/Dynamic_Pages_Layout/Discover_Loading'

import { Suspense } from 'react'

export default function About_Us() {
  return (
    <div className='flex dark:bg-black bg-white max-h-fit w-screen'>
        <Suspense fallback={ <div><Discover_Loading/></div>}>

            <About/>
        </Suspense>
    </div>
  )
}
