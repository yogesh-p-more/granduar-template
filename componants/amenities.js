import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
function Amenities() {

    const handleNextClick = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0].cloneNode(true));
        document.querySelector('.slide').removeChild(items[0]);
    };

    const handlePrevClick = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1].cloneNode(true));
        document.querySelector('.slide').removeChild(items[items.length - 1]);
    };
    return (
        <>
            <div className="amenities-wrapper">

                <div className="configuration-section">
                    <div className="text-center">
                        <h2 className="heading02">CONFIGURATION</h2>
                    </div>

                    <div className="configuration-wrapper">
                        <div className="box text-center">
                            <div className="type">
                                Type
                            </div>
                            <div className="bhk mt-2">
                                2BHK HOME
                            </div>
                            <div className="area mt-2">
                                Carpet Areas (Sq.ft.) <br />
                                702 - 733 Sq.ft.
                            </div>
                            <div className="click-price mt-4">
                                Click for Price
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="type">
                                Type
                            </div>
                            <div className="bhk mt-2">
                                2BHK HOME
                            </div>
                            <div className="area mt-2">
                                Carpet Areas (Sq.ft.) <br />
                                702 - 733 Sq.ft.
                            </div>
                            <div className="click-price mt-4">
                                Click for Price
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="type">
                                Type
                            </div>
                            <div className="bhk mt-2">
                                2BHK HOME
                            </div>
                            <div className="area mt-2">
                                Carpet Areas (Sq.ft.) <br />
                                702 - 733 Sq.ft.
                            </div>
                            <div className="click-price mt-4">
                                Click for Price
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="heading02">AMENITIES</h2>
                </div>
                <section className="amenities-section pb-6 ">
                    <div className="container">

                        <div className="cus-container">
                            <div className="slide">


                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundImage: "url(../images/banner.jpg)" }}>
                                    <div className="content">
                                        <div className="name">Switzerland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                {/* <div className="item" style="background-image: url(https://i.ibb.co/jrRb11q/img2.jpg);">
                                    <div className="content">
                                        <div className="name">Finland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                                        </div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style="background-image: url(https://i.ibb.co/NSwVv8D/img3.jpg);">
                                    <div className="content">
                                        <div className="name">Iceland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                                        </div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style="background-image: url(https://i.ibb.co/Bq4Q0M8/img4.jpg);">
                                    <div className="content">
                                        <div className="name">Australia</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                                        </div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style="background-image: url(https://i.ibb.co/jTQfmTq/img5.jpg);">
                                    <div className="content">
                                        <div className="name">Netherland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                                        </div>
                                        <button>See More</button>
                                    </div>
                                </div>
                                <div className="item" style="background-image: url(https://i.ibb.co/RNkk6L0/img6.jpg);">
                                    <div className="content">
                                        <div className="name">Ireland</div>
                                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                                        </div>
                                        <button>See More</button>
                                    </div>
                                </div> */}

                            </div>

                            <div className="button">
                                <button className="prev" onClick={handlePrevClick}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="next" onClick={handleNextClick}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Amenities