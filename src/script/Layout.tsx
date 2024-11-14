import Header from './header/Header'

interface Props {
  children: JSX.Element
}

const Layout = (props: Props) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  )
}

export default Layout