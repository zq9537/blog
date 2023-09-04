import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import sidebar from "./sidebar.js";
import { resolve } from "path";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    title: "博客",
    description: "慢慢来，慢慢学！",
    base: "/", // github仓库名
    lang: "zh-CN",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    markdown: {
        lineNumbers: true,
    },
    theme: hopeTheme({
        favicon: "/images/logo.jpeg",
        sidebar: sidebar,
        navbar: [
            {
                text: "面试",
                link: "/interview",
            },
        ],
        print: false,
        pure: true,
        repo: "zq9537/blog",
        docsDir: "docs",
        plugins: {
            activeHeaderLinks: true,
            nprogress: true,
        },
        lastUpdated: false,
        breadcrumb: false,
        pageInfo: false,
        nextLinks: false,
        prevLinks: false,
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: "G-7M1XFXG9LR",
            debug: true,
        }),
    ],
    bundler: viteBundler({
        viteOptions: {
            resolve: {
                alias: {
                    "@": resolve(__dirname, "docs"),
                },
            },
        },
        vuePluginOptions: {},
    }),
});
