import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img className={styles.logo} src={require('@site/static/img/logo.png').default} alt="" />
                <Heading as="h1" className={styles.header}>
                    {siteConfig.title}
                </Heading>
                <p className={styles.tip}>{siteConfig.tagline}</p>
                <div className={styles.buttonBox}>
                    <Link
                        className={styles.enterButton}
                        to="/docs/quick_start">
                        帮助文档
                    </Link>
                    <Link
                        className={styles.enterButton}
                        href="https://www.bilibili.com/video/BV1Bq421A7Ju/">
                        视频教程
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={'帮助文档'}
            description="边缘骇客直播互动助手">
            <HomepageHeader  />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
