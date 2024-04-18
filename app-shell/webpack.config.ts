import { container, DefinePlugin } from 'webpack';
const deps = require('./package.json').dependencies;

// Export một đối tượng chứa cấu hình module
module.exports = {
  // Cấu hình đầu ra của ứng dụng
  output: {
    publicPath: 'http://localhost:4200/',     // Đường dẫn công khai cho các tài nguyên được tải trong ứng dụng
    uniqueName: 'app-shell',
    scriptType: 'text/javascript', // Loại kịch bản sử dụng cho các tệp được tạo ra
  },
  optimization: { // Cấu hình tối ưu hóa
    runtimeChunk: false,
  },
  plugins: [ // Các plugin được sử dụng trong ứng dụng
    new container.ModuleFederationPlugin({ // Plugin Module Federation để chia sẻ modules giữa các ứng dụng
      shared: {
        '@angular/core': { eager: true, singleton: true }, // Chia sẻ Angular Core
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
        vue: {
          eager: true,
          singleton: true,
        },
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom/client': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};
