import React, { Component } from 'react'

export default class APP extends Component {
    handleClick(){
        console.log("click2")
    }
  render() {
    return (
      <div>
      <input/>
      <button onClick={()=>{
        console.log("click")
      }}>add</button>
      {/*不要加括号，加括号自动执行*/}
       <button onClick={this.handleClick}>add1</button>
      </div>
    )
  }
}


