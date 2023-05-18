import React, { Component } from 'react'

export default class APP extends Component {
    a = 100
    myref = React.createRef()
    handleClick1(){
        console.log("click1",this.myref.current.value)
    }

    handleClick2 = ()=>{
        console.log("click2",this.myref.current.value)
    }
    
  render() {
    return (
      <div>
      <input ref="mytext"/>
     
      <button onClick={()=>{
        console.log("click",this.refs.mytext.value)
      }}>add</button>

      <input ref={this.myref}/>

      <button onClick={()=>{
        console.log("click1",this.myref.current.value)
      }}>add1</button>

       <input ref={this.myref}/>
       <button onClick={this.handleClick1.bind(this)}>add2</button>

       <input ref={this.myref}/>
       <button onClick={this.handleClick2}>add3</button>
      
      </div>
    )
  }
}


