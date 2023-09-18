import { Outlet } from "react-router-dom"
import { Header, ScrollTop } from "./components"

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTop />
    </>
  )
}
