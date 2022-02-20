import Navigo from "navigo";
import HomePage from "./page/home";
import BlogPage from "./page/blog";
import ProductPage from "./page/product";
import DetailPage from "./page/detailpage";
import contactPage from "./page/contact";
import SignInPage from "./page/signin";
import SignUpPage from "./page/signup";
import Dashboard from "./page/admin/dashboard";
import user from "./page/admin/user";
import adminProduct from "./page/admin/product";
import addNewProduct from "./page/admin/product/add";
import editProduct from "./page/admin/product/edit";
import CartPage from "./page/cart";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const printf = async (content, id) => {
    document.querySelector("#products").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
// Nếu user truy cập vào đường dẫn thì user sẽ làm cái việc gì đấy
    "/": () => {
        printf(HomePage);
        // console.log(HomePage);
    },
    "/blog": () => {
        printf(BlogPage);
    },
    "/product": () => {
        printf(ProductPage);
    },
    "/product/:id": ({ data }) => {
        // const { id } = data;
        printf(DetailPage, data.id);
    },
    "/cart": () => { printf(CartPage); },
    "/contact": () => {
        printf(contactPage);
    },
    "/signin": () => {
        printf(SignInPage);
    },
    "/signup": () => {
        printf(SignUpPage);
    },
    "/admin/dashboard": () => {
        printf(Dashboard);
    },
    "/admin/product": () => {
        printf(adminProduct);
    },
    "/admin/product/add": () => {
        printf(addNewProduct);
    },
    "/admin/product/:id/edit": ({ data }) => {
        printf(editProduct, data.id);
    },
    "/admin/user": () => {
        printf(user);
    },
});
router.resolve();
