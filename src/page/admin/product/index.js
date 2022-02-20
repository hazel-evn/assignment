import toastr from "toastr";
import navAdmin from "../../../components/navAdmin";
import { getAll, remove } from "../../../api/product";

const adminProduct = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        ${navAdmin.render()}
                    <div class="container">
                        <div class="flex py-10">
                            <a href="/admin/product/add">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Thêm mới
                                </button>
                            </a>
                        </div>
                        <table class="">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chi tiết sản phẩm</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${data.map((post, index) => `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                ${index + 1}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                ${post.name}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                ${post.desc}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap" >
                                               <img src=" ${post.img}" width="100px">
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <a href="/#/admin/news/${post.id}/edit" class="btn-edit inline-block px-4 py-2 text-white rounded bg-indigo-500 hover:bg-indigo-800">Edit</a>
                                                <button data-id=${post.id} class="btn btn-remove inline-block px-4 py-2 text-white rounded bg-indigo-500 hover:bg-indigo-800">DELETE</button>
                                            </td>
                                        </tr>
                                
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                    });
                }
                // remove
            });
        });
    },
};
export default adminProduct;
