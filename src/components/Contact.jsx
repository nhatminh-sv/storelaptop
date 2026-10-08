import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Đang gửi...");

        try {
            await emailjs.send(
                "service_17gbkto",
                "template_q4ssnt2",
                {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    product: formData.product,
                    message: formData.message,
                },
                "Ye7_jw4ULBR8h9gSI"
            );

            setStatus("success");

            setFormData({
                name: "",
                phone: "",
                email: "",
                product: "",
                message: "",
            });

        } catch (error) {
            console.error("EmailJS Error:", error);

            setStatus("error");
        }
    };

    return (
        <section className="contact-page">

            {/* TIÊU ĐỀ */}
            <div className="contact-heading">
                <h1>
                    LIÊN HỆ <span>THÀNH MINH COMPUTER</span>
                </h1>

                <p>
                    Bạn cần tư vấn về Surface hoặc MacBook?
                    Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất.
                </p>
            </div>


            {/* NỘI DUNG */}
            <div className="contact-container">

                {/* THÔNG TIN SHOP */}
                <div className="contact-info">

                    <span className="contact-tag">
                        THÀNH MINH COMPUTER
                    </span>

                    <h2>
                        Chúng tôi luôn sẵn sàng
                        <span> hỗ trợ bạn</span>
                    </h2>

                    <p className="contact-description">
                        Nếu bạn đang quan tâm đến Surface, MacBook
                        hoặc cần tư vấn lựa chọn laptop phù hợp,
                        hãy liên hệ với Thành Minh Computer.
                    </p>


                    <div className="contact-item">
                        <div className="contact-icon">
                            📞
                        </div>

                        <div>
                            <strong>Hotline</strong>
                            <p>Liên hệ để được tư vấn</p>
                        </div>
                    </div>


                    <div className="contact-item">
                        <div className="contact-icon">
                            💬
                        </div>

                        <div>
                            <strong>Facebook / Zalo</strong>
                            <p>Tư vấn nhanh chóng</p>
                        </div>
                    </div>


                    <div className="contact-item">
                        <div className="contact-icon">
                            💻
                        </div>

                        <div>
                            <strong>Sản phẩm</strong>
                            <p>Surface & MacBook</p>
                        </div>
                    </div>

                </div>


                {/* FORM */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-title">
                        <h2>Gửi yêu cầu tư vấn</h2>

                        <p>
                            Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại.
                        </p>
                    </div>


                    {/* HỌ TÊN */}
                    <div className="form-group">
                        <label>
                            Họ và tên <span>*</span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nhập họ và tên"
                            required
                        />
                    </div>


                    {/* SỐ ĐIỆN THOẠI */}
                    <div className="form-group">
                        <label>
                            Số điện thoại <span>*</span>
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                            required
                        />
                    </div>


                    {/* EMAIL */}
                    <div className="form-group">
                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Nhập email của bạn"
                        />
                    </div>


                    {/* SẢN PHẨM */}
                    <div className="form-group">
                        <label>
                            Sản phẩm quan tâm
                        </label>

                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                        >
                            <option value="">
                                Chọn sản phẩm
                            </option>

                            <option value="Surface">
                                Surface
                            </option>

                            <option value="Surface Laptop Go 2">
                                Surface Laptop Go 2
                            </option>

                            <option value="Surface Laptop">
                                Surface Laptop
                            </option>

                            <option value="MacBook">
                                MacBook
                            </option>

                            <option value="MacBook Pro M1">
                                MacBook Pro M1
                            </option>

                            <option value="MacBook Air M1">
                                MacBook Air M1
                            </option>

                            <option value="Khác">
                                Sản phẩm khác
                            </option>
                        </select>
                    </div>


                    {/* NỘI DUNG */}
                    <div className="form-group">
                        <label>
                            Nội dung cần tư vấn <span>*</span>
                        </label>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Bạn muốn hỏi gì?"
                            rows="5"
                            required
                        />
                    </div>


                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={status === "Đang gửi..."}
                    >
                        {status === "Đang gửi..."
                            ? "Đang gửi..."
                            : "Gửi yêu cầu →"}
                    </button>


                    {/* THÔNG BÁO */}
                    {status === "success" && (
                        <div className="contact-success">
                            ✓ Gửi yêu cầu thành công!
                            <br />
                            Thành Minh Computer sẽ liên hệ với bạn sớm nhất.
                        </div>
                    )}


                    {status === "error" && (
                        <div className="contact-error">
                            ✕ Có lỗi xảy ra khi gửi.
                            Vui lòng thử lại sau.
                        </div>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;