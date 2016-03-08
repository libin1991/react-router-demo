import '../css/common.scss';
//import MTUI from './controls/Button.jsx';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router' 
import { browserHistory } from 'react-router'


//menu
const App = React.createClass({
  render() {
    return (
      <div className="menu">
        <h1>App</h1>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于我们</Link></li>
          <li>
              <Link to="/inbox">二级菜单</Link>
              <ul>
                  <li><Link to="/inbox/messages/:1">Inbox-1</Link></li>
                  <li><Link to="/inbox/messages/:2">Inbox-2</Link></li>
                  <li><Link to="/inbox/messages/:3">Inbox-3</Link></li>
              </ul>
          </li>
        </ul>
        
        {/* 内容 */}
        <div className="content">
        	{this.props.children}
        </div>

      </div>
    )
  }
})

//主页
const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
}) 

//关于我们
const About = React.createClass({
  render() {
    return <div>About</div>
  }
})

//测试
const Inbox = React.createClass({
  render() {
    return (
      <div>
        <div>Inbox</div>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

//如果跳转到Message
const Message = React.createClass({
  render() {
    return <div>Message {this.props.params.id} </div>
  }
})

//AMUI
var AMUIReact = require('amazeui-react');
var Button = AMUIReact.Button;
var DateTimeInput = AMUIReact.DateTimeInput;

//渲染
render(
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Dashboard} />
	      <Route path="about" component={About} />
	      <Route path="inbox" component={Inbox}>
	        <Route path="messages/:id" component={Message} />
	      </Route>
	    </Route>
	  </Router>
, $("#header")[0]);