// Import necessary dependencies
import React, { useEffect } from 'react';
import { useState } from 'react';

function Project() {
    // Your component
    // State to keep track of the active element
    const [activeElement, setActiveElement] = useState(null);

    // Function to handle hover
    const handleHover = (index) => {
        // Remove active class from all elements
        document.querySelectorAll('.figure').forEach(element => {
            element.classList.remove('active');
        });

        // Add active class to the hovered element
        document.querySelector(`.figure:nth-child(${index + 1})`).classList.add('active');
    };

    // Effect to run once when the component mounts
    useEffect(() => {
        // Cleanup function to remove active class when the component unmounts
        return () => {
            document.querySelectorAll('.figure').forEach(element => {
                element.classList.remove('active');
            });
        };
    }, []);

    return (
        <>
            <section className="section project-highlights pt-6">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="heading02">PROJECT HIGHLIGHTS</h2>
                    </div>
                    <div className="content mt-5 mb-5">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis totam
                            maxime, sit at rerum omnis delectus nam eaque ex asperiores esse accusantium excepturi, sapiente
                            similique, possimus placeat rem culpa velit.</p>
                    </div>
                    <div className="highlights-logo row">
                        <div className="figure text-center col-lg-2 col-6" onMouseEnter={() => handleHover(0)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="figure col-lg-2 col-6 text-center" onMouseEnter={() => handleHover(1)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="figure col-lg-2 col-6 text-center" onMouseEnter={() => handleHover(2)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="figure col-lg-2 col-6 text-center" onMouseEnter={() => handleHover(3)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="figure col-lg-2 col-6 text-center" onMouseEnter={() => handleHover(4)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="figure col-lg-2 col-6 text-center" onMouseEnter={() => handleHover(5)}>
                            <div className="projects-logo">
                                <img src="../images/Facebook.png" alt="" />
                            </div>
                            <div className="projects-text mt-4">
                                Valet Parking <br /> Service
                            </div>
                            <div className="project-bg">
                                <img src="../images/project-bg.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project