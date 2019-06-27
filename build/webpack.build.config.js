const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD settings gonna be here
    mode: 'production',
    plugins: [
        new ImageminPlugin(
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                optipng: {
                    optimizationLevel: 9
                },
                jpegtran: {progressive: true},
            }
        )
    ]
});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})
