import { Link } from "react-router-dom";
import laptops from "../data/laptops";
import ProductCard from "../components/ProductCard";
import "../styles/surface.css";

function Surface() {
  const surfaceProducts = laptops.filter(
    (laptop) =>
      laptop.brand?.toLowerCase().includes("surface")
  );

  return (
    <div className="surface-page">

      {/* =========================
          SURFACE INTRO
      ========================= */}
      <section className="surface-header">
        <div className="surface-header-content">

          <h1>
            <span className="surface-title-black">
              MICROSOFT
            </span>{" "}
            <span className="surface-title-blue">
              SURFACE
            </span>
          </h1>

          <p>
            Khám phá dòng laptop Surface nhỏ gọn, tinh tế
            và mạnh mẽ cho học tập &amp; công việc.
          </p>

        </div>
      </section>


      {/* =========================
          PRODUCTS
      ========================= */}
      <section className="surface-products">

        <div className="surface-grid">

          {surfaceProducts.map((laptop) => (
            <ProductCard
              key={laptop.id}
              laptop={laptop}
            />
          ))}

        </div>


        {/* =========================
            NEXT CATEGORY
        ========================= */}
        <div className="next-category">

          <p>
            Bạn muốn xem MacBook?
          </p>

          <Link
            to="/macbook"
            className="next-category-button"
          >
            Khám phá MacBook
            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Surface;