import { Link } from "react-router-dom";
import laptops from "../data/laptops";
import ProductCard from "./ProductCard";


function ProductGrid() {

    // Chỉ lấy những sản phẩm được đánh dấu là nổi bật
    const featuredProducts = laptops.filter(
        (laptop) => laptop.featured === true
    );


    return (
        <section
            className="product-grid"
            id="featured-products"
        >

            {/* =========================
                TIÊU ĐỀ
            ========================= */}
            <div className="product-heading">

                <h1>
                    <span className="heading-black">
                        SẢN PHẨM
                    </span>{" "}

                    <span className="heading-blue">
                        NỔI BẬT
                    </span>
                </h1>


                <p>
                    Những sản phẩm được khách hàng yêu thích nhất
                    tại Thành Minh Computer
                </p>


                <div className="heading-line">
                    <span></span>
                    <i></i>
                </div>

            </div>


            {/* =========================
                DANH SÁCH SẢN PHẨM NỔI BẬT
            ========================= */}
            <div className="grid-container">

                {featuredProducts.map((laptop) => (
                    <ProductCard
                        key={laptop.id}
                        laptop={laptop}
                    />
                ))}

            </div>


            {/* =========================
                XEM TẤT CẢ
            ========================= */}
            <Link
                to="/surface"
                className="all-products-button"
                aria-label="Xem tất cả sản phẩm"
            >
                <span>
                    Xem tất cả sản phẩm
                </span>

                <strong>
                    →
                </strong>
            </Link>

        </section>
    );
}


export default ProductGrid;