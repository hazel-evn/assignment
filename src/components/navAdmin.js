import toastr from "toastr";
import "toastr/build/toastr.min.css";

const navAdmin = {
    render() {
        return /* html */`
        <!-- PAGE CONTAINER-->
        
        <div class="container-full flex items-center justify-around h-16 bg-gray-700">
            <!-- HEADER DESKTOP-->
            <div class="flex items-center">
                <div><a href="/#" class=""><img src="../src/images/logo_white.png" width="70"></a></div>
                <div class="menu ml-10">
                            <ul class="flex flex-row gap-5">
                                <li>
                                    <a class="text-white hover:text-red-400" href="/#/admin/dashboard">
                                        Dashboard</a>
                                </li>
                                <li>
                                    <a class="text-white hover:text-red-400" href="/#/admin/product">
                                        Quản lý sản phẩm</a>
                                </li>
                            </ul>
                    </div>
            </div>
             ${localStorage.getItem("user") ? `<div class="cursor-pointer text-white" id="logout">
                Đăng xuất
            </div>` : "<div></div>"}  
            
        </div>
            <!-- HEADER DESKTOP-->
        `;
    },
    afterRender() {
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            toastr.success("Đăng xuất thành công");
            localStorage.removeItem("user");
            document.location.href = ("/#");
        });
    },
};
export default navAdmin;
