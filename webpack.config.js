const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, _argv) => {
    const mode = process.env.NODE_ENV || 'development';


    return {
        mode: mode,
        entry: path.join(__dirname, 'src/index.tsx'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.tsx', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: './public/index.html'})
        ],
        devServer: {
            hot: true,
            port: 3000,
            open: true
        },
        devtool: mode === 'development' ? 'source-map' : false,
    }
}