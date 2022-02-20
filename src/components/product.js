import { getAll } from "../api/product";

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
                        <button id="addToCart" class="btn btn-addToCart">Thêm vào giỏ hàng</button> 
                </div>
                `).join("")} 
            </div>
            `;
    },
};
export default Product;
