import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get } from "../api/product";
import { addTocart } from "../utils/cart";
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
                <div class="container flex mx-auto justify-evenly px-48 py-24">
                    <div>
                        <img src="${data.img}" width="350px" />
                    </div>
                    <div>
                        <h3>${data.name}</h3>
                        <p class="py-5">${data.desc}<p>
                        <h4 class="text-red-600">${data.price}</h4>
                        <div class="py-10">
                            <input type="number" id="inputValue" class="border border-red-500"/>
                        </div>
                        <button id="btnAddToCart" class="block bg-red-500 text-white  uppercase w-full py-3 my-5">Thêm vào giỏ hàng</button>
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
