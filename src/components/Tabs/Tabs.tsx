
import React, { useState, useEffect } from 'react'
import './styles.scss'
import classnames from 'classnames'
import {
  noop,
} from '@/packages/utils/index'

import TabPanel from './TabPanel'
import TabNav from './TabNav'
import TabContent from './TabContent'

export interface TabsP {
  defaultActiveIndex?: number
  activeIndex?: number
  classPrefix?: string
  className?: string
  onchange?: (
    indexInfo: {
      activeIndex: number
      prevIndex: number
    }
  ) => void
}
export interface TabsS {
  activeIndex: number
  prevIndex: number
}

interface TabsI extends React.FC<TabsP> {
  Panel: typeof TabPanel
}

const Tabs: TabsI = (props) => {
  const {
    classPrefix = 'tabs',
    onchange = noop,
    children,
    className,
  } = props

  const [activeIndex, setActiveIndex] = useState(0)
  // init
  useEffect(() => {
    if ('defaultActiveIndex' in props) {
      setActiveIndex(props.defaultActiveIndex!)
    } else if ('activeIndex' in props) {
      setActiveIndex(props.activeIndex!)
    }
  }, [])
  // listen props
  useEffect(() => {
    if ('activeIndex' in props) {
      // may be string
      setActiveIndex(Number(props.activeIndex!))
    }
  }, [props])

  const [prevIndex, setPrevIndex] = useState(activeIndex)

  const handleTabClick = (ai: number) => {
    if (
      activeIndex !== ai &&
      'defaultActiveIndex' in props
    ) {
      setPrevIndex(activeIndex)
      setActiveIndex(ai)
    }

    onchange({
      activeIndex,
      prevIndex,
    })
  }

  const renderTabNav = () => (
    <TabNav
      onTabClick={handleTabClick}
      classPrefix={classPrefix}
      activeIndex={activeIndex}
      panels={children}
    />
  )

  const renderTabContent = () => (
    <TabContent
      classPrefix={classPrefix}
      activeIndex={activeIndex}
      panels={children}
    />
  )

  const classes = classnames(
    className,
  )

  return (
    <div className={classes}>
      {renderTabNav()}
      {renderTabContent()}
    </div>
  )
}

Tabs.Panel = TabPanel

export default Tabs