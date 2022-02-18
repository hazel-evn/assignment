import Banner from "../components/banner";
import Footer from "../components/footer";
import Headers from "../components/header";

const BlogPage = {
    render() {
        return `
        <div class="max-w-5xl mx-auto">
            <header>
                ${Headers.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="blog">
                    <div class="article-border">
                            <div class="blogs">
                                <div class="blogs_item">
                                    <img src="./src/images/blog_1.jpg" class="img-fluid"alt="">
                                    <a href="#" class="news-title-2">Nghệ thuật tiết kiệm tiền hiệu quả từ những tín đồ sống tối giản.</a>
                                    <h6>Những mẹo sau sẽ giúp bạn quản lập được kế hoạch quản lí tài sản...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_2.jpg" class="img-fluid"alt="">
                                    <a href="#" class="news-title-2">Bye bye mái tóc bết dính khó ưa chỉ với 6 mẹo siêu dễ.</a>
                                    <h6>Tình trạng mái tóc đổ dầu bết dính, khó chịu và ngứa ngáy...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_2.jpg" class="img-fluid" alt="">
                                    <a href="#" class="news-title-2">Diện #OOTD siêu xinh, loạt người đẹp Việt tỏa sáng hơn cả nắng hè.</a>
                                    <h6>Mùa hè đã trôi qua được nửa chặng đường, trên trang cá nhân...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_3.jpg" class="img-fluid" alt=""> <br>
                                    <a href="#" class="news-title-2">Bí kíp da mịn dáng xinh nằm trong 8 loại trà thiên nhiên này.</a>
                                    <h6>Không những mang đến những hiệu quả đáng ngờ trong việc cải thiện...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_1.jpg" class="img-fluid"alt="">
                                    <a href="#" class="news-title-2">Nghệ thuật tiết kiệm tiền hiệu quả từ những tín đồ sống tối giản.</a>
                                    <h6>Những mẹo sau sẽ giúp bạn quản lập được kế hoạch quản lí tài sản...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_2.jpg" class="img-fluid"alt="">
                                    <a href="#" class="news-title-2">Bye bye mái tóc bết dính khó ưa chỉ với 6 mẹo siêu dễ.</a>
                                    <h6>Tình trạng mái tóc đổ dầu bết dính, khó chịu và ngứa ngáy...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_2.jpg" class="img-fluid" alt="">
                                    <a href="#" class="news-title-2">Diện #OOTD siêu xinh, loạt người đẹp Việt tỏa sáng hơn cả nắng hè.</a>
                                    <h6>Mùa hè đã trôi qua được nửa chặng đường, trên trang cá nhân...</h6>
                                </div>
                                <div class="blogs_item">
                                    <img src="./src/images/blog_3.jpg" class="img-fluid" alt=""> <br>
                                    <a href="#" class="news-title-2">Bí kíp da mịn dáng xinh nằm trong 8 loại trà thiên nhiên này.</a>
                                    <h6>Không những mang đến những hiệu quả đáng ngờ trong việc cải thiện...</h6>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
            <footer class="site-footer">
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default BlogPage;
