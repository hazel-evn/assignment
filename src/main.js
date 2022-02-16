import Navigo from "navigo";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
import DetailPage from "./page/detailpage";
import contactPage from "./page/contact";
import SignInPage from "./page/signin";
import SignUpPage from "./page/signup";
import Dashboard from "./page/admin/dashboard";
import adminNews from "./page/admin/news";
import addNews from "./page/admin/news/add";
import user from "./page/admin/user";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const printf = async (content, id) => {
    document.querySelector("#products").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender();
};
router.on({
// Nếu user truy cập vào đường dẫn thì user sẽ làm cái việc gì đấy
    "/": () => {
        printf(HomePage);
        // console.log(HomePage);
    },
    "/about": () => {
        printf(AboutPage);
    },
    "/product": () => {
        printf(ProductPage);
    },
    "/product/:id": ({ data }) => {
        // const { id } = data;
        printf(DetailPage, data.id);
    },
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
    "/admin/news": () => {
        printf(adminNews);
    },
    "/admin/news/add": () => {
        printf(addNews);
    },
    "/admin/user": () => {
        printf(user);
    },
});
router.resolve();
