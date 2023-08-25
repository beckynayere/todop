const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }
            }
        ]
    }
});

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss'),
        require('resolve-url-loader')
    ])
    .options({
        processCssUrls: false, // Disable URL processing in the sass-loader
        postCss: [require('resolve-url-loader')]
    });

