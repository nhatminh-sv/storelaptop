import { useState } from "react";

import "../styles/product.css";

import ProductModal from "./ProductModal";
import ScrollReveal from "./ScrollReveal";


function ProductCard({ laptop }) {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {/* =========================
          PRODUCT CARD
      ========================= */}

      <ScrollReveal
        delay={(laptop.id % 4) * 100}
      >

        <article className="product-card">

          {/* =========================
              ẢNH SẢN PHẨM
          ========================= */}

          <div className="product-image-box">

            {laptop.featured && (
              <span className="product-badge">
                NỔI BẬT
              </span>
            )}

            <img
              src={laptop.image}
              alt={laptop.name}
              className="product-image"
            />

          </div>


          {/* =========================
              THÔNG TIN SẢN PHẨM
          ========================= */}

          <div className="product-info">

            {/* BRAND */}

            <div className="product-brand">
              {laptop.brand}
            </div>


            {/* TÊN */}

            <h2>
              {laptop.name}
            </h2>


            {/* CẤU HÌNH */}

            <p className="product-spec">
              {laptop.cpu}
              {" • "}
              {laptop.ram}
              {" • "}
              {laptop.ssd}
            </p>


            {/* =========================
                GIÁ
            ========================= */}

            <div className="product-price">

              <span>
                Giá bán
              </span>

              <strong>
                Liên hệ để nhận giá tốt
              </strong>

            </div>


            {/* =========================
                XEM CHI TIẾT
            ========================= */}

            <button
              className="detail-button"
              onClick={() => setShowModal(true)}
            >

              <span>
                Xem chi tiết
              </span>

              <strong>
                →
              </strong>

            </button>

          </div>

        </article>

      </ScrollReveal>


      {/* =========================
          PRODUCT MODAL
      ========================= */}

      {showModal && (

        <ProductModal
          laptop={laptop}
          onClose={() => setShowModal(false)}
        />

      )}

    </>
  );
}


export default ProductCard;