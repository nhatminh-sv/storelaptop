import { useState } from "react";
import "../styles/product.css";
import ProductModal from "./ProductModal";

function ProductCard({ laptop }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="product-card">

        {/* ẢNH */}
        <div className="product-image-box">

          <span className="product-badge">
            NỔI BẬT
          </span>

          <img
            src={laptop.image}
            alt={laptop.name}
            className="product-image"
          />

        </div>


        {/* THÔNG TIN */}
        <div className="product-info">

          <div className="product-brand">
            {laptop.brand}
          </div>

          <h2>
            {laptop.name}
          </h2>

          <p className="product-spec">
            {laptop.cpu} • {laptop.ram} • {laptop.ssd}
          </p>


          {/* GIÁ */}
          <div className="product-price">

            <span>Giá bán</span>

            <strong>
              {laptop.price.toLocaleString("vi-VN")} đ
            </strong>

          </div>


          {/* XEM CHI TIẾT */}
          <button
            className="detail-button"
            onClick={() => setShowModal(true)}
          >
            <span>Xem chi tiết</span>
            <strong>→</strong>
          </button>

        </div>

      </article>


      {/* MODAL */}
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