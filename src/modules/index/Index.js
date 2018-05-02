import React, {Component} from 'react';
// 引入滚动条
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
// scss
import '~/assets/css/index.scss'
import './Index.scss'
// 组件外部跳转
import { browserHistory } from 'react-router'

import logo from '~/assets/img/index/logo.png'
import QrCode from '~/assets/img/index/QrCode.png'

class Index extends Component {
    constructor(props) {
        super(props);
        // 执行时间：组件被加载前最先调用，并且仅调用一次
        // 作用：定义状态机变量
        // 注意：第一个语句必须是super（props）
        this.state = {date: new Date()};
    }
    callback(arg) {
        console.log(arg);
        console.log(this.state.date);
    }
    render() {
        return (
            <div id="index">
                <header className="header">
                    <div className="commonWidth clear">
                        <img src={logo} alt="" className="fl" onClick={this.callback.bind(this,'大家好才是真的好')}/>
                        <ul className="fr">
                            <li className="fl" onClick={() => browserHistory.push('/index/home')}><h1>首页</h1><h2>Home</h2></li>
                            <li className="fl" onClick={() => browserHistory.push('/index/dataAssets')}><h1>产品服务</h1><h2>Products</h2></li>
                            <li className="fl"><h1>关于我们</h1><h2>About&nbsp;Us</h2></li>
                        </ul>
                    </div>
                </header>
                <PerfectScrollbar className="section">
                    {this.props.children}
                    <footer className="footer">
                        <div className="commonWidth clear">
                            <ul className="fl">
                                <li>迅鳐成都科技有限公司</li>
                                <li>公司网址：www.mrray.cn</li>
                                <li>公司电话：028—87827621</li>
                                <li>数据哨兵研发办公地址：四川省成都市郫都区菁蓉镇大禹东路66号3栋10楼</li>
                                <li>区块链研发办公地址：四川省成都市高新区菁蓉国际广场1栋A区3楼</li>
                                <li>服务咨询邮箱：Service@MrRay.cn</li>
                                <li>简历投递邮箱：hr@mrray.cn</li>
                                <li>Copyright&nbsp;&copy;&nbsp;2015-2035&nbsp;迅鳐成都科技有限公司&nbsp;版权所有&nbsp;蜀ICP备16007868号</li>
                            </ul>
                            <div className="fr">
                                <img src={QrCode} alt=""/>
                                <h1>扫码关注迅鳐公众号</h1>
                            </div>
                        </div>
                    </footer>
                </PerfectScrollbar>
            </div>
        );
    }
}

export default Index;