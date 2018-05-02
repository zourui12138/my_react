import React, { Component } from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Index from '../modules/index/Index';
import Home from '../modules/index/home/Home';
import DataAssets from "../modules/index/products/dataAssets/DataAssets";

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // onEnter钩子还可以用来做认证。
    enter() {
        console.log('用户进入');
        console.log(this.state.date);
    }
    leave() {
        console.log('用户离开');
        console.log(this.state.date);
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/index/home" />
                <Route path="/index" component={Index}>
                    <Route path="/index/home" component={Home} onEnter={this.enter.bind(this)} onLeave={this.leave.bind(this)}/>
                    <Route path="/index/dataAssets" component={DataAssets}/>
                </Route>
            </Router>
        );
    }
}