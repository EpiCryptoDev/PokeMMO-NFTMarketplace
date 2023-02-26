import { useState } from 'react';
import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingle from "../components/common/ProductSingle";

var productList = Products;

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Explore"
};

const Explore = () => {
    const [products, setshowProducts] = useState(productList);

    const productSearch = (keyword) => {
        if (keyword != '') {
            var productListFiltered = Products.filter((item) => {
                var productTag = item.tags.toLowerCase();
                var searchkeyword =keyword.toLowerCase();
                return productTag.includes(searchkeyword);

            });
            setshowProducts(productListFiltered);
        }else {
            setshowProducts(productList);

        }

        
        
    }

    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="explore-section padding-top padding-bottom">
        <div className="container">
            <div className="section-wrapper">
                <div className="row gy-5 flex-row-reverse">

                    <div className="col-lg-9">
                        <div className="explore-wrapper explore-load">
                            <div className="row g-4">
                                {
                                    products.map((item) => (
                                        <div className="col-xl-4 col-md-6" key={item.id}>
                                            <ProductSingle data={item} />
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <aside className="nft-filter">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <i className="icofont-atom"></i> Category
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Monsters" id="Monsters" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                    Monsters
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="Ressources" id="Ressources" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Ressources
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="Medicine" id="Medicine" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Medicine
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="Moves" id="Moves" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Moves
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Balls" id="Balls" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                    Balls
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="EvItems" id="EvItems" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Evolve Items
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="HeItems" id="HeItems" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Held Items
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="KeItems" id="KeItems" onChange={(event) => productSearch(event.target.value)} />

                                                <label className="form-check-label">
                                                    Key Items
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            <i className="icofont-ui-browser"></i> Status
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="For Sell" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                Direct Sale
                                                </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="For Collect" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                Auction
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Trending" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                    Trending
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <i className="icofont-funky-man"></i> Trainers
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Yuri Jackmann" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                Yuri Jackmann
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Rin Yazaki" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                Rin Yazaki
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Pedro Sanchez" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label" >
                                                Pedro Sanchez
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="John Doe" id="ethereum" onChange={(event) => productSearch(event.target.value)} />
                                                <label className="form-check-label">
                                                John Doe
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Explore;