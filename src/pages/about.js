import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";

import {
  updatePageContent,
  loadPageData,
} from "../redux/actions";

import {
  EditableText,
  EditableParagraph,
  EditableImageUpload,
  EditableLink,
} from 'react-easy-editables';

import { uploadImage } from "../firebase/operations";

import Layout from "../layouts/default.js";

import headerPattern  from "../assets/images/pattern/secondary-banner.png";
import headerBg from "../assets/images/bg/squiggle.svg";

import firebase from "../firebase/init";


const mapDispatchToProps = dispatch => {
  return {
    onUpdatePageContent: (location, data) => {
      dispatch(updatePageContent(location, data));
    },
    onLoadPageData: data => {
      dispatch(loadPageData(data));
    },
  };
};

const mapStateToProps = state => {
  return {
    pageData: state.page.data,
  };
};

class AboutPage extends React.Component {

  componentDidMount() {
    const initialPageData = {
      ...this.props.data.pages,
      content: JSON.parse(this.props.data.pages.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  onSave = id => content => {
    this.props.onUpdatePageContent(id, content);
  };


  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};

    return (
      <Layout>
          <section className="page-title o-hidden text-center grey-bg bg-contain animatedBackground" data-bg-img={ headerPattern }>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <h1 className="title">
                    <EditableText content={content["page-title"]} onSave={this.onSave("page-title")} />
                  </h1>
                </div>
              </div>
            </div>
            <div className="page-title-pattern"><img className="img-fluid" src={ headerBg } alt="" /></div>
          </section>


        <div className="page-content">


          <section className="pos-r o-hidden">
            <div className="container">

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 md-mt-5">
                  <div className="section-title mb-4">
                    <h2 className="title">
                      <EditableText content={content["mission-title"]} onSave={this.onSave("mission-title")} />
                    </h2>
                  </div>
                  <EditableParagraph content={content["mission-description"]} onSave={this.onSave("mission-description")} />
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="info-img pos-r">
                    <EditableImageUpload
                      classes={"img-fluid"}
                      content={content["mission-image"]}
                      onSave={this.onSave("mission-image")}
                      uploadImage={uploadImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="pos-r o-hidden">
            <div className="container">

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="info-img pos-r">
                    <EditableImageUpload
                      classes={"img-fluid"}
                      content={content["vision-image"]}
                      onSave={this.onSave("vision-image")}
                      uploadImage={uploadImage}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 md-mt-5">
                  <div className="section-title mb-4">
                    <h2 className="title">
                      <EditableText content={content["vision-title"]} onSave={this.onSave("vision-title")} />
                    </h2>
                  </div>
                  <EditableParagraph content={content["vision-description"]} onSave={this.onSave("vision-description")} />
                </div>
              </div>
            </div>
          </section>



          <section className="grey-bg animatedBackground" data-bg-img="images/pattern/05.png">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="section-title mb-4">
                    <h2 className="title">
                      <EditableText content={content["roadmap-title"]} onSave={this.onSave("roadmap-title")} />
                    </h2>
                  </div>
                  <div className="tab style-2 ">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist"> <a className="nav-item nav-link active" id="nav-tab1" data-toggle="tab" href="#tab1-1" role="tab" aria-selected="true">Year 1</a>
                        <a className="nav-item nav-link" id="nav-tab2" data-toggle="tab" href="#tab1-2" role="tab" aria-selected="false">Year 2</a>
                        <a className="nav-item nav-link" id="nav-tab3" data-toggle="tab" href="#tab1-3" role="tab" aria-selected="false">Year 3</a>
                        <a className="nav-item nav-link" id="nav-tab4" data-toggle="tab" href="#tab1-4" role="tab" aria-selected="false">Year 4</a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div role="tabpanel" className="tab-pane fade show active" id="tab1-1">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <EditableImageUpload
                              classes={"img-fluid"}
                              content={content["year-1-image"]}
                              onSave={this.onSave("year-1-image")}
                              uploadImage={uploadImage}
                            />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <EditableParagraph content={content["year-1-description"]} onSave={this.onSave("year-1-description")} />
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-2">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <EditableImageUpload
                              classes={"img-fluid"}
                              content={content["year-2-image"]}
                              onSave={this.onSave("year-2-image")}
                              uploadImage={uploadImage}
                            />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <EditableParagraph content={content["year-2-description"]} onSave={this.onSave("year-2-description")} />
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-3">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <EditableImageUpload
                              classes={"img-fluid"}
                              content={content["year-3-image"]}
                              onSave={this.onSave("year-3-image")}
                              uploadImage={uploadImage}
                            />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <EditableParagraph content={content["year-3-description"]} onSave={this.onSave("year-3-description")} />
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-4">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <EditableImageUpload
                              classes={"img-fluid"}
                              content={content["year-4-image"]}
                              onSave={this.onSave("year-4-image")}
                              uploadImage={uploadImage}
                            />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <EditableParagraph content={content["year-4-description"]} onSave={this.onSave("year-4-description")} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="pos-r o-hidden" data-bg-img="images/pattern/01.png">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="section-title mb-0">
                    <h2 className="title">
                      <EditableText content={content["cities-title"]} onSave={this.onSave("cities-title")} />
                    </h2>
                    <EditableParagraph classes="mb-0" content={content["cities-description"]} onSave={this.onSave("cities-description")} />
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 sm-mt-5">
                  <div className="map-canvas md-iframe iframe-h" data-zoom="6" data-lat="43.653908" data-lng="-79.384293" data-type="roadmap"></div>
                </div>

              </div>
            </div>
          </section>


          <section className="pos-r grey-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title mb-0 text-center">
                    <h2 className="title">
                      <EditableText content={content["stakeholders-title"]} onSave={this.onSave("stakeholders-title")} />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row justify-center">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <EditableImageUpload
                    classes="img-center"
                    content={content["stakeholder-1-image"]}
                    onSave={this.onSave("stakeholder-1-image")}
                    uploadImage={uploadImage}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 xs-mt-5">
                  <EditableImageUpload
                    classes="img-center"
                    content={content["stakeholder-2-image"]}
                    onSave={this.onSave("stakeholder-2-image")}
                    uploadImage={uploadImage}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <EditableImageUpload
                    classes="img-center"
                    content={content["stakeholder-3-image"]}
                    onSave={this.onSave("stakeholder-3-image")}
                    uploadImage={uploadImage}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <EditableImageUpload
                    classes="img-center"
                    content={content["stakeholder-4-image"]}
                    onSave={this.onSave("stakeholder-4-image")}
                    uploadImage={uploadImage}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <EditableImageUpload
                    classes="img-center"
                    content={content["stakeholder-5-image"]}
                    onSave={this.onSave("stakeholder-5-image")}
                    uploadImage={uploadImage}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>
                      <EditableText content={content["government-stakeholders-title"]} onSave={this.onSave("government-stakeholders-title")} />
                    </h5>
                  </div>
                  <div className="featured-desc">
                    <EditableParagraph content={content["government-stakeholders-desc"]} onSave={this.onSave("government-stakeholders-desc")} />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>
                      <EditableText content={content["community-stakeholders-title"]} onSave={this.onSave("community-stakeholders-title")} />
                    </h5>
                  </div>
                  <div className="featured-desc">
                    <EditableParagraph content={content["community-stakeholders-desc"]} onSave={this.onSave("community-stakeholders-desc")} />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>
                      <EditableText content={content["agency-stakeholders-title"]} onSave={this.onSave("agency-stakeholders-title")} />
                    </h5>
                  </div>
                  <div className="featured-desc">
                    <EditableParagraph content={content["agency-stakeholders-desc"]} onSave={this.onSave("agency-stakeholders-desc")} />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>


        </div>

      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

export const query = graphql`
  query {
    pages(id: { eq: "about" }) {
      id
      content
      title
      slug
    }
  }
`;


