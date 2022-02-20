import { get } from "../api/product";
import Headers from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div >
            <header class="header">
                ${Headers.render()}
            </header>
            <main>
                <div class="flex mx-auto">
                    <div>
                        <img src="${data.img}" alt="" />
                    </div>
                    <div>
                        <h1>${data.name}</h1>
                        <h2>${data.desc}<h2>
                        <p>${data.price}</p>
                    </div>
                    
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
