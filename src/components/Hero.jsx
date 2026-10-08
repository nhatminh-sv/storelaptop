import "../styles/hero.css";

function Hero() {
    const handleExplore = () => {
        const featuredSection =
            document.getElementById("featured-products");

        if (featuredSection) {
            featuredSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="hero">

            {/* =========================
                LEFT CONTENT
            ========================== */}

            <div className="hero-left">

                <span className="hero-tag">
                    Premium Laptop Store
                </span>


                <h1 className="hero-title">
                    THÀNH MINH
                    <br />
                    <span>COMPUTER</span>
                </h1>


                <p className="hero-description">
                    Chuyên Surface và MacBook chính hãng.
                    Máy đẹp, giá tốt, bảo hành uy tín.
                </p>


                {/* =========================
                    FEATURES
                ========================== */}

                <div className="hero-features">

                    <div className="hero-feature">

                        <div className="feature-icon">
                            ✓
                        </div>

                        <div>
                            <strong>
                                Sản phẩm chất lượng
                            </strong>

                            <span>
                                Kiểm tra kỹ trước khi giao
                            </span>
                        </div>

                    </div>


                    <div className="hero-feature">

                        <div className="feature-icon">
                            🚚
                        </div>

                        <div>
                            <strong>
                                Giao hàng toàn quốc
                            </strong>

                            <span>
                                Nhanh chóng, an toàn
                            </span>
                        </div>

                    </div>


                    <div className="hero-feature">

                        <div className="feature-icon">
                            ♡
                        </div>

                        <div>
                            <strong>
                                Hỗ trợ tận tâm
                            </strong>

                            <span>
                                Tư vấn trước và sau mua hàng
                            </span>
                        </div>

                    </div>

                </div>


                {/* =========================
                    BUTTON
                ========================== */}

                <div className="hero-actions">

                    <button
                        className="hero-button"
                        onClick={handleExplore}
                    >
                        <span>
                            Khám phá ngay
                        </span>

                        <strong>
                            →
                        </strong>
                    </button>

                </div>


                {/* =========================
                    BOTTOM INFO
                ========================== */}

                <div className="hero-bottom-info">

                    <div className="hero-info-item">

                        <strong>
                            Surface
                        </strong>

                        <span>
                            Thiết kế tinh tế
                        </span>

                    </div>


                    <div className="hero-info-item">

                        <strong>
                            MacBook
                        </strong>

                        <span>
                            Hiệu năng mạnh mẽ
                        </span>

                    </div>


                    <div className="hero-info-item">

                        <strong>
                            Thành Minh
                        </strong>

                        <span>
                            Đồng hành cùng bạn
                        </span>

                    </div>

                </div>

            </div>


            {/* =========================
                RIGHT SHOWCASE
            ========================== */}

            <div className="hero-right">

                {/* Glow */}

                <div className="hero-glow hero-glow-main"></div>

                <div className="hero-glow hero-glow-small"></div>


                {/* Circles */}

                <div className="hero-circle"></div>


                {/* Dots */}

                <div className="hero-dots hero-dots-top"></div>

                <div className="hero-dots hero-dots-bottom"></div>


                {/* =========================
                    SURFACE LABEL
                ========================== */}

                <div className="product-label surface-label">

                    <span className="label-title">
                        SURFACE
                    </span>

                    <span className="label-description">
                        Làm việc thông minh
                    </span>

                    <span className="label-description">
                        Mọi lúc, mọi nơi
                    </span>

                </div>


                {/* =========================
                    SURFACE LỚN
                ========================== */}

                <img
                    className="floating laptop-1"
                    src="/images/laptop.png"
                    alt="Surface Laptop"
                />


                {/* =========================
                    SURFACE NHỎ
                ========================== */}

                <img
                    className="floating laptop-2"
                    src="/images/laptop2.png"
                    alt="Surface Laptop"
                />


                {/* =========================
                    MACBOOK
                ========================== */}

                <img
                    className="floating laptop-3"
                    src="/images/laptop3.png"
                    alt="MacBook"
                />


                {/* =========================
                    MACBOOK LABEL
                ========================== */}

                <div className="product-label macbook-label">

                    <span className="label-title">
                        MACBOOK
                    </span>

                    <span className="label-description">
                        Power. Elegance.
                    </span>

                    <span className="label-description">
                        Performance.
                    </span>

                </div>


                {/* =========================
                    HANDWRITTEN TEXT
                ========================== */}

                <div className="hero-script hero-script-top">
                    More
                    <br />
                    Possibilities
                </div>


                <div className="hero-script hero-script-bottom">
                    Work
                    <br />
                    Create
                    <br />
                    Inspire
                </div>


                {/* =========================
                    HIGHLIGHTS
                ========================== */}

                <div className="hero-highlights">

                    <div className="hero-highlight">

                        <div className="highlight-icon">
                            ◇
                        </div>

                        <div>
                            <strong>
                                Thiết kế cao cấp
                            </strong>

                            <span>
                                Sang trọng, tinh tế
                            </span>
                        </div>

                    </div>


                    <div className="hero-highlight">

                        <div className="highlight-icon">
                            ◉
                        </div>

                        <div>
                            <strong>
                                Hiệu năng mạnh mẽ
                            </strong>

                            <span>
                                Xử lý mọi tác vụ
                            </span>
                        </div>

                    </div>


                    <div className="hero-highlight">

                        <div className="highlight-icon">
                            ♧
                        </div>

                        <div>
                            <strong>
                                Đồng hành bền vững
                            </strong>

                            <span>
                                Lựa chọn cho công việc
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;