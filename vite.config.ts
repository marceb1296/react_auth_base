import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { resolve } from "path";
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        react(),
        checker( {
            typescript: true
        }),
        dts({
            insertTypesEntry: true,
        })
    ],
    server: {
        open: true,
        port: 3000
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib/index.tsx"),
            name: "react_auth_base",
            fileName: "react_auth_base"
        },
        rollupOptions: {
            external: [
                "react", 
                "react-dom", 
                "@preact/signals-react",
                "@reduxjs/toolkit",
                "react-redux",
                "firebase"
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDom",
                    "@preact/signals-react": "SignalsReact",
                    "@reduxjs/toolkit": "ReduxToolkit",
                    "react-redux": "ReactRedux",
                    "firebase": "Firebase"
                }
            }
        },
    }
})