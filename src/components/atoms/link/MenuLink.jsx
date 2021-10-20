import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuLink = (props) => {
  const { children, to } = props
  return (
    <SLink to={to}>
      <SLabel>{children}</SLabel>
    </SLink>
  )
}

const SLink = styled(Link)`
  text-decoration: none;
  /* background: #664738; */
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`
const SLabel = styled.div`
  display: flex;
  align-items: center;
`
