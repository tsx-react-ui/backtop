/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Backtop
 * Desc The backtop component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import classNames from 'classnames';
import './index.scss';
export default class Backtop extends React.Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.throttle = this.throttle.bind(this);
    }
    // 节流函数
    throttle(fun) {
        fun.tid && clearTimeout(fun.tid);
        fun.tid = setTimeout(() => fun.call(), 100);
    }
    //处理scroll事件
    handleScroll() {
        const { showHeight } = this.props, targetNode = this.targetNode, scrollHeight = targetNode !== window ? targetNode.scrollTop : document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({
            isShow: scrollHeight >= showHeight
        });
    }
    //滚动到顶部
    scrollToTop() {
        const targetNode = this.targetNode;
        targetNode !== window ? targetNode.scrollTop = 0 : document.documentElement && (document.documentElement.scrollTop = 0) || (document.body.scrollTop = 0);
        this.setState({
            isShow: false
        });
    }
    componentDidMount() {
        this.targetNode = this.props.target();
        //加载页面后先判断一下是否显示“滚回顶部”icon 防止用户设置进入页面时向下滚动一定距离的情况
        this.handleScroll();
        this.targetNode.addEventListener('scroll', () => this.throttle(this.handleScroll));
    }
    componentWillUnmount() {
        this.targetNode.removeEventListener('scroll', () => this.throttle(this.handleScroll));
    }
    render() {
        const { isShow } = this.state, { className, children } = this.props, cls = classNames('back-top', className, { 'hidden': !isShow });
        return (React.createElement("div", { className: cls, onClick: this.scrollToTop }, children || React.createElement("i", { className: "back-top-icon" })));
    }
}
Backtop.defaultProps = {
    showHeight: 200,
    target: () => window
};
//# sourceMappingURL=index.js.map