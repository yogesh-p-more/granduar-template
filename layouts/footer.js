function Footer() {
    return (
        <>
            <footer className="footer pt-6 pb-4" id="footer">
                <div className="container">
                    <div className="text-center">
                        <h2 className="heading02">ABOUT US</h2>
                    </div>

                    <div className="content mt-5">
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repellat
                            similique tempora, eius commodi vel earum ratione quidem temporibus quis excepturi deserunt laborum
                            iste, magnam eaque expedita vero asperiores nulla? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. A, vel magni sint delectus totam tempora quis voluptate error obcaecati ipsam.
                            Reiciendis ipsam explicabo voluptates qui nam repellat non eos atque!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <img src="../images/gallery.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="adderss text-center">
                                <h3 className="heading03">SITE ADDRESS</h3>
                                <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Expedita
                                    laboriosam nesciunt </p>
                            </div>

                            <div className="adderss text-center mt-4">
                                <h3 className="heading03">SITE ADDRESS</h3>
                                <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Expedita
                                    laboriosam nesciunt </p>
                                <div className="mail">
                                    <span>Email:<a href=""> sales@platinumcorp.in</a></span>
                                </div>
                                <div className="mail">
                                    <span>Website:<a href=""> www.google.com</a></span>
                                </div>
                            </div>

                            <div className="barcode mt-5 text-center">
                                <div className="barcode-img">
                                    <img src="../images/qrcode.jpg" alt="" />
                                </div>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, magni, animi quos
                                    atque, aspernatur quis eveniet</p>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
            <div className="disclaimer">
                <div className="container">
                    <p className="text-center">
                        <strong>Disclaimer: </strong>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nisi tenetur
                        aspernatur facilis ullam maiores necessitatibus doloribus, debitis expedita unde et. Animi consequuntur
                        labore corrupti soluta rerum sequi illo alias! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam atque sint, molestiae voluptatibus tempore aperiam quidem sapiente veritatis quisquam labore iure
                        ea quis ut aspernatur dolorum reiciendis reprehenderit nobis odio?</p>
                </div>
            </div>
        </>
    )
}

export default Footer