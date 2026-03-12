function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-2">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav  me-auto align-items-center my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" height="35"></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Docs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Examples</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Icons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blogs</a>
                            </li>
                        </ul>
                        <form className="d-flex me-auto" role="search">
                            <input className="form-control" type="search" placeholder=" Search" aria-label="Search" />
                            <button className="btn btn-outline-success ms-auto" type="submit">Search</button>
                        </form>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link " href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;