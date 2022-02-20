const navAdmin = {
    render() {
        return /* html */`
        <!-- PAGE CONTAINER-->
        <div class="container-full flex items-center justify-around h-75 bg-gray-700">
            <!-- HEADER DESKTOP-->
                    <div class="menu">
                            <ul class="flex flex-row pt-3 gap-5">
                                <li>
                                    <a class="text-white" href="/#/admin/dashboard">
                                        Dashboard</a>
                                </li>
                                <li>
                                    <a class="text-white" href="/#/admin/product">
                                        Quản lý sản phẩm</a>
                                </li>
                                <li>
                                    <a class="text-white" href="calendar.html">
                                        Calendar</a>
                                </li>
                                <li>
                                    <a class="text-white" href="map.html">
                                        Maps</a>
                                </li>
                                <li>
                                    <a class="text-white" href="table.html">
                                        Tables</a>
                                </li>
                            </ul>
                    </div>
                    <div class="cursor-pointer text-white">
                       Đăng xuất
                    </div>
            </div>
            <!-- HEADER DESKTOP-->
        `;
    },
};
export default navAdmin;
