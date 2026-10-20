
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          StudentPortal
        </a>

        <div className="navbar-nav me-auto">
          <a className="nav-link" href="#">Dashboard</a>
          <a className="nav-link active" href="#">Students</a>
          <a className="nav-link" href="#">Courses</a>
          <a className="nav-link" href="#">Reports</a>
        </div>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search students"
            aria-label="Search students"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
