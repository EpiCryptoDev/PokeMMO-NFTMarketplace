import Link from "next/link";
import TimerTwo from "../components/common/TimerTwo";
import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Asset Details"
};

const ItemInfo =
{
    "id": 1,
        "image": "assets/images/nft-item/94-600.png",
        "description": "Monster #94 - Level 54 - Moves W X Y Z",
        "wishlist": "1.3",
        "expiredate": "2022-06-26",
        "title": "Dodo je Aliener Walk",
        "stock": "12",
        "price": "275.000",
        "size": "Level 54 - Moves W X Y Z W",
        "createdBy": "Pr. Willow",
        "listedBy": "Yuri Jackmann",
        "owners": [
            {
                "id":"1",
                "name":"Yuri Jackmann",
                "contactAddress":"0x0000000000000000000000000000000000000000",
                "token":"0005515456416",
                "blockchain":"Monster",
                "image":"assets/images/seller/collector-4.gif",
                "verified": true,
                "prfileLink":"/"
            },{
                "id":"2",
                "name":"Pedro Sanchez",
                "contactAddress":"0x0000000000000000000000000000000000000000",
                "token":"0005515456416",
                "blockchain":"Monster",
                "image":"assets/images/seller/collector-8.png",
                "verified": true,
                "prfileLink":"/"
            }
        ],
        "history": [
            {

            }
        ]
};

const AssetDetails = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <div className="item-details-section padding-top padding-bottom">
        <div className="container">
            <div className="item-details-wrapper">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="item-desc-part">
                            <div className="item-desc-inner">
                                <div className="item-desc-thumb">
                                    <img src={`${ItemInfo.image}`} alt="item-img" />
                                </div>
                                <div className="item-desc-content">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-details" type="button" role="tab"
                                                aria-controls="nav-details" aria-selected="true">Details</button>
                                            <button className="nav-link" id="nav-bids-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-bids" type="button" role="tab"
                                                aria-controls="nav-bids" aria-selected="false">Bids</button>
                                            <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-history" type="button" role="tab"
                                                aria-controls="nav-history" aria-selected="false">History</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="details-tab tab-pane fade show active" id="nav-details"
                                            role="tabpanel" aria-labelledby="nav-details-tab">

                                            <p>{`${ItemInfo.description}`}</p>
                                            <div className="author-profile d-flex flex-wrap align-items-center gap-15">
                                                <div className="author-p-thumb">
                                                <Link href="/trainer">
                                                    <a><img
                                                            src="assets/images/seller/collector-4.gif"
                                                            alt="author-img " /></a>
                                                </Link>
                                                </div>
                                                <div className="author-p-info">
                                                    <p className="mb-0">Owner</p>
                                                    <h6>
                                                        <Link href="/trainer"><a>{`${ItemInfo.owners[0].name}`}</a></Link>
                                                        
                                                    </h6>
                                                </div>
                                            </div>
                                            <ul className="other-info-list">
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Contact Address</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <div id="cryptoCode" className="crypto-page">
                                                            <input id="cryptoLink"
                                                                value={`${ItemInfo.owners[0].contactAddress}`}
                                                                readOnly />
                                                            <div id="cryptoCopy" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Copy Address">
                                                                <span className="copy-icon">
                                                                    <i className="icofont-ui-copy" aria-hidden="true"
                                                                        data-copytarget="#cryptoLink"></i>
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Asset ID</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.owners[0].token}`}</p>
                                                    </div>

                                                </li>
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Category</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.owners[0].blockchain}`}</p>
                                                    </div>
                                                </li>

                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Attributes</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.size}`}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bids-tab tab-pane fade" id="nav-bids" role="tabpanel"
                                            aria-labelledby="nav-bids-tab">
                                            <span><i className="icofont-law-order"></i></span>
                                            <p>No active bids yet. Be the first to make a bid!</p>
                                        </div>
                                        <div className="history-tab tab-pane fade" id="nav-history" role="tabpanel"
                                            aria-labelledby="nav-history-tab">
                                            <ul className="item-histo-list">
                                                <li className="histo-item">
                                                    <p>Created by <Link href="/trainer"><a>{`${ItemInfo.createdBy}`}</a></Link></p>
                                                    <time>2023-04-10 23:05:07</time>
                                                </li>
                                                <li className="histo-item">
                                                    <p>Gifted to <Link href="/trainer"><a >{`${ItemInfo.listedBy}`}</a></Link></p>
                                                    <time>2022-04-11 20:05:07</time>
                                                </li>
                                                <li className="histo-item">
                                                    <p>Listed by <Link href="/trainer"><a>{`${ItemInfo.owners[0].name}`}</a></Link></p>
                                                    <time>2023-04-11 22:05:07</time>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item-buy-part">
                            <div className="nft-item-title">
                                <h3>Monster #94 - Level 54 - Moves X Y Z W</h3>
                                <div className="share-btn">
                                    <div className=" dropstart">
                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-offset="25,0">
                                            <i className="icofont-share-alt"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><span>
                                                        <i className="icofont-twitter"></i>
                                                    </span> Twitter </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#"><span><i
                                                            className="icofont-telegram"></i></span> Telegram</a></li>
                                            <li><a className="dropdown-item" href="#"><span><i
                                                            className="icofont-envelope"></i></span> Email</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item-details-countdown">
                                <h4>Ends In:</h4>
                                <TimerTwo data={ItemInfo}/>
                            </div>
                            <div className="item-price">
                                <h4>Price</h4>
                                <p><span><i className="icofont-coins"></i> {`${ItemInfo.price}`} $MMO
                                    </span>($57.15)</p>
                            </div>
                            <div className="buying-btns d-flex flex-wrap">
                                <Link href="/wallet">
                                <a className="default-btn move-right"><span>Buy Now</span> </a>
                                </Link>
                                <Link href="/wallet">
                                <a className="default-btn style-2 move-right"><span>Place a Bid</span>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default AssetDetails;