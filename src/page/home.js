import Banner from "../components/banner";
import Product from "../components/product";
import Headers from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    async render() {
        return /* html */`
        <div>
            <div id="header" class="header" >
                ${Headers.render()}
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
};
export default HomePage;
