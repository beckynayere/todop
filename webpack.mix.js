// const mix = require('laravel-mix');

// Dynamic import to load the webpack configuration
// import('./webpack.mix.cjs').then(config => {
    /*
    |--------------------------------------------------------------------------
    | Mix Asset Management
    |--------------------------------------------------------------------------
    |
    | Mix provides a clean, fluent API for defining some Webpack build steps
    | for your Laravel application. By default, we are compiling the Sass
    | file for the application as well as bundling up all the JS files.
    |
    */

    // Use the loaded config object to configure Mix
//     mix.js('resources/js/app.js', 'public/js').vue()
//         .sass('resources/sass/app.scss', 'public/css')
//         .sourceMaps();
// });

const mix = require('laravel-mix');
const config = require('./webpack.mix.cjs');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();