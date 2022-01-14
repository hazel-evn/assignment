import Navigo from "navigo";
import Headers from "./components/header";
import Footer from "./components/footer";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
import DetailPage from "./page/detailpage";

const router = new Navigo("/", { linksSelector: "a" });
const printf = (content) => {
    document.querySelector("#header").innerHTML = Headers.render();
    document.querySelector("#products").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
// Nếu user truy cập vào đường dẫn thì user sẽ làm cái việc gì đấy
    "/": () => {
        printf(HomePage.render());
        // console.log(HomePage);
    },
    "/about": () => {
        printf(AboutPage.render());
    },
    "/product": () => {
        printf(ProductPage.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        printf(DetailPage.render(id));
    },
});
router.resolve();
