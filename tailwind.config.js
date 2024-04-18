module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                gray: '#7d7d7d',
                'medium-gray': '#ebebeb',
                'light-gray': '#F9F9F9',
            },
            fontFamily: {
                karla: ['Karla', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
