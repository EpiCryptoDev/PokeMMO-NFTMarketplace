import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
    // See https://en.reactjs.org/docs/hooks-effect.html
    useEffect(() => {

        // Run code on client-side only : ensure document is here
        if (typeof document !== undefined) {

        // load JS bootstrap dependency
        require('bootstrap/dist/js/bootstrap')   

        }
    // Run useEffect only once
    // Read https://css-tricks.com/run-useeffect-only-once/
    }, [])
    const router = useRouter();

    return (
        <div className='test'>
        <header className="header">
            <div className="container-fluid">
                <div className="header__content">
                    <div className="header__logo">
                        <Link href="/">
                        <a>
                            <img src="assets/images/logo/logo.gif" alt="logo"></img>
                        </a>
                        </Link>
                    </div>

                    <form action="#" className="header__search">
                        <input type="text" placeholder="Search items, collections, and creators"></input>
                        <button type="button"><i className="icofont-search-2"></i></button>
                        <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                            </svg></button>
                    </form>
                    <div className="header__menu ms-auto">
                        <ul className="header__nav mb-0">
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Home</a>

                                <ul className="dropdown-menu header__nav-menu">
                                    <li>
                                    <Link href="/">
                                        <a className={router.pathname == "/" ? "drop-down-item active" : "drop-down-item"}>Home</a>
                                    </Link> 
                                    </li>
                                    <li>
                                    <Link href="https://pokemmo.online/">
                                        <a target="_blank" rel="noreferrer" className={router.pathname == "/Website" ? "drop-down-item active" : "drop-down-item"}>Website</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://whitepaper.pokemmo.online/">
                                        <a target="_blank" rel="noreferrer" className={router.pathname == "/WhitePaper" ? "drop-down-item active" : "drop-down-item"}>WhitePaper</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://demo.pokemmo.online/">
                                        <a target="_blank" rel="noreferrer" className={router.pathname == "/Play" ? "drop-down-item active" : "drop-down-item"}>Play PokeMMO</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://pokemmo.online/wp-content/uploads/2023/02/PokeMMO-Win-v0.0.17.zip">
                                        <a target="_blank" rel="noreferrer" className={router.pathname == "/Download" ? "drop-down-item active" : "drop-down-item"}>Download PokeMMO</a>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Assets</a>

                                <ul className="dropdown-menu header__nav-menu">
                                    <li>
                                        <Link href="/sellassets">
                                            <a className={router.pathname == "/sellassets" ? "drop-down-item active" : "drop-down-item"}>Sell Assets</a>
                                        </Link> 
                                    </li>
                                    <li>
                                    <Link href="/assetdetails">
                                        <a className={router.pathname == "/assetdetails" ? "drop-down-item active" : "drop-down-item"}>Asset Details</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/explore">
                                        <a className={router.pathname == "/explore" ? "drop-down-item active" : "drop-down-item"}>Explore</a>
                                    </Link>
                                    </li>                              
                                    <li>
                                        <Link href="/auction">
                                        <a className={router.pathname == "/auction" ? "drop-down-item active" : "drop-down-item"}>Auction Page</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/category">
                                        <a className={router.pathname == "/category" ? "drop-down-item active" : "drop-down-item"}>Category</a>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link href="/collection">
                                        <a className={router.pathname == "/collection" ? "drop-down-item active" : "drop-down-item"}>Trainers Assets</a>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Trainers</a>

                                <ul className="dropdown-menu header__nav-menu">
                                    <li>
                                    <Link href="/alltrainers">
                                        <a className={router.pathname == "/alltrainers" ? "drop-down-item active" : "drop-down-item"}>Trainers</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/trainer">
                                        <a className={router.pathname == "/trainer" ? "drop-down-item active" : "drop-down-item"}>Trainer Profile</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/rank">
                                        <a className={router.pathname == "/rank" ? "drop-down-item active" : "drop-down-item"}>Trainers Rank</a>
                                    </Link>
                                    </li>
                                </ul>
                            </li>


       <li className="header__nav-item">Blog</li>      {/* Erase THIS LANE to add blog Menu Other changes to make on News sections!!!! 


                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Blog</a>

                                <ul className="dropdown-menu header__nav-menu">
                                    <li>
                                    <Link href="/blog">
                                        <a className={router.pathname == "/blog" ? "drop-down-item active" : "drop-down-item"}>Blog Page One</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/blogtwo">
                                        <a className={router.pathname == "/blogtwo" ? "drop-down-item active" : "drop-down-item"}>Blog Page Two</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/blogthree">
                                        <a className={router.pathname == "/blogthree" ? "drop-down-item active" : "drop-down-item"} href="blog-3.html">Blog Page Three</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/blogsingle">
                                        <a className={router.pathname == "/blogsingle" ? "drop-down-item active" : "drop-down-item"}>Blog Single </a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/blogsingletwo">
                                        <a className={router.pathname == "/blogsingletwo" ? "drop-down-item active" : "drop-down-item"}>Blog Single Two </a>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Pages</a>

                                <ul className="dropdown-menu header__nav-menu" data-popper-placement="top-start">
                                    <li>
                                    <Link href="/activity">
                                        <a className={router.pathname == "/activity" ? "drop-down-item active" : "drop-down-item"}>Activity</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/help">
                                        <a className={router.pathname == "/help" ? "drop-down-item active" : "drop-down-item"}>Help Center</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/helpsingle">
                                        <a className={router.pathname == "/helpsingle" ? "drop-down-item active" : "drop-down-item"}>Help Center Single</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/policy">
                                        <a className={router.pathname == "/policy" ? "drop-down-item active" : "drop-down-item"}>Privacy & Policy</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/terms">
                                        <a className={router.pathname == "/terms" ? "drop-down-item active" : "drop-down-item"}>Terms & Condition</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/404">
                                        <a className={router.pathname == "/404" ? "drop-down-item active" : "drop-down-item"}>404</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/maintainance">
                                        <a className={router.pathname == "/maintainance" ? "drop-down-item active" : "drop-down-item"}>Maintainance Mode</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/signin">
                                        <a className={router.pathname == "/signin" ? "drop-down-item active" : "drop-down-item"}>Sign In</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/signup">
                                        <a className={router.pathname == "/signup" ? "drop-down-item active" : "drop-down-item"}>Sign Up</a>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link href="/forgotpassword">
                                        <a className={router.pathname == "/forgotpassword" ? "drop-down-item active" : "drop-down-item"}>Forgot Password</a>
                                    </Link>
                                    </li>
                                </ul>
                            </li>
   
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
                                    </svg></a>

                                <ul className="dropdown-menu header__nav-menu">
                                    <li>
                                    <Link href="/contact">
                                        <a className={router.pathname == "/contact" ? "drop-down-item active" : "drop-down-item"}>Contact</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/contacttwo">
                                        <a className={router.pathname == "/contacttwo" ? "drop-down-item active" : "drop-down-item"}>Contact 2</a>
                                    </Link>
                                    </li>
                
                                </ul>
                            </li>
             */}
                        </ul>
                    </div>
            
                    <div className="header__actions">
                        <div className="header__action header__action--search">
                            <button className="header__action-btn" type="button"><i className="icofont-search-1"></i></button>
                        </div>

                        <div className="header__action header__action--profile">
                            <div className="dropdown">
                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" data-bs-offset="-100,10">
                                    <span><i className="icofont-user"></i></span> <span className="d-none d-md-inline">Pr. Willow</span>
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                    <Link href="/activity">
                                        <a className={router.pathname == "/activity" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i
                                                    className="icofont-lightning-ray"></i></span>
                                            Activity</a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/signup">
                                        <a className={router.pathname == "/signup" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i
                                                    className="icofont-space-shuttle"></i></span>
                                            Sign
                                            Up</a>
                                    </Link>
                                    </li>
                                    
                                    <li>
                                    <Link href="/signin">
                                        <a className={router.pathname == "/signin" ? "dropdown-item active" : "dropdown-item"}><span className="me-1"><i
                                                    className="icofont-login"></i></span>
                                            Sign
                                            In</a>
                                    </Link>
                                    </li>
                                    
                                    <li>
                                        <hr className="dropdown-divider"></hr> 
                                    </li>

                                    <li><a className="dropdown-item" href="#"> Sign
                                            Out <span className="ms-1"><i className="icofont-logout"></i></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="wallet-btn">
                            <Link href="/wallet">
                            <a ><span><i className="icofont-wallet" data-blast="color"></i></span> <span
                                    className="d-none d-md-inline">75,266k $MMO</span> </a>
                             </Link>
                        </div>
                    </div>

                    <button className="menu-trigger header__btn" id="menu05">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header;