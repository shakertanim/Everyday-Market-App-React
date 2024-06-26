import {Link} from "react-router-dom";

function Header() {
    let header: JSX.Element;
    // eslint-disable-next-line prefer-const
    header = (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className='nav-link' to='/product'>Products</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to='/register'>Register</Link>
                </li>
            </ul>
        </div>
    </nav>);

    return header;
}

export default Header;