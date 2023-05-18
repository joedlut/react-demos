import React, { Component } from 'react'

export default class App extends Component {
    state ={
        list:['1111','2222','3333','4444','5555']
    }
  render() {
    //var newlist = this.state.list.map(item=><li>{item}</li>)
    return (
      <div>
        <ul>
           {
              this.state.list.map(item=>
              <li key={item}>{item}</li>)
           }
        </ul>
      </div>
    )
  }
}
