import React from 'react'

const Inbox = React.createClass({
  render() {
    return (
      <div>
        {this.props.children || "二级菜单主页"}
      </div>
    )
  }
});
//主页
module.exports = Inbox;