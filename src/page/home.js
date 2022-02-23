import Banner from "../components/banner";
import Product from "../components/product";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    async render() {
        return /* html */`
        <div>
            <div class="header" id="header">
                ${Header.render()}
            </div>
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
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
