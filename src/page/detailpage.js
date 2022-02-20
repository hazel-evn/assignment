import { get } from "../api/product";
import Headers from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        <div >
            <header class="header">
                ${Headers.render()}
            </header>
            <main>
                <div>
                    <h1>${data.title}</h1>
                    <img src="${data.img}" alt="" />
                    <p>${data.price}</p>
                </div>
            </main>
            <footer class="site-footer">
                ${Footer.render()}
            </footer>
        </div>
        
        `;
    },
};
export default DetailPage;
