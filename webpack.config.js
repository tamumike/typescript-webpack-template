module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}