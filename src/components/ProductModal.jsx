import { useEffect, useState } from "react";
import "../styles/productModal.css";

function ProductModal({ laptop, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images =
    laptop.images && laptop.images.length > 0
      ? laptop.images
      : [laptop.image];


  // Khóa scroll trang khi modal mở
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);


  // Đóng bằng phím ESC
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


  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };


  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
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

        {/* CLOSE */}
        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* LEFT - IMAGE */}
        <div className="modal-gallery">

          <div className="modal-main-image">

            <img
              src={images[selectedImage]}
              alt={laptop.name}
            />


            {/* PREVIOUS */}
            {images.length > 1 && (
              <button
                className="gallery-arrow gallery-prev"
                onClick={previousImage}
              >
                ‹
              </button>
            )}


            {/* NEXT */}
            {images.length > 1 && (
              <button
                className="gallery-arrow gallery-next"
                onClick={nextImage}
              >
                ›
              </button>
            )}

          </div>


          {/* THUMBNAILS */}
          <div className="modal-thumbnails">

            {images.map((image, index) => (
              <button
                key={image}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${laptop.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </div>


        {/* RIGHT - INFORMATION */}
        <div className="modal-information">

          <div className="modal-brand">
            {laptop.brand}
          </div>


          <h2>
            {laptop.name}
          </h2>


          <p className="modal-description">
            Laptop chính hãng, ngoại hình đẹp,
            hiệu năng ổn định và phù hợp cho
            học tập, văn phòng và công việc hàng ngày.
          </p>


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


          <div className="modal-price">

            <span>Giá bán</span>

            <strong>
              <strong>Liên hệ để nhận giá tốt</strong>
            </strong>

          </div>


          <button className="modal-contact">
            Liên hệ ngay
            <span>→</span>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;