import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get, update } from "../../../api/product";
import navAdmin from "../../../components/navAdmin";

const editProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            ${navAdmin.render()}
                    <div class="container">
                       <div class="flex py-10 ml-7">
                            <a href="/admin/product">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Quay lại
                                </button>
                            </a>
                        </div>
                        <form id="edit-product">
                            <div class="">
                                <!-- Replace with your content -->
                                <div class="px-4 sm:px-0">
                                <div    
                                >
                                        <p class="text-sm font-weight my-2">Tên sản phẩm</p>
                                        <input
                                        type="text"
                                        name="product-name"
                                        id="product-name"
                                        class="h-8 w-1/2 border-solid border-2 border-red-500 rounded-lg outline-none"
                                        value="${data.name}"
                                        />
                                        <p class="text-sm font-weight my-2">Chi tiết sản phẩm</p>
                                        <textarea
                                        type="text"
                                        name="product-detail"
                                        id="product-detail"
                                        cols="65" rows="5"
                                        class="border-solid border-2 border-red-500 rounded-lg outline-none"
                                        value="${data.desc}"
                                        >
                                        </textarea>
                                        <p class="text-sm font-weight my-2">Giá sản phẩm</p>
                                        <input
                                        type="number"
                                        name="product-price"
                                        id="product-price"
                                        class="h-8 w-1/2 border-solid border-2 border-red-500 rounded-lg outline-none"
                                        value="${data.price}"
                                        />

                                        <p class="text-sm font-weight my-2">Ảnh sản phẩm</p>
                                        <input type="file" name="images" id="images" value="" /> <br>
                                        <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview" width="200px"/>
                                        <button
                                                class="inline-flex items-center px-4 py-2 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >Thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
            </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#edit-product");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                name: document.querySelector("#product-name").value,
                img: document.querySelector("#images").value,
                price: document.querySelector("#product-price").value,
                desc: document.querySelector("#product-desc").value,
            }).then(
                toastr.success("Edit sản phẩm thành công"),
                document.location.href = "/#/admin/product",
            );
        });
    },
};
export default editProduct;
