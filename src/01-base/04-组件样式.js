import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  render() {
    var myname = "guodonghan"
    var obj = {
        //background:"yellow"
        backgroundColor:"yellow",
        fontSize:"30px"

    }
    return (
      <div>{myname}
      <li>{10+20}-{myname}</li>
      <li>{10>20?'aaa':'bbb'}</li>
      <li style={obj}>hello react</li>
      <div className='active'>11111111111111111111111111111111111111111</div>
      <div id='color'>11111111111111111111111111111111111111111</div>
      <label htmlFor='username'>用户名: </label>
      <input type='text' id="username"/>
      </div>
    )
  }
}
