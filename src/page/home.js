import Banner from "../components/banner";
import News from "../components/news";
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
                    ${await News.render()}
                </div>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default HomePage;
