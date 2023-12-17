import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
function Plan() {

    var settings = {
        dots: true,
        infinite: true,
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
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <>
            <section className="floor-plan-section pt-6 pb-6" id="Plans">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="heading02">FLOOR PLAN</h2>
                    </div>

                    <div className="plan-btns">
                        <button data-tab="layout-plan" className="active">Layout Plan</button>
                        <button data-tab="one-bhk">1 BHK </button>
                        <button data-tab="two-bhk">2 BHK</button>
                        <button data-tab="three-bhk">3 BHK</button>
                    </div>

                    <div className="tab-container">
                        <div id="layout-plan" className="tab-box active">
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
                        </div>

                        <div id="one-bhk" className="tab-box">
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
                        </div>
                        <div id="two-bhk" className="tab-box">
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
                        </div>
                        <div id="three-bhk" className="tab-box">
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
                        </div>

                        <div className="button">
                            <button className="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="next">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plan