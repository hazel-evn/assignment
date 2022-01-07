import menu from "./menu";
import news from "./data";

const showNews = () => {
    const newsElement = document.getElementById("products");
    if (newsElement) {
        const result = news.map((item) => `
            <div class="border shadow rounded p-4">
            <a href="">
                <img
                src="${item.img}"
                alt=""
                class="w-full"
                />
            </a>
            <h3 class="my-3">
                <a href="" class="text-orange-500 font-semibold">${item.name}</a>
            </h3>
            <p class="text-xs">
                ${item.desc}
            </p>
            </div>
        `).join("");
        newsElement.innerHTML = result;
    }
};
showNews();
const showMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        const result2 = menu.map((item2) => `
                <li><a href="/" class="transition duration-200 ease-in-out block p-1 hover:text-white">${item2}</a></li>
            `).join("");
        menuElement.innerHTML = result2;
    }
};
showMenu();
