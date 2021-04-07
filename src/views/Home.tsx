import React from 'react'
import Navs from '@/components/Navs/Navs'
import Tabs from '@/components/Tabs/Tabs'
import { __RouterContext } from 'react-router'
const {
  Panel
} = Tabs

interface HomeS {
  activeIndex: number
}

export default class Home extends React.Component<_, HomeS> {

  constructor(props: _) {
    super(props)

    this.state = {
      activeIndex: 0,
    }
  }

  handleChange(e: any) {
    this.setState({
      activeIndex: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Navs></Navs>
        <div className="operator">
          <span>切换 Tab：</span>
          <select value={this.state.activeIndex} onChange={(e) => this.handleChange(e)}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>
        <Tabs activeIndex={this.state.activeIndex} defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
          <Panel order="0" tab={'Tab 1'}>第一个 Tab 里的内容</Panel>
          <Panel order="1" tab={'Tab 2'}>第二个 Tab 里的内容</Panel>
          <Panel order="2" tab={'Tab 3'}>第三个 Tab 里的内容</Panel>
        </Tabs>
      </div>
    )
  }
}