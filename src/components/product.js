import axios from "axios";

const Product = {
    async render() {
        const { data } = await axios.get("http://localhost:3001/products");
        return /* html */`
        <div class="product_title">sản phẩm</div>
            <div class="product">
                ${data.map((product) => `
                <div class="product_detail">
                    <a href="/product/${product.id}"><img src="./src/images/1.jpg" alt="" /></a>
                    <h3><a href="/product/${product.id}">${product.title}</a></h3>
                    <p class="product_price">${product.price}</p>
                    <button id="addToCart" class="btn btn-addToCart">Thêm vào giỏ hàng</button> 
                </div>
                `).join("")} 
            </div>
            `;
    },
};
export default Product;
