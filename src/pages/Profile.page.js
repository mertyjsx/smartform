import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import {Grid} from "@material-ui/core"
// PROFILE SCREES IMPORT 
import ProfilePersonalPage from "./_profile/Forms/ProfilePersonal.page";
import ProfileEducationPage from "./_profile/Forms/ProfileEducation.page";
import ProfileExperiencePage from "./_profile/Forms/ProfileExperience.page";
import PorfileCertificatePage from "./_profile/Forms/Certifications"

import Skills from "./_profile/Forms/Skills"
import Project from "./_profile/Forms/Project"
import Interest from "./_profile/Forms/Interest"
// PROFILE SCREES IMPORT TO VIEW ALL DETAILS 
import ProfilePersonalViewPage from "./_profile/View/ProfilePersonal.page";
// import ProfileEducationViewPage from "./_profile/View/ProfileEducation.page";
import ProfileExperienceViewPage from "./_profile/View/ProfileExperience.page";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activeMenu: "Personal"
    };
  }

  _handleOnChangeMenu(menuName){
    // console.log("Menu Name - ", menuName);
    this.setState({ activeMenu: menuName });
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
          <div className="pro-box">
            <div className="container">
              <Grid container spacing={3}>
                <Grid item lg={3} md={12} xs={12}>
                  <div className="pro-left-in">
                    <ul>
                      <li className={(activeMenu === "Personal")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Personal")}>Personal</a>
                      </li>
                      <li className={(activeMenu === "Education")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Education")}>Education</a>
                      </li>
                      <li className={(activeMenu === "Experience")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Experience")}>Experience</a>
                      </li>
                      <li className={(activeMenu === "Certifications")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Certifications")}>Certifications</a>
                      </li>
                      <li className={(activeMenu === "Skills")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Skills")}>Skills</a>
                      </li>
                      <li className={(activeMenu === "Project")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Project")}>Project</a>
                      </li>
                      <li className={(activeMenu === "Interests")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Interests")}>Interests</a>
                      </li>
                      <li className={(activeMenu === "Others")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Others")}>Others</a>
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item lg={9} md={12} xs={12}>
                
                  {
                    (activeMenu === "Personal")?(
                      // <ProfilePersonalViewPage />
                      <ProfilePersonalPage profileThis = {this} />
                    ):(activeMenu === "Education")?(
                      <ProfileEducationPage profileThis = {this} />
                    ):(activeMenu === "Experience")?(
                      // <ProfileExperienceViewPage />
                      <ProfileExperiencePage profileThis = {this} />
                    ):(activeMenu === "Certifications")?(
                      // <ProfileExperienceViewPage />
                      <PorfileCertificatePage profileThis = {this} />
                    ):(activeMenu === "Skills")?(
                      // <ProfileExperienceViewPage />
                      <Skills profileThis = {this} />
                    ):(activeMenu === "Project")?(
                      // <ProfileExperienceViewPage />
                      <Project profileThis = {this} />
                    ):(activeMenu === "Interests")?(
                      // <ProfileExperienceViewPage />
                      <Interest profileThis = {this} />
                    ):(
                      "ELSEEEEEEE.................."
                    )
                  }
                  
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        {/* <!--site-container-end--> */}

        {/* <!--footer-here--> */}
        <Footer props={this.props} />
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default ProfilePage;
