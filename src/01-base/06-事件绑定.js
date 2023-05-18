import React, { Component } from 'react'

export default class APP extends Component {
    a = 100
    handleClick(){
        console.log("click2",this.a)
    }
    handleClick2 = (evt)=>{
        console.log("click3",this.a,evt)
    }
    handleClick3(){
        console.log("click4",this.a)
    }
  render() {
    return (
      <div>
      <input/>
      <button onClick={()=>{
        console.log("click",this.a)
      }}>add</button>
      
      {/*不要加括号，加括号自动执行*/}
       <button onClick={this.handleClick.bind(this)}>add1</button>
       <button onClick={this.handleClick2}>add2</button>
       <button onClick={()=>this.handleClick3()}>add3 推荐，可以传参</button>
      </div>
    )
  }
}


