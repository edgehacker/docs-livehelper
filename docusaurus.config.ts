import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '边缘骇客直播互动助手',
    tagline: '全新直播互动效果抢先体验创新启航',
    favicon: 'img/favicon.ico',
    url: 'https://livehelper.willwaking.com/',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
                hashed: true,
                language: ["en", "zh"],
            }),
            
        ],
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        customCss: "./static/css/custom.css",
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '边缘骇客直播互动助手',
            logo: {
                alt: 'livehelper Logo',
                src: 'https://livehelper.willwaking.com/img/icon.0f219fdf.jpg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '帮助文档',
                },
                { href: 'https://www.bilibili.com/video/BV1Bq421A7Ju/', label: '视频教程（新）', position: 'left' },
                { to: '/blog', label: '边缘骇客博客', position: 'left' },
                { href: 'https://livehelper.willwaking.com/', label: '官方网站', position: 'left' },
                { href: 'https://txc.qq.com/products/511669', label: '反馈空间', position: 'left' },
                {
                    href: 'https://github.com/edgehacker/live-helper',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '使用说明',
                    items: [
                        {
                            label: '帮助文档',
                            to: '/docs/quick_start',
                        },
                        {
                            label: '视频教程（新）',
                            href: 'https://www.bilibili.com/video/BV1Bq421A7Ju/',
                        },
                        {
                            label: '边缘骇客博客',
                            to: '/blog',
                        },
                    ],
                },
                {
                    title: '安装',
                    items: [
                        {
                            label: 'GitHub Releases',
                            href: 'https://github.com/edgehacker/live-helper/releases',
                        },
                        {
                            label: '蓝奏云',
                            href: 'https://edgehacker.lanzn.com/s/livehelper',
                        }
                    ],
                },
                {
                    title: '联系我们',
                    items: [
                        {
                            label: 'QQ 群',
                            href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=aZ-qMrUQkwkIYHSUmhBCeuIJShfw5XU-&authKey=MGLK7O7uUHMJeeoKEuUkb0B3nu29te90l%2FgB%2B83U85X%2BtX6qSJC0UN8%2F1ulENTQJ&noverify=0&group_code=829242770',
                        },
                        {
                            label: '边缘骇客编程实验室',
                            href: 'https://edgehacker.taobao.com/',
                        },
                        {
                            label: 'edgehacker@willwaking.com',
                            href: 'https://mail.qq.com/'
                        }
                    ],
                },
                {
                    title: '其他信息',
                    items: [
                        {
                            label: '边缘骇客直播互动助手官方网站',
                            href: 'https://livehelper.willwaking.com/',
                        },
                        {
                            label: '边缘骇客直播互动助手反馈空间',
                            href: 'https://txc.qq.com/products/511669',
                        },
                        {
                            label: '秒数联盟数学派',
                            href: 'https://www.mslmsxp.com/',
                        },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} 上海预醒网络科技有限公司版权所有 沪ICP备2023032135号-2`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
