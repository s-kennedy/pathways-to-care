import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { EditablesContext, theme, EditableText, EditableParagraph } from 'react-easy-editables';
import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Layout from "../layouts/default.js";
import Editable from "../components/editables/Editable";
import PlainTextEditor from "../components/editingTools/PlainTextEditor";
import RichTextEditor from "../components/editingTools/RichTextEditor";

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePageData: (page, id, data) => {
      dispatch(updatePage(page, id, data));
    },
    onLoadPageData: data => {
      dispatch(loadPageData(data));
    },
  };
};

const mapStateToProps = state => {
  return {
    pageData: state.page.data,
    isEditingPage: state.adminTools.isEditingPage,
  };
};

class AboutPage extends React.Component {

  componentDidMount() {
    console.log(this.props)
    const initialPageData = {
      ...this.props.data.pages,
      content: JSON.parse(this.props.data.pages.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  onSave = id => content => {
    this.props.onUpdatePageData("home", id, content);
  };

  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};
    const isEditingPage = this.props.isEditingPage;
    console.log(isEditingPage);

    return (
      <Layout>
        <EditablesContext.Provider value={ { showEditingControls: isEditingPage, theme: theme } }>

          <section className="page-title o-hidden text-center grey-bg bg-contain animatedBackground" data-bg-img="images/pattern/05.png">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <h1 className="title">About Us</h1>
                </div>
              </div>
            </div>
            <div className="page-title-pattern"><img className="img-fluid" src="images/bg/06.png" alt="" /></div>
          </section>


        <div className="page-content">


          <section className="pos-r o-hidden">
            <div className="pattern-3">
              <img className="img-fluid rotateme" src="images/pattern/03.png" alt="" />
            </div>
            <div className="container">

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 md-mt-5">
                  <div className="section-title mb-4">
                    <h2 className="title">Mission</h2>
                  </div>
                  <p>The Pathways to Care project aims to remove barriers and improve access to mental health and addiction services for Black children, youth and their families in Ontario by making interventions at the policy, sector, and population levels</p>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="info-img pos-r">
                    <img className="img-fluid topBottom" src="images/about/02.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="pos-r o-hidden">
            <div className="pattern-3">
              <img className="img-fluid rotateme" src="images/pattern/03.png" alt="" />
            </div>
            <div className="container">

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="info-img pos-r">
                    <img className="img-fluid topBottom" src="images/about/02.png" alt=""/>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 md-mt-5">
                  <div className="section-title mb-4">
                    <h2 className="title">Vision</h2>
                  </div>
                  <p>Through  province-wide engagement with Black children, youth and their families, the project will conduct mapping exercises and needs  assessments; develop a comprehensive mental health strategy and practice framework for Black youth; define and improve  the pathways to care for Black children and youth who need mental health and addiction services; and  develop resource tools and capacity building supports to increase the capacity of agencies to deliver culturally safe and responsive mental health and addiction services. The primary aim is to improve how mental health and addiction services are provided to Black children, youth and their families in Ontario.</p>
                </div>
              </div>
            </div>
          </section>



          <section className="grey-bg animatedBackground" data-bg-img="images/pattern/05.png">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="section-title mb-4">
                    <h2 className="title">Project Roadmap</h2>
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
                            <img className="img-fluid" src="images/about/02.png" alt="" />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <h4 className="title">Powerful & Awesome Marketing</h4>
                            <p>Simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="list-unstyled list-icon">
                              <li className="mb-3"><i className="flaticon-tick"></i> Mattis effic iturut magna pelle ntesque sit</li>
                              <li className="mb-3"><i className="flaticon-tick"></i> Phasellus eget purus id felis dignissim convallis</li>
                              <li><i className="flaticon-tick"></i> Fusce enim nulla mollis eu metus in sagittis fringilla</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-2">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <img className="img-fluid" src="images/about/02.png" alt="" />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <h4 className="title">Powerful & Awesome Marketing</h4>
                            <p>Simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="list-unstyled list-icon">
                              <li className="mb-3"><i className="flaticon-tick"></i> Mattis effic iturut magna pelle ntesque sit</li>
                              <li className="mb-3"><i className="flaticon-tick"></i> Phasellus eget purus id felis dignissim convallis</li>
                              <li><i className="flaticon-tick"></i> Fusce enim nulla mollis eu metus in sagittis fringilla</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-3">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <img className="img-fluid" src="images/about/02.png" alt="" />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <h4 className="title">Powerful & Awesome Marketing</h4>
                            <p>Simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="list-unstyled list-icon">
                              <li className="mb-3"><i className="flaticon-tick"></i> Mattis effic iturut magna pelle ntesque sit</li>
                              <li className="mb-3"><i className="flaticon-tick"></i> Phasellus eget purus id felis dignissim convallis</li>
                              <li><i className="flaticon-tick"></i> Fusce enim nulla mollis eu metus in sagittis fringilla</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="tab1-4">
                        <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <img className="img-fluid" src="images/about/02.png" alt="" />
                          </div>
                          <div className="col-lg-6 col-md-12 md-mt-5">
                            <h4 className="title">Powerful & Awesome Marketing</h4>
                            <p>Simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="list-unstyled list-icon">
                              <li className="mb-3"><i className="flaticon-tick"></i> Mattis effic iturut magna pelle ntesque sit</li>
                              <li className="mb-3"><i className="flaticon-tick"></i> Phasellus eget purus id felis dignissim convallis</li>
                              <li><i className="flaticon-tick"></i> Fusce enim nulla mollis eu metus in sagittis fringilla</li>
                            </ul>
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
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6">
                  <div className="section-title mb-0">
                    <h2 className="title">Target Cities</h2>
                    <p className="mb-0">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 sm-mt-5">
                  <div className="map-canvas md-iframe" data-zoom="12" data-lat="-37.817085" data-lng="144.955631" data-type="roadmap" data-hue="#ffc400" data-title="Envato" data-icon-path="images/marker.png" data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"></div>
                </div>

              </div>
            </div>
          </section>


          <section className="pos-r grey-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title mb-0 text-center">
                    <h2 className="title">Stakeholders</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <div className="counter">
                    <img className="img-center" src="images/counter/01.png" alt="" />
                    <h5>Stakeholder name</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 xs-mt-5">
                  <div className="counter">
                    <img className="img-center" src="images/counter/02.png" alt="" />
                    <h5>Stakeholder name</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <div className="counter">
                    <img className="img-center" src="images/counter/03.png" alt="" />
                    <h5>Stakeholder name</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <div className="counter">
                    <img className="img-center" src="images/counter/04.png" alt="" />
                    <h5>Stakeholder name</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 sm-mt-5">
                  <div className="counter">
                    <img className="img-center" src="images/counter/04.png" alt="" />
                    <h5>Stakeholder name</h5>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>Government Stakeholders</h5>
                  </div>
                  <div className="featured-desc">
                    <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>Community Based Stakeholders</h5>
                  </div>
                  <div className="featured-desc">
                    <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img className="img-center" src="images/feature/04.png" alt=""/>
                  </div>
                  <div className="featured-title">
                    <h5>Agency Stakeholders</h5>
                  </div>
                  <div className="featured-desc">
                    <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>


        </div>


        </EditablesContext.Provider>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

export const query = graphql`
  query {
    pages(id: { eq: "home" }) {
      id
      content
      title
      slug
    }
  }
`;


