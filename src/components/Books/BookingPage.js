import React from 'react'
import Header from './Header'
import { Outlet, Link } from "react-router-dom";


export default function BookingPage() {
    return (
        <div className="bg-gray-50 h-screen">
            <Header/>
<Outlet/>
           
        </div>
    )
}
