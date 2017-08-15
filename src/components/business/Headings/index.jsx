import './style.scss'
import React from 'react'
import { getHeadings } from 'configs/maps'
import DropDown from 'components/common/DropDown'

export default class Headings extends React.Component {

  render () {

    const { current, onChange, language } = this.props
    const headings = getHeadings(language)

    let currentHeadingIndex = headings.findIndex((item) => item.command === current)
    let caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : language.controls.normal
    let isFirstItemActive = currentHeadingIndex === 0

    return (
      <DropDown
        caption={caption}
        hoverTitle={language.controls.headings}
        arrowActive={isFirstItemActive}
        className={"control-item dropdown headings-dropdown"}
      >
        <ul className="menu">
          {
            headings.map((item, index) => {
              let isActive = current === item.command
              return (
                <li
                  key={index}
                  className={"menu-item" + (isActive ? ' active' : '')}
                  onClick={() => onChange(item.command, item.type)}
                >
                  {item.text}
                </li>
              )
            })
          }
        </ul>
      </DropDown>
    )

  }

}