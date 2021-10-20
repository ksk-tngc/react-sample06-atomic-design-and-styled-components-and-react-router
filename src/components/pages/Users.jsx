import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { HeaderOnly } from '../templates/HeaderOnly'

// ユーザのダミーデータ
const users = [...Array(10).keys()].map((i) => ({
  id: i,
  img: 'https://source.unsplash.com/X5VoG4MA5aI',
  name: `Tom${i + 1}`,
  mail: '12345@example.com',
  tel: '090-1111-2222',
  company: {
    name: 'テスト株式会社',
  },
  website: 'http://google.com',
}))

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザ一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
