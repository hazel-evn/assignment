const Headers = {
    render() {
        return `
        <header class="header">
            <div class="header_logo">
                <a href="/#">
                <img src="../src/images/logo_black.png" alt="" height="100">
                </a>
            </div>
            <div class="header_menu">
                <ul>
                <li><a href="/#">home</a></li>
                <li><a href="/#about">product</a></li>
                <li><a href="/#product">Blogs</a></li>
                <li><a href="/#contact">contact</a></li>
                </ul>
            </div>
            <div class="header_auth">
                <span><a href="/#signin"><ion-icon name="person-outline"></ion-icon></a></span>
                <span><a href="/#cart"><ion-icon name="cart-outline"></ion-icon></a></span> 
            </div>
        </header>
        `;
    },
};
export default Headers;
