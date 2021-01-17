module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|jepg|gif|svg)/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'static', // /.next save path
                        publicPath: '_next/static' // output load path
                    },
                },
            ],
        })

        return config
    },
}