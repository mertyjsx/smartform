import React from "react";
import Navigation from "./_components/Navigation.page";
import { Footer } from "./_components/Footer.page";
import { getToken } from "./_services/user.service";

const $ = window.$;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hi:false
    };
  }

  // USING BELOW METHOD TO CALL BEFORE RENDER HTML CODE ON WEB
  componentDidMount() {
    $(window).scroll(function () {
      var body = $("body"),
        scroll = $(window).scrollTop();

      if (scroll >= 50) body.addClass("fixed");
      else body.removeClass("fixed");
    });
  }

  render() {
    return (
      <div className="warper">
        {/* <!--header-content-here--> */}
        <Navigation props={this.props} />
        {/* <!--header-content-end--> */}

        {/* <!--site-container-start--> */}
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
                <h4>Lorem Ipsum is simply dummy text </h4>
                <h1>
                  It is a long established fact that a reader will be
                  distracted.
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
                <h4>Watch our video</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                      <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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
                      <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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
                      <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </figcaption>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--site-container-end-->         */}

        {/* <!--footer-here--> */}
        <Footer props={this.props} />
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default HomePage;
