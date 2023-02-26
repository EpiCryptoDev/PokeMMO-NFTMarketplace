import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"NFT Ranking"
};

const RankedUser =[
    {
        "id":1,
        "userName":"Yuri Jackmann",
        "image":"assets/images/seller/collector-4.gif",
        "Volume":"22,626,610.102",
        "day":"-251,818",
        "sevenDay":"+1,754,511",
        "averagePrice":"167,604.52",
        "owner":"135",
        "assets":"$13.1",
        "increment":"$13.1",
    },
    {
        "id":2,
        "userName":"Rin Yazaki",
        "image":"assets/images/seller/collector-3.png",
        "Volume":"15,626,610.02",
        "day":"+358,541",
        "sevenDay":"+2,541,997",
        "averagePrice":"128,086.96",
        "owner":"122",
        "assets":"$8.6"
    },
    {
        "id":3,
        "userName":"Pedro Sanchez",
        "image":"assets/images/seller/collector-8.png",
        "Volume":"13,722,600.12",
        "day":"+251,661",
        "sevenDay":"+1,981,554",
        "averagePrice":"117,287.18",
        "owner":"117",
        "assets":"$6.0"
    },{
        "id":4,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-1.png",
        "Volume":"12,216,610.72",
        "day":"-257,991",
        "sevenDay":"+1,456,433",
        "averagePrice":"116,348.67",
        "owner":"105",
        "assets":"$6.0"
    },{
        "id":5,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-6.png",
        "Volume":"20,715,541.22",
        "day":"-25,181",
        "sevenDay":"1,345,151",
        "averagePrice":"203,093.54",
        "owner":"102",
        "assets":"$5.9"
    },{
        "id":6,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-3.gif",
        "Volume":"10,914,541.22",
        "day":"-37,897",
        "sevenDay":"+1,771,197",
        "averagePrice":"111,372.87",
        "owner":"98",
        "assets":"$5.8"
    },{
        "id":7,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-4.gif",
        "Volume":"9,135,831.22",
        "day":"+98,758",
        "sevenDay":"+1,217,473",
        "averagePrice":"87,007.91",
        "owner":"105",
        "assets":"$5.3"
    },{
        "id":8,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-7.png",
        "Volume":"8,541,641.77",
        "day":"-25,784",
        "sevenDay":"+987,471",
        "averagePrice":"87,007.91",
        "owner":"87",
        "assets":"$4.7"
    },{
        "id":9,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-1.gif",
        "Volume":"7,251,711.81",
        "day":"+227,511",
        "sevenDay":"+1,574,881",
        "averagePrice":"108,234.49",
        "owner":"67",
        "assets":"$4.5"
    },{
        "id":10,
        "userName":"John Doe",
        "image":"assets/images/seller/collector-10.png",
        "Volume":"9,889,105.41",
        "day":"-15,454",
        "sevenDay":"+874,541",
        "averagePrice":"137,348.68",
        "owner":"72",
        "assets":"$4.4"
    },
];

const Rank = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="ranking-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header">
                <div className="nft-filter d-flex flex-wrap align-items-center justify-content-center  gap-15">
                    <h3>Trainers Ranking</h3>
                </div>
                <div className="nft-search">
                    <div className="form-floating nft-search-input">
                        <input type="text" className="form-control" id="nftSearch" placeholder="Search NFT" />
                        <label>Search Trainer</label>
                        <button type="button"> <i className="icofont-search-1"></i></button>
                    </div>
                </div>
            </div>
            <div className="ranking-wrapper table-responsive">
                <table className="table table-hover rank-table">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Trainer</th>
                            <th scope="col">Volume</th>
                            <th scope="col">24h </th>
                            <th scope="col">7d </th>
                            <th scope="col">Average Price</th>
                            <th scope="col">Trades</th>
                            <th scope="col">Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RankedUser.map((item, i=1) =>(
                                <tr key={item.id}>
                                    <th scope="row" className="rank-sl">{i+1}</th>
                                    <td className="rank-collection">
                                        <div className="rank-col-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-col-thumb">
                                                <a href="#">
                                                    <img className="rounded-circle" src={`${item.image}`}
                                                        alt="Collection Image" />
                                                </a>

                                            </div>
                                            <div className="rank-col-content">
                                                <a href="#">{`${item.userName}`}</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="rank-vol">
                                        <div className="rank-vol-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-vol-thumb">
                                                <img className="rounded-circle" src="assets/images/currency/MMO.png"
                                                    alt="Collection Image" />

                                            </div>
                                            <div className="rank-vol-content">
                                                {`${item.Volume}`}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={parseInt(item.day) < 0? 'rank-hour text-danger':'rank-hour text-success'}>{`${item.day}`}</td>
                                    <td className={parseInt(item.sevenDay) < 0? 'rank-day text-danger':'rank-day text-success'} >{`${item.sevenDay}`}</td>
                                    <td className="rank-price">
                                        <div className="rank-vol-inner d-flex flex-wrap align-items-center">
                                            <div className="rank-vol-thumb">
                                                <img className="rounded-circle" src="assets/images/currency/MMO.png"
                                                    alt="Collection Image" />

                                            </div>
                                            <div className="rank-vol-content">
                                            {`${item.averagePrice}`}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="rank-owner">{`${item.owner}`}</td>
                                    <td className="rank-assets">{`${item.assets}`}k</td>
                                </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Rank;