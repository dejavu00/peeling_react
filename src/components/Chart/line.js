import React, { Component } from 'react'
import config from './config'

/**
 * 说明：第一个import echarts是必须的
 * 第二个是引入的具体的一个图表类型 （可选）
 * 第三个是表的title(可选)
 */
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'

export class PieReact extends Component {
    /**
     * 初始化id id是随机生成的一串唯一的字符串
     */
    constructor(props) {
        super(props)
        let id = ( '_' + Math.random()).replace('.', '_');
        this.state = {
            pieId : 'pie' + id
        }
    }
    componentDidMount() {
        /**
         * 在这里去调用生成图表的方法是因为，在组件加载后生成
         * dom节点，这个时候canvas才能根据id去绘制图表
         * 在这里去写了一个setTimeout修改了其中的一些数据，来
         * 测试图表的刷新，是否刷新了，后期大家可能是定期去某
         * 接口中获取数据，方法同理
         */
        this.initPie(this.state.pieId);
        setTimeout(()=>{
            this.initPie(this.state.pieId);
        }, 1000*5)
    }
    componentDidUpdate() {
        this.initPie()
    }
    /**
     * 生成图表，主要做了一个判断，因为如果不去判断dom有没有生成，
     * 在后面如果定期去更新图表，每次生成一个dom节点会导致浏览器
     * 占用的cpu和内存非常高，踩过坑。
     * 这里的config就是引入的配置文件中的config,文件头部会有说明
     */
    initPie(id) {
        let myChart = echarts.getInstanceByDom(document.getElementById(id));
        if( myChart === undefined){
            myChart = echarts.init(document.getElementById(id));
        }
        myChart.setOption(config)
    }
    render() {
        return (
            <div>
                <div id={this.state.pieId} style={{width: '500px', height: '500px'}}/>
            </div>
        )
    }
}
export default PieReact

