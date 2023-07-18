import React from 'react'
import User_redirect_Layout from '../components/User_Redirect/User_redirect_Layout'
const User_redirect = React.lazy(()=>{import('../components/User_Redirect/User_redirect_Layout')})
import { Suspense } from 'react'
import Discover_Loading from '../components/Dynamic_Pages_Layout/Discover_Loading'
export default function Redirect_page() {
  return (

    <div>
      <Suspense fallback={<div><Discover_Loading/></div>}>
      <User_redirect_Layout/>
      </Suspense></div>
  )
}
