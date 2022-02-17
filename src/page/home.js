import Banner from "../components/banner";
import detailProduct from "../components/product";
import Headers from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    async render() {
        return /* html */`
        <div class="container-2xl">
            <header>
                ${Headers.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${await detailProduct.render()}
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
