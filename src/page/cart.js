import { reRender } from "../utils";
import { increaseQuantity } from "../utils/cart";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        <table>
            <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
                <th>Ảnh</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            ${cart.map((item) => /* html */`
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" value="${item.quantity}" /></td>
                    <td><img src="${item.img}" width="100px"></td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                        <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
                    </td>
                    <td>
                        <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                    </td>
                </tr>
            `).join("")}
            </tbody>
        </table>
        
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#products");
                    });
                }
            });
        });
    },
};
export default CartPage;
