import React from 'react'

const Message = React.createClass({
  render() {
    return (
      <div>二级菜单 {this.props.params.id} </div>
    )
  }
});
//主页
module.exports = Message;