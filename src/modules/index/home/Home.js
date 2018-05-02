import React, {Component} from 'react';

import './Home.scss'
import banner from '~/assets/img/index/home/banner_one.png'
import banner_left from '~/assets/img/index/home/banner_left_one.png'
import banner_right from '~/assets/img/index/home/banner_right_one.png'
import solution_icon1 from '~/assets/img/index/home/solution_icon1.png'
import solution_icon2 from '~/assets/img/index/home/solution_icon2.png'
import solution_icon3 from '~/assets/img/index/home/solution_icon3.png'
import dividingLine from '~/assets/img/index/home/dividingLine.png'
import partner1 from '~/assets/img/index/home/partner1_hover.png'
import partner2 from '~/assets/img/index/home/partner2_hover.png'
import partner3 from '~/assets/img/index/home/partner3_hover.png'
import partner4 from '~/assets/img/index/home/partner4_hover.png'
import partner5 from '~/assets/img/index/home/partner5_hover.png'
import partner6 from '~/assets/img/index/home/partner6_hover.png'
import partner7 from '~/assets/img/index/home/partner7_hover.png'
import partner8 from '~/assets/img/index/home/partner8_hover.png'

import {new_getTableData} from '../../../api/getData'

class Home extends Component {
    constructor(props) {
        super(props);
        // 执行时间：组件被加载前最先调用，并且仅调用一次
        // 作用：定义状态机变量
        // 注意：第一个语句必须是super（props）
        this.state = {date: new Date(),tableData: []};
        this.myRef = React.createRef();
    }
    async getTableData() {
        let data = await new_getTableData();
        this.setState({tableData: data.data});
        console.log(this.state.tableData);
    }
    componentWillMount(){
        console.log('组件即将渲染');
        // 执行时间：组件初始渲染（render()被调用前）前调用，并且仅调用一次
        // 作用：如果在这个函数中调用setState改变某些状态机，react会等待setState完成后再渲染组件
        // 注意：子组件也有componentWillMount函数，在父组件的该函数调用后再被调用
        this.getTableData();
    }
    render() {
        // 执行时间：componentWillMount之后，componentDidMount之前，
        // 作用：渲染挂载组件
        // 触发条件：（1）初始化加载页面（2）状态机改变setState ( 3 ) 接收到新的props（父组件更新）
        // 注意：组件所必不可少的核心函数；不能在该函数中修改状态机state
        return (
            <div className="home" ref={this.myRef}>
                <div className="banner" style={{background: 'url(' + banner + ') no-repeat center'}}>
                    <ul className="commonWidth clear">
                        <li className="fl">
                            <div className="banner_left imgContainer">
                                <img src={banner_left} alt=""/>
                            </div>
                        </li>
                        <li className="fr">
                            <div className="banner_right imgContainer">
                                <img src={banner_right} alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="product-service">
                    <div className="product-service-bg">
                    </div>
                    <div className="product-service-list commonWidth">
                        <header className="title">
                            <h1>产品服务</h1>
                            <h2>Product&nbsp;Service</h2>
                        </header>
                        <ul className="clear">
                            <li className="fl">
                                <div>
                                </div>
                                <h1>敏感数据与免泄漏系统</h1>
                                <h3>
                                </h3>
                                <h2>敏感信息自动识别，信息分级、分类管理，机器深度学习，自动检索敏感信息增量，保护企业隐私，实现数据全局追踪</h2>
                                <button type="button">查看详情</button>
                            </li>
                            <li className="fl">
                                <div>
                                </div>
                                <h1>数字水印系统</h1>
                                <h3>
                                </h3>
                                <h2>支持多样化数据类型，跟踪数据流通轨迹，数字化标记，具备数据源可追溯性。</h2>
                                <button type="button">查看详情</button>
                            </li>
                            <li className="fl current">
                                <div>
                                </div>
                                <h1>RayShield</h1>
                                <h3>
                                </h3>
                                <h2>实现文件加密保护；安全流通基础上；进行权限细分；权限可控（授予、回收等特性）。</h2>
                                <button type="button">查看详情</button>
                            </li>
                            <li className="fl">
                                <div>
                                </div>
                                <h1>大数据安全网关</h1>
                                <h3>
                                </h3>
                                <h2>平台包含安全平台用户管理系统、认证授权管控系统、安全访问审计系统、敏感信息防护系统四大模块，针对Hadoop平台网络安全、服务器安全、应用安全、数据安全构建综合性共享生态。</h2>
                                <button type="button">查看详情</button>
                            </li>
                            <li className="fl">
                                <div>
                                </div>
                                <h1>数据资产防护系统</h1>
                                <h3>
                                </h3>
                                <h2>系统从访问身份、权限范围、预置策略多维度进行审计，综合评估用户行为、潜在风险，实现数据可读、可编辑、风险预知、危险拦截，保障数据存储与访问安全。</h2>
                                <button type="button">查看详情</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="solution">
                    <div className="commonWidth">
                        <header className="title">
                            <h1>解决方案</h1>
                            <h2>Solution</h2>
                        </header>
                    </div>
                    <section>
                        <ul className="clear commonWidth">
                            <li className="fl">
                                <div>
                                    <img src={solution_icon1} alt=""/>
                                    <h1>
                                    </h1>
                                    <h2>政务数据服务体系</h2>
                                    <p>提供政务数据共享与服务，以大数据计算为核心，通过对数据采集、存储、加工，服务政务，提高政府精准治理能力和决策力。</p>
                                    <button type="button">查看详情</button>
                                </div>
                            </li>
                            <li className="fl">
                                <div>
                                    <img src={solution_icon2} alt=""/>
                                    <h1>
                                    </h1>
                                    <h2>数据安全生命周期</h2>
                                    <p>融合数据生产、数据流通、数据使用、数据销毁，构建数据安全体系：数据源保护，数据流通追踪定位，数据合规使用，数据增值服务，结束生命。</p>
                                    <button type="button">查看详情</button>
                                </div>
                            </li>
                            <li className="fl">
                                <div>
                                    <img src={solution_icon3} alt=""/>
                                    <h1>
                                    </h1>
                                    <h2>大数据安全生态</h2>
                                    <p>建立安全合规技术体系，数据共享生态，保护大数据权属性、保密性、完整性、可用性、可追溯及敏感度管理， 实现大数据“可管、可控、可信”。</p>
                                    <button type="button">查看详情</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="dividingLine imgContainer">
                    <img src={dividingLine} alt=""/>
                </div>
                <div className="partners commonWidth">
                    <header className="title">
                        <h1>合作伙伴</h1>
                        <h2>Cooperation&nbsp;Partner</h2>
                    </header>
                    <ul className="clear">
                        <li className="fl"><img src={partner1} alt=""/></li>
                        <li className="fl"><img src={partner2} alt=""/></li>
                        <li className="fl"><img src={partner3} alt=""/></li>
                        <li className="fl"><img src={partner4} alt=""/></li>
                        <li className="fl"><img src={partner5} alt=""/></li>
                        <li className="fl"><img src={partner6} alt=""/></li>
                        <li className="fl"><img src={partner7} alt=""/></li>
                        <li className="fl"><img src={partner8} alt=""/></li>
                    </ul>
                </div>
            </div>
        );
    }
    // 路由离开的钩子函数
    routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        console.log(nextLocation);
        console.log(this.state.date);
        return '确认离开？';
    }
    componentDidMount() {
        console.log('组件已被渲染');
        // setRouteLeaveHook方法为Leave钩子指定routerWillLeave函数
        // 该方法如果返回false，将阻止路由的切换，否则就返回一个字符串，提示用户决定是否要切换。
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this))
        //this.setState({date: new Date()});
        // 执行时间：render之后被调用，并且仅调用一次
        // 作用：渲染挂载组件；可以使用refs（备注：React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中。这也就是说对render()返回的组件进行一个标记，可以方便的定位的这个组件实例。）
        // 注意：子组件也有该函数，在父组件的该函数调用前被调用；如果在该函数中修改某些状态机state，会重新渲染render组件，所以有些组件为减少渲染次数，可以将某些修改状态机的操作放在componentWillMount函数中；如果需要再程序启动显示初始化页面后从网路获取数据，可以将网络请求代码放在该函数中
    }
    componentWillReceiveProps(nextProps) {
        // 执行时间：组件渲染后，当组件接收到新的props时被调用；这个函数接收一个object参数（新的props）；props是父组件传递给子组件的。父组件发生render的时候子组件就会调用
        // 作用：渲染挂载组件；可以使用refs（备注：React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中。这也就是说对render()返回的组件进行一个标记，可以方便的定位的这个组件实例。）
        // 注意：react初次渲染时，该函数并不会被触发，因此有时该函数需要和componentWillMount或componentDidMount组合使用;使用该函数一定要加nextProps参数，首次使用了解的可以先打印结果（console.log(nextProps)）
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true;
        // 执行时间：组件挂载后（即执行完render），接收到新的state或props时被调用，即每次执行setstate都会执行该函数，来判断是否重新render组件，默认返回true；接收两个参数：第一个是心的props，第二个是新的state。
        // 作用：如果有些变化不需要重新render组件，可以在该函数中阻拦
        // 注意：该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会
    }
    componentWillUpdate() {
        console.log('组件即将被重新渲染');
        // 执行时间：在接收到新的props 或者 state，重新渲染 之前立刻调用，在初始化渲染的时候该方法不会被调用
        // 作用：为即将发生的重新渲染做一些准备工作
        // 注意：不能再该函数中通过this.setstate再次改变状态机，如果需要，则在componentWillReceiveProps函数中改变
    }
    componentDidUpdate() {
        console.log('组件已将被重新渲染');
        // 执行时间：重新渲染后调用，在初始化渲染的时候该方法不会被调用
        // 作用：使用该方法可以在组件更新之后操作DOM 元素
    }
    componentWillUnmount() {
        console.log('组件即将被卸载');
        // 执行时间：组件被卸载前调用，
        // 作用：在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。
    }
}

export default Home;