import navAdmin from "../../../components/navAdmin";

const adminProduct = {
    render() {
        return /* html */ `
        ${navAdmin.render()}
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="flex justify-end">
                            <a href="/admin/product/add">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Thêm mới
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default adminProduct;
