// import toastr from "toastr";
// import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {

    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        <div class="header">
            ${Header.render()}
        </div> 
        <div class="container">
            <table class="h-96 mx-auto">
            <thead>
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                    <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                    <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
                </thead>
                <tbody>
                ${cart.map((item) => /* html */`
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">${item.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${item.price}</td>
                        <td class="px-6 py-4 whitespace-nowrap"><input type="number" value="${item.quantity}" /></td>
                        <td class="px-6 py-4 whitespace-nowrap"><img src="${item.img}" width="100px"></td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <button data-id="${item.id}" class="btn btn-increase h-12 w-12">+</button>
                            <button data-id="${item.id}" class="btn btn-decrease h-12 w-12">-</button>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                        </td>
                    </tr>
                `).join("")}
                </tbody>
            </table>
        </div>
        <div class="site-footer">
            ${Footer.render()}
        </div>
        `;
    },
};
export default CartPage;
