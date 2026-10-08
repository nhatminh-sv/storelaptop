import { Link } from "react-router-dom";
import laptops from "../data/laptops";
import ProductCard from "../components/ProductCard";
import "../styles/macbook.css";

function MacBook() {

  const macbookProducts = laptops.filter(
    (laptop) =>
      laptop.brand?.toLowerCase().includes("apple") ||
      laptop.brand?.toLowerCase().includes("macbook")
  );

  return (
    <div className="macbook-page">

      {/* =========================
          MACBOOK INTRO
      ========================= */}
      <section className="macbook-header">

        <div className="macbook-header-content">

          <h1>
            <span className="macbook-title-black">
              APPLE
            </span>{" "}
            <span className="macbook-title-blue">
              MACBOOK
            </span>
          </h1>

          <p>
            Khám phá những mẫu MacBook mỏng nhẹ, mạnh mẽ
            và phù hợp cho học tập &amp; công việc.
          </p>

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}
      <section className="macbook-products">

        <div className="macbook-grid">

          {macbookProducts.map((laptop) => (
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
            Bạn muốn xem Dell?
          </p>

          <Link
            to="/dell"
            className="next-category-button"
          >
            Khám phá Dell
            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default MacBook;