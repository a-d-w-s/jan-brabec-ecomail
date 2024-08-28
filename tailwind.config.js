/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
    ],
    theme: {
        extend: {
            letterSpacing: {
                'letter-positive-13': '0.13em',
                'letter-negative-2': '-0.02em',
            },
            gridTemplateColumns: {
                'auto-fit-minmax': 'repeat(auto-fit, minmax(320px, 1fr))',
            },
        },
        screens: {
            mobile: "375px",
            tablet: "748px",
            desktop: "1240px",
        },
        colors: {
            'body': '#333',
            'white': '#fff',
            'gray': '#E7E7E7',
            'green': '#024E40',
            'green-light': '#61908E',
            'green-deep': '#7FC109',
            'green-soft': '#AAE8C3',
            'yellow': '#FEE694',
        }
    },
    plugins: [],
}
