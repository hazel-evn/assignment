import { signup } from "../api/user";

const SignUpPage = {
    render() {
        return /* html */`
                <div
                class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                >
                <div class="max-w-md w-full space-y-8">
                <div>
                    <img
                    class="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Đăng ký
                    </h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST" id="formSignup">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <p class="my-2 text-sm">Email</p>
                        <label for="email-address" class="sr-only">Email</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Nhập email"
                        />
                    </div>
                    <div>
                        <p class="my-2 text-sm">Tên tài khoản</p>
                        <label for="email-address" class="sr-only">Tên tài khoản</label>
                        <input
                        id="username"
                        name="username"
                        type="text"
                        autocomplete="email"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Nhập tài khoản"
                        />
                    </div>
                    <div>
                        <p class="my-2 text-sm">Mật khẩu</p>
                        <label for="password" class="sr-only">Password</label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Đăng ký
                    </button>
                    <div>
                        <p class="my-2 text-sm text-center">Bạn đã có tài khoản <a href="/#signin" class="text-blue-700 normal-case">Đăng nhập ngay</a></p>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                email: document.querySelector("#email").value,
                username: document.querySelector("#username").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default SignUpPage;
