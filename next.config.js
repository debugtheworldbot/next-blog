module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.png/,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        })

        return config
    },
}