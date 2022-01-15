import Banner from "../components/banner";
import News from "../components/news";
import Headers from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${Headers.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${News.render()}
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
