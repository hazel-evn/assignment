const Footer = {
    render() {
        return `
            <div class="footer_content">
                    <h3>CHÍNH SÁCH</h3>
                    <div class="footer-border"></div>
                    <ul class="footer-links">
                        <li><a href="#">Chính sách bán hàng</a></li>
                        <li><a href="#">Giao hàng và Thanh toán </a></li>
                        <li><a href="#">Bảo mật thông tin</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                    </ul>
                </div>
                <div class="footer_content">
                    <h3>HỖ TRỢ MUA HÀNG</h3>
                    <div class="footer-border"></div>
                    <ul class="footer-links">
                        <li><a href="#">Áo khoác</a></li>
                        <li><a href="#">Áo thun</a></li>
                        <li><a href="#">Quần jean</a></li>
                        <li><a href="#">Phụ kiện</a></li>
                    </ul>
                </div>
    
                <div class="footer_content">
                    <h3>THÔNG TIN</h3>
                    <div class="footer-border"></div>
                    <ul class="footer-links">
                        <li><a href="#">Giao hàng</a></li>
                        <li><a href="#">Hệ thống cửa hàng</a></li>
                        <li><a href="#">Hướng dẫn chọn size</a></li>
                        <li><a href="#">Hướng dẫn bảo quản</a></li>
                    </ul>
                </div>
                <div class="footer_content">
                    <h3>ĐĂNG KÝ NHẬN TIN</h3>
                    <div class="footer-border"></div>
                    <ul class="footer-links">
                        <p class="copyright-text">Đăng ký nhận bản tin và voucher giảm giá 10% cho đơn hàng đầu tiên</p>
                        <form class="footer-form">
                            <input type="text" class="footer-input" placeholder=" Nhập email của bạn"> <br>
                            <button class="footer-button">Gửi</button>
                        </form>
                    </ul>
                </div>
            `;
    },
};
export default Footer;
