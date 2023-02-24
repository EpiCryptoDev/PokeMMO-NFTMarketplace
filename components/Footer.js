const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
            <div className="footer-top" style={{backgroundImage:"url('assets/images/footer/bg.jpg')"}}>
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row g-4 align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <div className="newsletter-part">
                                    <div className="ft-header">
                                        <h4>Get The Latest PokeMMO Updates</h4>
                                    </div>
                                    <form action="#">
                                        <input type="email" placeholder="Your Mail Address" />
                                        <button type="submit"> Subscribe now</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="social-part ps-lg-5">
                                    <div className="ft-header">
                                        <h4>Join Our Community</h4>
                                    </div>
                                    <ul className="social-list d-flex flex-wrap align-items-center mb-0">
                                        <li className="social-link"><a href="https://twitter.com/PKMMOnline" target="_blank"><i className="icofont-twitter"></i></a></li>
                                        <li className="social-link"><a href="https://t.me/pokemmo_channel" target="_blank"><i className="icofont-telegram"></i></a></li>
                                        <li className="social-link"><a href="https://www.youtube.com/@pokemmoonline" target="_blank"><i className="icofont-youtube"></i></a></li>
                                        <li className="social-link"><a href="https://www.reddit.com/r/PokeMMOonline/" target="_blank"><i className="icofont-reddit"></i></a></li>
                                        <li className="social-link"><a href="#" target="_blank"><i className="icofont-facebook"></i></a></li>
                                        <li className="social-link"><a href="#" target="_blank"><i className="icofont-code"></i></a></li>
                                        <li className="social-link"><a href="#" target="_blank"><i className="icofont-file-text"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="footer-links padding-top padding-bottom">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-link-item">
                                    <h5>PokeMMO</h5>
                                    <ul className="footer-link-list">
                                        <li><a href="#" className="footer-link" target="_blank">Home</a></li>
                                        <li><a href="https://pokemmo.online" className="footer-link" target="_blank">Website</a></li>
                                        <li><a href="https://whitepaper.pokemmo.online/" className="footer-link" target="_blank">Whitepaper</a></li>
                                        <li><a href="https://demo.pokemmo.online/" className="footer-link" target="_blank">Play in Brower</a></li>
                                        <li><a href="https://pokemmo.online/wp-content/uploads/2023/02/PokeMMO-Win-v0.0.17.zip" className="footer-link" target="_blank">Download PokeMMO</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-link-item">
                                    <h5>Company</h5>
                                    <ul className="footer-link-list">
                                        <li><a href="#" className="footer-link">About</a></li>
                                        <li><a href="#" className="footer-link">Mission & Team</a></li>
                                        <li><a href="#" className="footer-link">Our Blog</a></li>
                                        <li><a href="#" className="footer-link">Services</a></li>
                                        <li><a href="#" className="footer-link">We are Hiring</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-link-item">
                                    <h5>NFT Marketplace</h5>
                                    <ul className="footer-link-list">
                                        <li><a href="#" className="footer-link">Sell your assets</a></li>
                                        <li><a href="#" className="footer-link">FAQ</a></li>
                                        <li><a href="#" className="footer-link">Support</a></li>
                                        <li><a href="#" className="footer-link">Privacy/Policy</a></li>
                                        <li><a href="#" className="footer-link">Your purchases</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-link-item">
                                    <h5>Comunity</h5>
                                    <ul className="footer-link-list">
                                        <li><a href="#" className="footer-link">NFT Token</a></li>
                                        <li><a href="#" className="footer-link">Discusion</a></li>
                                        <li><a href="#" className="footer-link">Voting</a></li>
                                        <li><a href="#" className="footer-link">Suggest Feature</a></li>
                                        <li><a href="#" className="footer-link">Language</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="text-center py-4 mb-0">Copyright © 2023 PokeMMO | Made with ❤️ by <a
                            href="https://whitepaper.pokemmo.online/professor-willows-vision">Professor Willow</a>
                    </p>
                </div>
            </div>
        </footer>

        <a href="#" className="scrollToTop"><i className="icofont-swoosh-up"></i></a>
        </div>
    )
}

export default Footer