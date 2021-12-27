import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
export const SidebarData=[
    {
        title:"DASHBOARD",
        Icon:<DashboardIcon />,
        link:"/dashboard"

    },
    {
        title:"MESSAGE",
        Icon:<MessageIcon/>,
        link:"/message"

    },
    {
        title:"MEMBER",
        Icon:<CardMembershipIcon/>,
        link:"/member"

    },
    {
        title:"QUERY",
        Icon:<QueryBuilderIcon />,
        link:"/query"

    }
]