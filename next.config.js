module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.png/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static',
                        publicPath: '_next/static'
                    },
                },
            ],
        })

        return config
    },
}