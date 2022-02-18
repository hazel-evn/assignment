const SignInPage = {
    render() {
        return `
                <div
                class=" container min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                >
                <div class="max-w-md w-full space-y-8">
                <div>
                    <img
                    class="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Đăng nhập
                    </h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <p class="my-2 text-sm">Tên tài khoản</p>
                        <label for="email-address" class="sr-only">Tên tài khoản</label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
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
                    </div>
        
                    <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                        Nhớ tài khoản
                        </label>
                    </div>
                    <div class="text-sm">
                        <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                        Quên mật khẩu?
                        </a>
                    </div>
                    </div>
                    <div>
                    <button
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Đăng nhập
                    </button>
                    </div>
                    <div>
                        <p class="text-center my-2 text-sm">Bạn chưa có tài khoản <a href="/#signup" class="text-blue-700 normal-case">Đăng ký ngay</a></p>
                    </div>
                </form>
                </div>
            </div>
        `;
    },
};
export default SignInPage;
