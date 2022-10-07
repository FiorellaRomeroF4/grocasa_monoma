import { Outlet } from "react-router-dom"
import styles from './App.module.scss'

const App = () => {
  return (
    <section className={styles.app}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </section>
  )
}

export { App }