import React from 'react';
import '../css/Classes.css';

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import SidebarNav from './SidebarNav.js';

const Classes = (props) => {
    return(
        <div>
            <SidebarNav />
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Classes</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='main'></div>
        </div>
    )
}

export default Classes;