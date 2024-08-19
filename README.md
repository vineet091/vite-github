# React + Vite + Netlify + Vercel

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Steps -
1) npm install vite -g
2) npm create vite .
3) npm install
4) npm run dev // to run development mode
5) npm build // to run in production mode
6) npm run preview // to run production build
7) npm install -d tailwindcss postcss autoprefixer // to insatll tailwind
8) npx tailwindcss init -p
9) add tailwind dependecies to main css file
10) add .env.development .env.production


Steps to deploy to github pages 
1) Add  base: "/vite-github/", to vite.config.js to setup baseurl.
2) Go to project settings
3) Select githup pages
4) Add actions to deploy
5) make changes to static.yaml file // add steps to build and deploy
6) Goto actions trigger action and goto https://vineet091.github.io/vite-github/

Steps to Deploy to Netlify
1) Goto vite-config file remove base path line i.e base: "/vite-github/" //if it is preseont
2) install netlify-cli -g
3) netlify login
4) netlify init
5) give deploy command and deploy folder
6) Auto trigger the deployment
7) Goto netlify website and open deployed link

Steps to deploy to Vercel
1) Goto vite-config file remove base path line i.e base: "/vite-github/" //if it is preseont
2) login to vercel.com
3) npm install vercel -g
4) vercel
5) follow the cli setup steps
6) deploy the code
7) goto vercel.com and click onto deployed link

