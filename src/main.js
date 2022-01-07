import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
// Nếu user truy cập vào đường dẫn thì user sẽ làm cái việc gì đấy
    "/": () => console.log("home page"),
    "/tuyensinh": () => console.log("about page"),
    "/chuongtrinhdaotao": () => console.log("about page"),
    "/gocsinhvien": () => console.log("about page"),
    "/tuyendung": () => console.log("about page"),
});
router.resolve();
