import { useEffect, useState } from "react";
import "../styles/productModal.css";

function ProductModal({ laptop, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images =
    laptop.images && laptop.images.length > 0
      ? laptop.images
      : [laptop.image];

  /* =====================================================
     KHÓA SCROLL KHI MODAL MỞ
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =====================================================
     ĐÓNG BẰNG ESC
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  /* =====================================================
     ẢNH TRƯỚC
  ===================================================== */

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  /* =====================================================
     ẢNH TIẾP
  ===================================================== */

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  /* =====================================================
     CONTACT
  ===================================================== */

  const handleContact = () => {
    onClose();

    window.location.href = "/contact";
  };

  return (
    <div
      className="product-modal-overlay"
      onClick={onClose}
    >
      <div
        className="product-modal"
        onClick={(event) => event.stopPropagation()}
      >

        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>


        {/* =================================================
            LEFT - GALLERY
        ================================================= */}

        <div className="modal-gallery">

          <div className="modal-main-image">

            <img
              key={images[selectedImage]}
              src={images[selectedImage]}
              alt={laptop.name}
              className="modal-main-photo"
            />


            {/* PREVIOUS */}

            {images.length > 1 && (
              <button
                className="gallery-arrow gallery-prev"
                onClick={previousImage}
                aria-label="Ảnh trước"
              >
                ‹
              </button>
            )}


            {/* NEXT */}

            {images.length > 1 && (
              <button
                className="gallery-arrow gallery-next"
                onClick={nextImage}
                aria-label="Ảnh tiếp theo"
              >
                ›
              </button>
            )}

          </div>


          {/* =================================================
              THUMBNAILS
          ================================================= */}

          <div className="modal-thumbnails">

            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(index)}
                aria-label={`Xem ảnh ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${laptop.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT - INFORMATION
        ================================================= */}

        <div className="modal-information">

          {/* BRAND */}

          <div className="modal-brand">
            {laptop.brand}
          </div>


          {/* NAME */}

          <h2>
            {laptop.name}
          </h2>


          {/* DESCRIPTION */}

          <p className="modal-description">
            Laptop chính hãng, ngoại hình đẹp,
            hiệu năng ổn định và phù hợp cho
            học tập, văn phòng và công việc hàng ngày.
          </p>


          {/* =================================================
              SPECIFICATIONS
          ================================================= */}

          <div className="modal-specifications">

            <div>
              <span>CPU</span>
              <strong>{laptop.cpu}</strong>
            </div>

            <div>
              <span>RAM</span>
              <strong>{laptop.ram}</strong>
            </div>

            <div>
              <span>Ổ cứng</span>
              <strong>{laptop.ssd}</strong>
            </div>

            {laptop.screen && (
              <div>
                <span>Màn hình</span>
                <strong>{laptop.screen}</strong>
              </div>
            )}

            {laptop.color && (
              <div>
                <span>Màu sắc</span>
                <strong>{laptop.color}</strong>
              </div>
            )}

          </div>


          {/* =================================================
              PRICE
          ================================================= */}

          <div className="modal-price">

            <span>
              Giá bán
            </span>

            <strong>
              Liên hệ để nhận giá tốt
            </strong>

          </div>


          {/* =================================================
              CONTACT BUTTON
          ================================================= */}

          <button
            className="modal-contact"
            onClick={handleContact}
          >
            <span>
              Liên hệ ngay
            </span>

            <strong>
              →
            </strong>
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductModal;