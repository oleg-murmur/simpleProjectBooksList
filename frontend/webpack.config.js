import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path' 
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import OptimizeCssAssetsPlugin  from 'optimize-css-assets-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

let __dirname = path.resolve(path.dirname(''))

export default {
    entry: './src/bookPage/book.js',
    output: {
        filename: 'bundle.bookPage.[chunkhash].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 1234
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'bookPage.html',
            template: path.resolve(__dirname,'src','bookPage', 'book.html')
        }),
        // new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'style.css'
        // }),
        // new OptimizeCssAssetsPlugin()
    ]
}