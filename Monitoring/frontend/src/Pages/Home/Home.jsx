import css from './Home.module.css'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <>
      <section className={css.homeContainer}>
        <Header></Header>
      </section>
    </>
  )
}

export default Home
