const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.sass('src/app.scss', 'dist')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })