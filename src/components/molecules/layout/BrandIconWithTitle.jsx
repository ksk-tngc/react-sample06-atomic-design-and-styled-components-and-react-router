import styled from 'styled-components'
import { IconWithText } from '../IconWithText'

export const BrandIconWithTitle = (props) => {
  const { iconName, title } = props
  return (
    <SBrand>
      <IconWithText iconName={iconName} text={title} fontWeight="bold" />
    </SBrand>
  )
}

const SBrand = styled.div`
  font-size: 1.1rem;
  color: #fff;
`
