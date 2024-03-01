import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '边缘骇客直播互动助手',
    tagline: '助力每一个主播梦',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://livehelper.willwaking.com/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '边缘骇客直播互动助手',
            logo: {
                alt: 'livehelper Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '说明书',
                },
                { to: '/blog', label: '互动助手博客', position: 'left' },
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
                    title: '文档',
                    items: [
                        {
                            label: '说明书',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: '下载',
                    items: [
                        {
                            label: 'GitHub',
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
                            label: 'QQ群',
                            href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=aZ-qMrUQkwkIYHSUmhBCeuIJShfw5XU-&authKey=MGLK7O7uUHMJeeoKEuUkb0B3nu29te90l%2FgB%2B83U85X%2BtX6qSJC0UN8%2F1ulENTQJ&noverify=0&group_code=829242770',
                        },
                        {
                            label: '淘宝店铺',
                            href: 'https://edgehacker.taobao.com/',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/edgehacker',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: '互动助手博客',
                            to: '/blog',
                        },
                        {
                            label: '数学派',
                            href: 'https://www.mslmsxp.com/',
                        },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} 上海预醒网络科技有限公司版权所有 沪ICP备2023032135号-1`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
