import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/create"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/redux" className="nav-link">
                    Redux
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/all" className="nav-link">
                    All2
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/all3" className="nav-link">
                    All3
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/all4" className="nav-link">
                    All4
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/all5" className="nav-link">
                    All5
                  </Link>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary me-2" type="submit">
                  Search
                </button>
                <button className="btn btn-outline-success me-2" type="submit">
                  Login
                </button>
                {/* <button className="btn btn-outline-danger gap-2" type="submit">
                  Register
                </button> */}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
