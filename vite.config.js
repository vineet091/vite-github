import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

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
    plugins: [react()],
    // clearScreen: false,
   // envDir: "env", //path to env directory
    envPrefix: "VITE_", // only allows env variable with prefix VITE_
    // logLevel: 'silent', //info, warn, error
    css: {
      devSourcemap: true,
    },
    server: {
      open: 'index.html', //open the browser
      port: 5173 // dev
    },
    // preview: {
    //   port: 8080 // preview
    //   strictPort: true //run only on specific port else throw error //false value will deploy on next available port
    // }
  };
});
