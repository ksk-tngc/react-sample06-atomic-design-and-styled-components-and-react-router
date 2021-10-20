import styled from 'styled-components'
import { MenuLink } from '../../atoms/link/MenuLink'
import { IconWithText } from '../../molecules/IconWithText'
import { BrandIconWithTitle } from '../../molecules/layout/BrandIconWithTitle'

export const Header = () => {
  return (
    <SHeader>
      <BrandIconWithTitle
        iconName="BsEmojiSmile"
        title="Atomic Design Sample"
      />
      <SNav>
        <MenuLink to="/">
          <IconWithText iconName="BsHouse" text="Home" />
        </MenuLink>
        <MenuLink to="/users">
          <IconWithText iconName="BsPeople" text="Users" />
        </MenuLink>
      </SNav>
    </SHeader>
  )
}

const SHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #996c57;
  padding: 7px 8px;
`
const SNav = styled.nav`
  margin-left: auto;
  a {
    margin: 0 4px;
  }
`
