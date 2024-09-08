import { AddressBook, ChartLine } from "@phosphor-icons/react";
import { IconSize } from "../constants/icon-size.constants";
import { SidebarItemProps } from "../types/sidebar.types";



export const SideBarItems:SidebarItemProps[] = [
    {
        title: 'Contacts',
        icon: <AddressBook size={IconSize.L} />,
        link:'/'
    },
       {
        title: 'Analytics',
        icon: <ChartLine size={IconSize.L} />,
        link:'/analytics'
    },
]