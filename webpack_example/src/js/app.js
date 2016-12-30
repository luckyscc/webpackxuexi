// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello.js'

// console.log('我就用console')
// console.log('我就用console')

ReactDOM.render(
    <div>
       <Hello/>
    </div>,
    document.getElementById('app')
)