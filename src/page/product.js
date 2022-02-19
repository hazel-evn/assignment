import Banner from "../components/banner";
import Footer from "../components/footer";
import Headers from "../components/header";
import Product from "../components/product";

const ProductPage = {
    async render() {
        return `
        <div class="">
            <header class="header">
                ${Headers.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${await Product.render()}
                </div>
            </main>
            <footer class="site-footer">
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default ProductPage;
