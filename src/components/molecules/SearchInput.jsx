import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/input/Input'

/**
 * 検索用テキストボックスとボタン。
 */
export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
`
const SButtonWrapper = styled.div`
  margin-left: 5px;
`
