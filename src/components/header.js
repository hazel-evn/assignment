const Headers = {
    render() {
        return `
        <div class="bg-blue-500">
            <a href="/">
                <img src="https://caodang.fpt.edu.vn/vinmart/images/x2017-FPTPolytechic-01.jpg.pagespeed.ic.7gM_dxeJzr.jpg" class = "h-20 w-50 mx-auto" />
            </a>
        </div>
        <div class = "flex justify-between bg-orange-500">
            <div>
                <ul class="flex gap-8 ">
                <li class=""><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
                <li><a href="/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white ">About Page</a></li>
                <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white ">Product Page</a></li>
                </ul>
            </div>
            <div class="px-4 py-5">
                <form action="#" method="post">
                    <input type="text" class="h-6 w-40 outline-none rounded-lg hover:border-orange-600">
                    <button class="h-6 w-15 text-white bg-black px-3 rounded-lg">Tìm kiếm</button>
                </form>
            </div>
        </div>
        `;
    },
};
export default Headers;
