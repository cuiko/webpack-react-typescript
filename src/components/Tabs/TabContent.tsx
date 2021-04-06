import React from 'react'
import classnames from 'classnames'

export interface TabContentP {
  classPrefix: string
  panels: any
  activeIndex: number
}

const TabContent: React.FC<TabContentP> = (props) => {
  const { classPrefix, activeIndex, panels } = props

  const getTabPanels = () => {
    return React.Children.map(panels, (child) => {
      if (!child) return

      const order = parseInt(child.props.order, 10)
      const isActive = activeIndex === order

      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tab-panel-${order}`,
      })
    })
  }

  const classes = classnames({
    [`${classPrefix}-content`]: true,
  })

  return <div className={classes}>{getTabPanels()}</div>
}

export default TabContent
