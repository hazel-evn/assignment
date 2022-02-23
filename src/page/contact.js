import Banner from "../components/banner";
import Footer from "../components/footer";
import Headers from "../components/header";

const contactPage = {
    render() {
        return `
            <header class="header" id="header">
                ${Headers.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <h2>contact page</h2>
            </main>
            <footer class="site-footer">
                ${Footer.render()}
            </footer>
        `;
    },
};
export default contactPage;
