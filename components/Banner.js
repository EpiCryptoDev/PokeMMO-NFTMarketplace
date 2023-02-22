import BannerSingle from './common/BannerSingle'
import BannerImages from "../data/Banner/BannerImages.json";
import Link from 'next/link';

var BannerImageListOne = BannerImages.slice(0,12);
var BannerImageListTwo = BannerImages.slice(11,24);

const Banner = () => {

    return(
        <div>
        <section className="banner-section style-1"  style={{backgroundImage:"url('assets/images/banner/bg.jpg')"}}>
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <div className="banner-content text-center">
                                <h2><span className="gradient-text-orange">PokeMMO Marketplace</span> </h2>
                                <p>Discover, Collect And Sell In-Game Assets.</p>
                                <div className="banner-btns d-flex flex-wrap justify-content-center">
                                    <Link href="/explore">
                                    <a className="default-btn move-top"><span>Explore</span> 
                                    </a>
                                    </Link>

                                    <Link href="/signin">
                                    <a className="default-btn style-2 move-right"><span>Sign In</span>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="banner_shape">
            <div className="banner_shape__1">
                <div className="row g-3 mb-3">
                    {
                        BannerImageListOne.map((item) =>(
                            <BannerSingle data={item} key={item.id} />
                        ))
                    }
                    
                </div>

                <div className="row g-3">
                    {
                        BannerImageListTwo.map((item) =>(
                            <BannerSingle data={item} key={item.id} />
                        ))
                    }
                    
                </div>
                
            </div>
            <div className="banner_shape__2">
            <div className="row g-3 mb-3">
                    {
                        BannerImageListOne.map((item) =>(
                            <BannerSingle data={item} key={item.id} />
                        ))
                    }
                    
                </div>

                <div className="row g-3">
                    {
                        BannerImageListTwo.map((item) =>(
                            <BannerSingle data={item} key={item.id} />
                        ))
                    }
                    
                </div>
            </div>
        </div>
        </section>
        </div>
    )
}

export default Banner;