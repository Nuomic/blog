// src/home/Controller
import Controller from 'react-imvc/controller' // 加载 react-imvc controller 控制器
import View from './View'
export default class Home extends Controller { // 继承它，编写你的控制器逻辑
    View = View // 将 react 组件赋值给控制器的 View 属性
}
