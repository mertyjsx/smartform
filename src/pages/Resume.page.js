import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import {Grid} from "@material-ui/core"
import Template from "./_components/template"
import {getPublic} from "./_services/pdf.services"

class ResumePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activeMenu: "Personal"
    };
  }

componentDidMount(){
getPublic().then(r=>console.log(r)).catch(e=>console.log(e))
  
}

  render() {
    const { activeMenu } = this.state;
    return (
      <div className="warper ">
        {/* <!--header-content-here--> */}
        <Navigation props={this.props} />
        {/* <!--header-content-end--> */}

        {/* <!--site-container-start--> */}
        <div className="site_content">
        <Template></Template>
        </div>

        {/* <!--site-container-end--> */}

        {/* <!--footer-here--> */}
        <Footer props={this.props} />
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default ResumePage;
