import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        // define: {
        //   __APP_ENV__: env.APP_ENV
        // },
        base: '/', //在 HTTP 请求中预留此文件夹，用于代理 Vite 作为子文件夹时使用。应该以 / 字符开始和结束。
        cors: true, //为开发服务器配置cors 默认启用并允许任何源
        //assetsDir: '/', // 指定生成静态资源的存放路径
        plugins: [react()],
        /*resolve: {
          alias: [
            { find: /^~/, replacement: path.resolve(__dirname, './') },
            { find: '@', replacement: path.resolve(__dirname, 'src') },
          ],
          // alias: {
          //   '~': path.resolve(__dirname, './'), // 根路径
          //   '@': path.resolve(__dirname, 'src') // src 路径
          // }
        },*/
        resolve: {
            alias: {
                '@': '/src/',
                '@components': '/src/components/',
                '@assets': '/src/assets/',
            },
        },
        proxy: {
            // 字符串简写写法
            //'/foo': 'http://localhost:4567',
            // 选项写法
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // 使用 proxy 实例
            // '/api': {
            //   target: 'http://jsonplaceholder.typicode.com',
            //   changeOrigin: true,
            //   configure: (proxy, options) => {
            //     // proxy 是 'http-proxy' 的实例
            //   }
            // },
            // Proxying websockets or socket.io
            '/socket.io': {
                target: 'ws://localhost:3000',
                ws: true
            }
        }
    }
})
