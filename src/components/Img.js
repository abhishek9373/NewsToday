import React, { Component } from 'react';
import Gif from '../Gif.gif'

export default class Img extends Component {
  render() {
    return (
    <div className='text-center' style={{marginTop:"-9vw"}}>
      <img src={Gif} alt="" className='p-5' style={{height:"35vh",width:"35vh" ,marginLeft:"-12vh"}}/>
    </div>
    )
  }
}
