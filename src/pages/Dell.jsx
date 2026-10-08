import { Link } from "react-router-dom";
import laptops from "../data/laptops";
import ProductCard from "../components/ProductCard";
import "../styles/dell.css";

function Dell() {
    // Lọc những sản phẩm thuộc danh mục Dell
    const dellProducts = laptops.filter(
        (laptop) => laptop.category === "dell"
    );

    return (
        <main className="dell-page">

            {/* =========================
                DELL INTRO
            ========================= */}
            <section className="dell-header">

                <div className="dell-header-content">

                    <h1>
                        <span className="dell-title-black">
                            LAPTOP
                        </span>{" "}
                        <span className="dell-title-blue">
                            DELL
                        </span>
                    </h1>

                    <p>
                        Khám phá các mẫu laptop Dell chính hãng,
                        thiết kế bền bỉ, hiệu năng ổn định và phù hợp
                        cho học tập, công việc và giải trí.
                    </p>

                </div>

            </section>


            {/* =========================
                PRODUCTS
            ========================= */}
            <section className="dell-products">

                <div className="dell-grid">

                    {dellProducts.length > 0 ? (

                        dellProducts.map((laptop) => (
                            <ProductCard
                                key={laptop.id}
                                laptop={laptop}
                            />
                        ))

                    ) : (

                        <div className="dell-empty">

                            <h2>
                                Dell đang được cập nhật
                            </h2>

                            <p>
                                Shop đang cập nhật thêm các sản phẩm Dell.
                            </p>

                        </div>

                    )}

                </div>


                {/* =========================
                    NEXT CATEGORY
                ========================= */}
                <div className="next-category">

                    <p>
                        Bạn muốn xem Surface?
                    </p>

                    <Link
                        to="/surface"
                        className="next-category-button"
                    >
                        Khám phá Surface
                        <span>→</span>
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Dell;