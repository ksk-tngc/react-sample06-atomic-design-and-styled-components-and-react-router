import { Footer } from '../organisms/layout/Footer'
import { Header } from '../organisms/layout/Header'

export const DefaultLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
