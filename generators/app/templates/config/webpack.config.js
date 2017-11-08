let Path = require("path");
let Process = require("process");
let webpack = require("webpack");
let yargs = require("yargs");

let rootPath = Process.cwd();
let distDir = "./dist";
let srcDir = ".";

let options = yargs
    .alias("p", "optimize-minimize")
    .argv;

let config = {
    entry: {
        bundle: Path.resolve(srcDir, "./src/index.tsx"),
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                query: {
                    mimetype: "image/png",
                },
            },
            {
                test: /\.ts(x)?$/,
                loader: "babel-loader!ts-loader",
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: Path.resolve(distDir),
    },
    plugins: [
        // // new CommonsChunkPlugin('common.js'),
        // new DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".less"],
    },
};

if (!options.optimizeMinimize) {
    config.devtool = "source-map";
}

module.exports = config;
