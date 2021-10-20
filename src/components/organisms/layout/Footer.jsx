import styled from 'styled-components'

export const Footer = () => {
  return (
    <SFooter>
      <small>&copy; Test Inc. 2021</small>
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: #996c57;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #eee;
`
