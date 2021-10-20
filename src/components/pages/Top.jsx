import styled from 'styled-components'
import { DefaultLayout } from '../templates/DefaultLayout'

export const Top = () => {
  return (
    <DefaultLayout>
      <SContainer>
        <SContent>👋 Top page.</SContent>
      </SContainer>
    </DefaultLayout>
  )
}

const SContainer = styled.div`
  text-align: center;
  padding-top: 24px;
`
const SContent = styled.p`
  font-weight: bold;
  color: #555;
`
