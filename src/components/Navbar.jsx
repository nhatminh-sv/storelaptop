import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img
                    src="/images/logo1.png"
                    alt="Thành Minh Computer"
                />
            </Link>

            <div className="navbar-menu">

                {/* TRANG CHỦ */}
                <Link
                    to="/"
                    className={
                        location.pathname === "/"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Trang chủ
                </Link>

                {/* SURFACE */}
                <Link
                    to="/surface"
                    className={
                        location.pathname === "/surface"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Surface
                </Link>

                {/* MACBOOK */}
                <Link
                    to="/macbook"
                    className={
                        location.pathname === "/macbook"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    MacBook
                </Link>

                {/* DELL */}
                <Link
                    to="/dell"
                    className={
                        location.pathname === "/dell"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Dell
                </Link>

                {/* LIÊN HỆ */}
                <Link
                    to="/contact"
                    className={
                        location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Liên hệ
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;