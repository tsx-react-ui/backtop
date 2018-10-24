/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Backtop
 * Desc The backtop component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import './index.scss';
/**
 * @class Backtop
 * @extends React.Component
 * @desc Backtop Component for mobile
 */
interface BacktopProps {
    showHeight: number;
    target: () => HTMLElement;
    className?: string;
    children?: React.ReactNode;
}
interface BacktopStates {
    isShow: boolean;
}
export default class Backtop extends React.Component<BacktopProps, BacktopStates> {
    static defaultProps: {
        showHeight: number;
        target: () => Window;
    };
    targetNode: HTMLElement | Window & {
        scrollTop: number;
    };
    /**
     * @constructor
     */
    constructor(props: BacktopProps);
    throttle(fun: any): void;
    handleScroll(): void;
    scrollToTop(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
