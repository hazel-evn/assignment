import Banner from "../components/banner";
import Footer from "../components/footer";
import Headers from "../components/header";

const AboutPage = {
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
                <h2>About Page</h2>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        `;
    },
};
export default AboutPage;
