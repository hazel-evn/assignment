import navAdmin from "../../../components/navAdmin";

const addNews = {
    render() {
        return `
        <div class="min-h-full">
            ${navAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2
                            class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                            >
                            Thêm mới
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/news" class="sm:ml-3">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Quay lại
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                </header>
                <form id="news-add-post">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div
              class="border-4 border-dashed border-gray-200 rounded-lg h-96"
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
export default addNews;
