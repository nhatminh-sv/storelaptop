import { useEffect, useState } from "react";

import "../styles/hero.css";

import ScrollReveal from "./ScrollReveal";


function Hero() {

    /* =====================================================
       MOUSE PARALLAX
    ===================================================== */

    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });


    useEffect(() => {

        // Không chạy parallax trên màn hình nhỏ
        const mediaQuery = window.matchMedia(
            "(max-width: 800px)"
        );

        if (mediaQuery.matches) {
            return;
        }


        const handleMouseMove = (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 2;


            setMouse({
                x,
                y,
            });
        };


        window.addEventListener(
            "mousemove",
            handleMouseMove
        );


        return () => {

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

        };

    }, []);


    /* =====================================================
       KHÁM PHÁ NGAY
    ===================================================== */

    const handleExplore = () => {

        const featuredSection =
            document.getElementById(
                "featured-products"
            );


        if (featuredSection) {

            featuredSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

    };


    return (

        <section className="hero">


            {/* =================================================
                HERO LEFT
            ================================================= */}

            <div className="hero-left">


                {/* TAG */}

                <ScrollReveal delay={100}>

                    <span className="hero-tag">
                        Premium Laptop Store
                    </span>

                </ScrollReveal>



                {/* TITLE */}

                <ScrollReveal delay={200}>

                    <h1 className="hero-title">

                        THÀNH MINH

                        <br />

                        <span>
                            COMPUTER
                        </span>

                    </h1>

                </ScrollReveal>



                {/* DESCRIPTION */}

                <ScrollReveal delay={300}>

                    <p className="hero-description">

                        Chuyên Surface và MacBook chính hãng.
                        Máy đẹp, giá tốt, bảo hành uy tín.

                    </p>

                </ScrollReveal>



                {/* FEATURES */}

                <ScrollReveal delay={400}>

                    <div className="hero-features">


                        {/* FEATURE 1 */}

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



                        {/* FEATURE 2 */}

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



                        {/* FEATURE 3 */}

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

                </ScrollReveal>



                {/* BUTTON */}

                <ScrollReveal delay={500}>

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

                </ScrollReveal>



                {/* BOTTOM INFO */}

                <ScrollReveal delay={600}>

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

                </ScrollReveal>


            </div>



            {/* =================================================
                HERO RIGHT
            ================================================= */}

            <div className="hero-right">


                {/* GLOW */}

                <div className="hero-glow hero-glow-main"></div>

                <div className="hero-glow hero-glow-small"></div>


                {/* CIRCLE */}

                <div className="hero-circle"></div>


                {/* DOTS */}

                <div className="hero-dots hero-dots-top"></div>

                <div className="hero-dots hero-dots-bottom"></div>



                {/* =================================================
                    SURFACE LABEL
                ================================================= */}

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



                {/* =================================================
                    LAPTOP 1
                ================================================= */}

                <img
                    className="floating laptop-1"
                    src="/images/laptop.png"
                    alt="Surface Laptop"
                    style={{
                        translate:
                            `${mouse.x * -8}px ${mouse.y * -5}px`,
                    }}
                />



                {/* =================================================
                    LAPTOP 2
                ================================================= */}

                <img
                    className="floating laptop-2"
                    src="/images/laptop2.png"
                    alt="Surface Laptop"
                    style={{
                        translate:
                            `${mouse.x * 12}px ${mouse.y * 7}px`,
                    }}
                />



                {/* =================================================
                    LAPTOP 3
                ================================================= */}

                <img
                    className="floating laptop-3"
                    src="/images/laptop3.png"
                    alt="MacBook"
                    style={{
                        translate:
                            `${mouse.x * 16}px ${mouse.y * 9}px`,
                    }}
                />



                {/* =================================================
                    MACBOOK LABEL
                ================================================= */}

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



                {/* SCRIPT */}

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



                {/* =================================================
                    HIGHLIGHTS
                ================================================= */}

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