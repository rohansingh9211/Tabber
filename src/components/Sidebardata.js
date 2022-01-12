import React from "react"
import * as AiIcon from "react-icons/ai"
import *as BsIcon from "react-icons/bs"
export const Sidebardata=[
    {
        title:"DASHBOARD",
        path:"/",
        icon:<AiIcon.AiFillHome/>,
        cName:"nav-text",
    },
    {
        title:"MESSAGES",
        path:"/message",
        icon:<BsIcon.BsMessenger/>,
        cName:"nav-text",
    },
    {
        title:"MEMBERS",
        path:"/member",
        icon:<BsIcon.BsFillPersonCheckFill/>,
        cName:"nav-text",
    },

]