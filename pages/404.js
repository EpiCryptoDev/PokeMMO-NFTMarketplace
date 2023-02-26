import PageHeader from '../components/PageHaeder';



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"404 Error Page"
};

const Policy = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="error-section padding-top padding-bottom">
        <div className="container">
            <div className="section-wrapper">
                <div className="error-item">
                    <div className="error-thumb">
                        <img src="assets/images/404/404.png" alt="404" />
                    </div>
                    <div className="error-content">
                        <h3>Oops! This Page Was Not Found</h3>
                        <p>We are really sorry PokeMMO Marketplace is still in Demo - Read Only Mode.<i className="icofont-worried"></i></p>
                        <p>Some page are missing as we are still building the Marketplace.</p>
                        <a className="default-btn move-left"><span>Go Back to Home</span> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        </div>
    )
}

export default Policy;