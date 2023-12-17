// import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    const settings = {
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="gallery-section pt-6 pb-6">
                <div className="text-center">
                    <h2 className="heading02">GALLERY</h2>
                </div>

                <div className="mt-5">
                    <div className="slider center">
                        <Slider {...settings}>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="cl">
                                    <a href="../images/gallery.jpg" data-fancybox="gallery-row">
                                        <img src="../images/gallery.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="button text-center">
                        <button className="prev">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="next">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery