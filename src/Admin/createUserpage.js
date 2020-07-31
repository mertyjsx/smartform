import React from 'react'
import Navigation from "./_components/Navigation.page";
import Sidebar from "./_components/Sidebar.page";
import CreateUser from "./_components/Create.user"
import { Helmet } from "react-helmet";
export default function createUserpage(props) {
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
    
<CreateUser></CreateUser>


            </div>   
        </div></div>
    )
}
