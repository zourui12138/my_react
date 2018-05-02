import React, {Component} from 'react';

import '../Products.scss'
import './DataAssets.scss'
import overview from '~/assets/img/index/products/dataAssets/overview.png'

class DataAssets extends Component {
    render() {
        return (
            <div className="product dataAssets">
                <div className="commonWidth overview">
                    <header className="title">
                        <h1>产品概述</h1>
                        <h2>Product&nbsp;Overview</h2>
                    </header>
                    <section className="clear">
                        <img className="fl" src={overview} alt=""/>
                        <p className="fr">此系统主要服务于企业级数据中心，保护数据防删除、免泄露。系统基于存储、访问进行安全布防，对访问身份、权限范围、预置策略多维度进行审计分析，综合评估用户行为、潜在风险，实现数据可读、可编辑、风险预知、危险拦截，全方位确保数据存储、访问、使用安全。</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default DataAssets;