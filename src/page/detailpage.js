import data from "../data";
import Headers from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        <div class="container">
            <header>
                ${Headers.render()}
            </header>
            <main>
                <div>
                    <h1>${result.title}</h1>
                    <img src="${result.img}" alt="" />
                    <p>${result.desc}</p>
                </div>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        </div>
        
        `;
    },
};
export default DetailPage;
