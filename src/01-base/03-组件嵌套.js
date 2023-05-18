import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>child</div>
    }
}

class Navibar extends Component{
    render(){
        return(
        <div>navibar
            <Child></Child>
        </div>)
    }
}

function Swiper(){
    return <div>Swiper</div>
}

const Tabbar = ()=><div>Tabbar</div>



export default class App extends Component {
  render() {
    return (<div>
    <Navibar></Navibar>
    <Swiper></Swiper> 
    <Tabbar></Tabbar>
    </div>
    )
  }
}

