import React from 'react'
import Navigation from "./_components/Navigation.page";
import Sidebar from "./_components/Sidebar.page";
import EditContent from "./_components/content.component"
import { Helmet } from "react-helmet";
import id1 from "../assets/images/id1.png"
import id2 from "../assets/images/id2.png"
import id3 from "../assets/images/id3.png"
import id4 from "../assets/images/id4.png"
import id5 from "../assets/images/id5.png"
import id6 from "../assets/images/id6.png"
export default function Deleteuser(props) {
    return (
        
               <div className="main-wrapper">
          {/* <!--Sidebar--> */}
          <Sidebar props={props} />
          {/* <!--Sidebar--> */}

          {/* <!--site-container-start--> */}
          <div className="page-wrapper">
            {/* <!-- partial:partials/_navbar.html --> */}
          <Navigation props={props}></Navigation>
            
            <div className="page-content">
               
       
          
        <Helmet>
          <link
            href={process.env.PUBLIC_URL + "/css/bootstrap.min.css"}
            rel="stylesheet"
          />
          <link
            href={process.env.PUBLIC_URL + "/css/fontawesome.min.css"}
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={process.env.PUBLIC_URL + "/css/owl.carousel.min.css"}
            media="screen"
          />
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/css/style.css"}
            rel="stylesheet"
          />
        </Helmet>
{[{id:1,url:id1,isContent:true},{id:2,url:id2,isContent:true},{id:3,url:id3,isContent:false},{id:4,url:id4,isContent:true},{id:5,url:id5,isContent:true},{id:6,url:id6,isContent:true}].map(item=> <EditContent url={item.url} id={item.id} isContent={item.isContent}></EditContent>)}
        
   



            </div>   
        </div></div>
    )
}
