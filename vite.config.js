import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import inspect from "vite-plugin-inspect";
import checker from "vite-plugin-checker";
//import { resolve } from "path";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild);
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "VITE_"); //3rd param is prefix else will load all env variables
  console.log(env);
  if (mode === "production") {
    // do some stuff
    // return {
    //   base: '/vite/'
    // }
  }
  return {
    plugins: [
      react(),
      inspect(), // inspect plugin to see all the changes made by vite in the source code in the browser
      checker({
        //  typescript: true, //  to auto check the typescript build error while compiling source code alternate to npm run tsc
        //  eslint:{
        //   lintCommand : 'eslint "./src/**/*.{js,ts}"' // after installing eslint plugins and adding eslint config file
        //  }
      }),
      ViteImageOptimizer({
        svg: {
          quality: 100
        }
      })
    ],
    resolve: {
      alias: {
        //   '@': path.resolve(__dirname, './src/assets/'), //instead of using import image1 from './src/assets/abc.jpeg' use import image1 from @abc.jpg
      },
    },

     build: {
    //   roleUpOptions: {
    //     input: {
    //       // eslint-disable-next-line no-undef
    //       main: resolve(__dirname, "App.jsx"),
    //       // eslint-disable-next-line no-undef
    //       login: resolve(__dirname, "login/login.jsx"), // if we not specify these vite build only 1 static module i.e main.js and login link in main.js is not clickable as no page is build for login route, works only in multipage 
    //                                                     // application as react is single page so all route will be bundled as one module
    //     },
        //  dependencies: ["collect.js"] //will reduce the bundle size and we can add this package to peer dependencies in package.js
    //   },
        // lib: {
        //   entry: resolve(__dirname, "index.html"), //export application as single lib
        //   name: "pluck",
        //   fileName: "pluck"
        // },
     },
    // clearScreen: false,
    // envDir: "env", //path to env directory
    envPrefix: "VITE_", // only allows env variable with prefix VITE_
    // logLevel: 'silent', //info, warn, error
    css: {
      devSourcemap: true,
    },
    server: {
     // open: "index.html", //open the browser
      port: 5173, // dev
      headers: {
        a: "b"
      },
      proxy: {
       //  '/products': 'https://dummyjson.com',
        '/api/': {
          target: 'https://dummyjson.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      },
    },
    // preview: {
    //   port: 8080 // preview
    //   strictPort: true //run only on specific port else throw error //false value will deploy on next available port
    // }
  };
});
