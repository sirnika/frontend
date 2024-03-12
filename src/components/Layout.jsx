

const Layout = ({children,extra}) => {
  return (
    <div className={`pageLayout mt-4 py-5 px-3 ${extra}`}>{children}</div>
  )
}

export default Layout