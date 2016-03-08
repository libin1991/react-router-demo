import '../css/common.scss';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router' 
import { browserHistory } from 'react-router'

//路由模块引入
import Dashboard from './pages/index/index';
import About from './pages/about/index';
import Inbox from './pages/test/index';
import Message from './pages/test/index-messages';

//menu
const App = React.createClass({
  render() {
    return (
      <div className="menu">
        <h1>React-router Demo</h1>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于我们</Link></li>
          <li>
              <Link to="/inbox">二级菜单</Link>
              <ul className="sub-menu">
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