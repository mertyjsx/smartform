import React from "react";
import {CircularProgress} from "@material-ui/core"
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import { getToken } from "./_services/user.service";
import axios from "axios"
const $ = window.$;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      content:null
    };
  }


   compare= ( a, b )=> {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }
  // USING BELOW METHOD TO CALL BEFORE RENDER HTML CODE ON WEB
  componentDidMount() {
    $(window).scroll(function () {
      var body = $("body"),
        scroll = $(window).scrollTop();

      if (scroll >= 50) body.addClass("fixed");
      else body.removeClass("fixed");
    });
    const apiUrl = global.config.apiBaseURL.url;
axios.get( apiUrl+"user/show_static_content?page=Homepage").then(response=>{
if(response.data.data){
  console.log(response.data.data)
  this.setState({content:response.data.data.sort(this.compare)})
}
 


})


  }

  render() {
    console.log(this.state)
    return (
      <div className="warper">
        {/* <!--header-content-here--> */}
        <Navigation  props={this.props} />
        {/* <!--header-content-end--> */}
{this.state.content?(
 <div className="site_content">
 <div className="home-banner-main">
   <div className="shape shape1">
     <img src="images/shape.svg" />
   </div>
   <div className="shape shape2">
     <img src="images/shape.svg" />
   </div>
   <div className="home-banner text-center">
     <article>
       <h4>{this.state.content[0]&&this.state.content[0].title} </h4>
       <h1>
       {this.state.content[0]&&this.state.content[0].content}
       </h1>
       {getToken() ? (
         <a
           href="javascript:;"
           className="btn btn-purpal"
           onClick={() => this.props.history.push("/profile")}
         >
           Profile
         </a>
       ) : (
         <a
           href="javascript:;"
           className="btn btn-purpal"
           onClick={() => this.props.history.push("/login")}
         >
           Join Now
         </a>
       )}
     </article>
     <img src="images/img.svg" />
   </div>
 </div>

 <div className="video-section">
   <div className="container">
     <div className="heading text-center">
       <h4>{this.state.content[1]&&this.state.content[1].title}</h4>
       <p>
       {this.state.content[1]&&this.state.content[1].content}
       </p>
     </div>
     <div className="video-box">
       <video controls>
         <source src="images/video.mp4" type="video/mp4" />
         <source src="images/video.ogg" type="video/ogg" />
         Your browser does not support the video tag.
       </video>
     </div>
   </div>
 </div>

 <div className="stirp-banner">
   <div className="container">
     <article className="text-center">
       <h4>
       {this.state.content[2]&&this.state.content[2].title}
       </h4>

       {getToken() ? (
         <a
           href="javascript:;"
           className="btn btn-white"
           onClick={() => this.props.history.push("/profile")}
         >
           Profile
         </a>
       ) : (
         <a
           href="javascript:;"
           className="btn btn-white"
           onClick={() => this.props.history.push("/login")}
         >
           Join Now
         </a>
       )}
     </article>
   </div>
 </div>

 <div className="box-plus">
   <div className="container">
     <div className="row">
       <div className="col-md-4">
         <article>
           <figure>
             <i className="fas fa-plus"></i>
           </figure>
           <figcaption>
             <h4>{this.state.content[3]&&this.state.content[3].title}</h4>
             <p>
             {this.state.content[3]&&this.state.content[3].content}
             </p>
           </figcaption>
         </article>
       </div>
       <div className="col-md-4">
         <article>
           <figure>
             <i className="fas fa-plus"></i>
           </figure>
           <figcaption>
             <h4>{this.state.content[4]&&this.state.content[4].title}</h4>
             <p>
             {this.state.content[4]&&this.state.content[4].content}
             </p>
           </figcaption>
         </article>
       </div>
       <div className="col-md-4">
         <article>
           <figure>
             <i className="fas fa-plus"></i>
           </figure>
           <figcaption>
             <h4>{this.state.content[5]&&this.state.content[5].title}</h4>
             <p>
             {this.state.content[5]&&this.state.content[5].content}
             </p>
           </figcaption>
         </article>
       </div>
     </div>
   </div>
 </div>
</div>




):(<CircularProgress  className="progressloading" />)}
        {/* <!--site-container-start--> */}
       
        {/* <!--site-container-end-->         */}

        {/* <!--footer-here--> */}
        <Footer props={this.props} />
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default HomePage;
