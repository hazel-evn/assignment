import toastr from "toastr";
import { getAll, get } from "../api/product";
import "toastr/build/toastr.min.css";
import { addTocart } from "../utils/cart";

const Product = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="product_title">sản phẩm</div>
            <div class="product">
                ${data.map((product) => `
                <div class="product_detail">
                        <img src="${product.img}">
                        <h3><a href="/product/${product.id}">${product.name}</a></h3>
                        <p class="product_price">${product.price}</p>
                        <button id="btnAddToCart" class="btn btn-addToCart">Thêm vào giỏ hàng</button> 
                </div>
                `).join("")} 
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
export default Product;
