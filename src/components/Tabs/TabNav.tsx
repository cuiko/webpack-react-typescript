import React from 'react'
import classnames from 'classnames'
import { noop } from '@/packages/utils/index'

export interface TabNavP {
  classPrefix: string
  panels: any,
  activeIndex: number
  onTabClick: (index: number) => void
}

export default class TabNav extends React.Component<TabNavP> {
  static defaultProps = {
    onTabClick: noop,
  }
  constructor(props: TabNavP) {
    super(props)
  }

  getTabs() {
    const { panels, classPrefix, activeIndex } = this.props

    return React.Children.map(panels, (child) => {
      if (!child) return

      const order = parseInt(child.props.order, 10)

      let classes = classnames({
        [`${classPrefix}-tab`]: true,
        [`${classPrefix}-active`]: activeIndex === order,
        [`${classPrefix}-disabled`]: child.props.disabled,
      })

      let events = {}
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order)
        }
      }

      const ref: {
        ref?: string
      } = {}
      if (activeIndex === order) {
        ref.ref = 'activeTab'
      }

      return (
        <li
          role="tab" 
          aria-selected={activeIndex === order ? 'true' : 'false'}
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          {...events}
          className={classes}
          key={order}
          {...ref}
        >
          {child.props.tab}
        </li>
      )
    })
  }

  render() {
    const { classPrefix } = this.props

    const rootClasses = classnames({
      [`${classPrefix}-bar`]: true
    })
    const navClasses = classnames({
      [`${classPrefix}-nav`]: true
    })

    return (
      <div className={rootClasses} role="tab nav">
        <ul className={navClasses}>
          {this.getTabs()}
        </ul>
      </div>
    )
  }
}