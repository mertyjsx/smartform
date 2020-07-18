import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";

// PROFILE SCREES IMPORT 
import ProfilePersonalPage from "./_profile/Forms/ProfilePersonal.page";
import ProfileEducationPage from "./_profile/Forms/ProfileEducation.page";
import ProfileExperiencePage from "./_profile/Forms/ProfileExperience.page";

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
              <div className="d-flex">
                <div className="pro-left">
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
                      <li className={(activeMenu === "Skills")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Skills")}>Skills</a>
                      </li>
                      <li className={(activeMenu === "Others")?"active":""}>
                        <a href="javascript:;" onClick={() => this._handleOnChangeMenu("Others")}>Others</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-right">
                
                  {
                    (activeMenu === "Personal")?(
                      <ProfilePersonalViewPage />
                      // <ProfilePersonalPage />
                    ):(activeMenu === "Education")?(
                      <ProfileEducationPage />
                    ):(activeMenu === "Experience")?(
                      <ProfileExperienceViewPage />
                      // <ProfileExperiencePage />
                    ):(
                      "ELSEEEEEEE.................."
                    )
                  }
                  
                </div>
              </div>
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
