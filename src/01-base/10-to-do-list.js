import React, { Component } from 'react'
import './css/01-index.css'

export default class APP extends Component {
    a = 100
    state = {
        //list:['sss','dfdsfs','golang','perl']
        list :[
            {
                id:1,
                mytext:'golang'
            },
            {
                id:2,
                mytext:'perl'
            },
            {
                id:3,
                mytext:'rust'
            },
        ]
    }
    myref = React.createRef()

    handleClick2 = ()=>{

        //this.state.list.push(this.myref.current.value)
        //this.setState({
        //    list: this.state.list
        //})
        //不建议使用这种方式，会修改组件的状态
        let newlist = [...this.state.list]
        newlist.push({
            id:newlist.length+1,
            mytext:this.myref.current.value
        })
        this.setState(
            {list:newlist}
        )
        this.myref.current.value = ""
        
    }
   handleDelete(index){
        console.log('delete',index)
        let newlist = this.state.list.concat()
        newlist.splice(index,1)
        this.setState(
            {list:newlist}
        )
   } 
  render() {
    return (
    
      <div>
       <input ref={this.myref}/>
       <button onClick={this.handleClick2}>add3</button>
       <ul>
        {
            this.state.list.map((item,index)=>
                <li key={item.id}>{item.mytext}
                <button onClick={()=>this.handleDelete(index)}>del</button></li>)
        }
       </ul>
      {/*{this.state.list.length==0?<div>暂无代办事项</div>:null}*/}
      {/*{this.state.list.length==0 && <div>暂无代办事项</div>}*/}
      <div className={this.state.list.length==0?'':'hidden'}>暂无代办事项</div>
      <span dangerouslySetInnerHTML={
        {
        __html:'<b>guodonghan</b>'
        }
      }></span> 
      </div>
    )
  }
}


