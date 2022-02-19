import navAdmin from "../../../components/navAdmin";

const addNewProduct = {
    render() {
        return /* html */`
            ${navAdmin.render()}
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                       <div class="flex ml-72">
                            <a href="/admin/product">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Quay lại
                                </button>
                            </a>
                        </div>
                        <form id="news-add-post">
                            <div class="max-w-4xl m-auto py-6 ">
                                <!-- Replace with your content -->
                                <div class="px-4 py-6 sm:px-0">
                                <div    
                                >
                                        <p class="text-sm font-weight my-2">Tên bài viết</p>
                                        <input
                                        type="text"
                                        name="news-name"
                                        id="news-name"
                                        class="h-8 w-full border-solid border-2 border-red-500 rounded-lg outline-none"
                                        />
                                        <p class="text-sm font-weight my-2">Chi tiết bài viết</p>
                                        <input
                                        type="text"
                                        name="news-detail"
                                        id="news-detail"
                                        class="h-8 w-full border-solid border-2 border-red-500 rounded-lg outline-none"
                                        />
                                        <p class="text-sm font-weight my-2">Ảnh bài viết</p>
                                        <input type="file" name="images" id="images" value="" /> <br>
                                        <button
                                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >Thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
        `;
    },
    // afterRender() {
    //     const addNew = document.querySelector("#news-add-post");
    //     addNew.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //         const post = {
    //             title: document.querySelector("#news-name").value,
    //             img: document.querySelector("#images").value,
    //             desc: document.querySelector("#news-detail").value,
    //         };
    //         axios.

    // fetch("http://localhost:3001/post", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(post),
    // });
    // console.log(post);
    //     });
    // },
};
export default addNewProduct;
