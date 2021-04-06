import React from 'react'
import classnames from 'classnames'

export interface TabPanelP {
  order: string // string numerical
  tab: string | React.ReactNode // tab title
  classPrefix?: string
  disabled?: boolean
  isActive?: boolean
  className?: string
}

const TabPanel: React.FC<TabPanelP> = (props) => {
  const { className, classPrefix = 'tabs', children, isActive } = props

  const classes = classnames({
    className,
    [`${classPrefix}-panel`]: true,
    [`${classPrefix}-active`]: isActive
  })

  return (
    <div
      role="tab panel" 
      className={classes}
      aria-hidden={!isActive}
    >
      {children}
    </div>
  )
}
export default TabPanel