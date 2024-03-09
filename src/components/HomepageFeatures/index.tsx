import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '兼容性',
        Svg: require('@site/static/img/mountain.svg').default,
        description: (
            <span>
                兼容大部分主流直播平台
            </span>
        ),
    },
    {
        title: '玩法设置可视化',
        Svg: require('@site/static/img/tree.svg').default,
        description: (
            <span>
                使用流程树带来完全自定义、完全可视化的玩法设置
            </span>
        ),
    },
    {
        title: 'VUE3 提供驱动',
        Svg: require('@site/static/img/vue.svg').default,
        description: (
            <span>
                使用 VUE3 构建应用响应快速、执行高效
            </span>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
