import Link from 'next/link';

const OwnerList = ({data}) => {
    return (
        <li className="single-author d-flex align-items-center">
            <Link href="/trainer">
            <a className={`${data.verified?'veryfied':''}`}><img
                src={`${data.image}`}
                alt="author-img" /></a>
            </Link>
            <h6>
            <Link href="/trainer">
                <a>{`${data.name}`}</a>
            </Link>
            </h6>
        </li>
    )
}

export default OwnerList