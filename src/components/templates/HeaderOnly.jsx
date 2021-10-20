import { Header } from '../organisms/layout/Header'

export const HeaderOnly = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
