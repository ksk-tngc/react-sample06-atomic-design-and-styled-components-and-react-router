import styled from 'styled-components'

export const UserIconWithName = (props) => {
  const { url, name } = props
  return (
    <SContainer>
      <SImg src={url} alt="プロフィール画像" width={160} height={160} />
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #555;
`
