import React from 'react'
import * as icons from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import styled from 'styled-components'

export const IconWithText = (props) => {
  const { iconName, text, fontWeight = 'normal' } = props
  return (
    <SContainer>
      {/* React IconsのスタイルをContext経由で指定 */}
      <IconContext.Provider
        value={{ style: { verticalAlign: 'middle', marginRight: '5px' } }}
      >
        <div>{React.createElement(icons[iconName])}</div>
      </IconContext.Provider>
      <SText fontWeight={fontWeight}>{text}</SText>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
`
const SText = styled.div`
  font-weight: ${(props) => props.fontWeight};
`
