import React, { useRef } from 'react'
import classnames from 'classnames'
import { noop } from '@/packages/utils/index'

export interface TabNavP {
  classPrefix: string
  panels: any
  activeIndex: number
  onTabClick: (index: number) => void
}

const TabNav: React.FC<TabNavP> = (props) => {
  const {
    classPrefix,
    onTabClick = noop,
    panels,
    activeIndex,
  } = props

  const getTabs = () => {
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
          onClick: onTabClick.bind(null, order)
        }
      }

      const activeTabRef = useRef()
      const ref: {
        ref?: React.MutableRefObject<any>
      } = {}
      if (activeIndex === order) {
        ref.ref = activeTabRef
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

  const rootClasses = classnames({
    [`${classPrefix}-bar`]: true
  })
  const navClasses = classnames({
    [`${classPrefix}-nav`]: true
  })

  return (
    <div className={rootClasses} role="tab nav">
      <ul className={navClasses}>
        {getTabs()}
      </ul>
    </div>
  )
}
export default TabNav