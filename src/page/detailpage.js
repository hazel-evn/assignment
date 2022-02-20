import toastr from "toastr";
import { get } from "../api/product";
import Headers from "../components/header";
import Footer from "../components/footer";
import { addTocart } from "../utils/cart";

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
                        <div>
                            <input type="number" id="inputValue" class="border border-gray-500" value="1"/>
                        </div>
                        <button id="btnAddToCart" class="block bg-red-700 text-white text-2xl uppercase w-full py-5 my-5">Thêm vào giỏ hàng</button>
                    </div>
                    
                    
                </div>
            </main>
            <footer class="site-footer">
                ${Footer.render()}
            </footer>
        </div>
        
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputValue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addTocart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Đã thêm sản phẩm vào giỏ hàng");
            });
        });
    },
};
export default DetailPage;
