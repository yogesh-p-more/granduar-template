import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
function Plan() {

    class Tabs extends React.Component {
        state = {
            activeTab: this.props.children[0].props.label
        }
        changeTab = (tab) => {

            this.setState({ activeTab: tab });
        };
        render() {

            let content;
            let buttons = [];
            return (
                <div>
                    {React.Children.map(this.props.children, child => {
                        buttons.push(child.props.label)
                        if (child.props.label === this.state.activeTab) content = child.props.children
                    })}

                    <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                    <div className="tab-content">{content}</div>

                </div>
            );
        }
    }

    const TabButtons = ({ buttons, changeTab, activeTab }) => {

        return (
            <div className="tab-buttons">
                {buttons.map(button => {
                    return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
                })}
            </div>
        )
    }

    const Tab = props => {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="floor-plan-section pt-6 pb-6" id="Plans">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="heading02">FLOOR PLAN</h2>
                </div>

                <Tabs>
                    <Tab label="Layout Plan" id="layout-plan" className="tab-box">
                        <Slider {...settings}>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                        </Slider>
                    </Tab>
                    <Tab label="1 BHK" id="one-bhk" className="tab-box">
                        <Slider {...settings}>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                        </Slider>
                    </Tab>
                    <Tab label="2 BHK" id="two-bhk" className="tab-box">
                        <Slider {...settings}>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                        </Slider>
                    </Tab>
                    <Tab label="3 BHK" id="three-bhk" className="tab-box">
                        <Slider {...settings}>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                            <div className="plan-imgs">
                                <a href="./images/gallery.jpg" data-fancybox="gallery-row">
                                    <img src="./images/gallery.jpg" alt="" />
                                </a>
                            </div>
                        </Slider>
                    </Tab>
                </Tabs>
                <div className="button">
                    <button className="prev">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>


            </div>
        </section>

    )




}

export default Plan