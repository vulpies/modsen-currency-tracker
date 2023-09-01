import { Bovespa, IFIX } from '../assets/image/signs/index.js'
import { data } from '../mocks/signsMocks'

const MainCourseInfo = () => {
  const sings = data.map((item) => {
    return (
      <div className="main-wrapper__item" key={item.id}>
        <img src={item.icon} alt={item.icon} />
        <div className="main-wrapper__text">
          <h3>{item.sign}</h3>
          <p>R$ {item.change}</p>
        </div>
      </div>
    )
  })
  return (
    <main className="main">
      <article className="main-stocks">
        <h2>Stocks</h2>

        <div className="main-wrapper">
          <div className="main-wrapper__item">
            <img src={Bovespa} alt="Bovespa" />
            <div className="main-wrapper__text">
              <h3>Bovespa Index</h3>
              <p>0.15%</p>
            </div>
          </div>

          <div className="main-wrapper__item">
            <img src={IFIX} alt="Bovespa" />
            <div className="main-wrapper__text">
              <h3>IFIX</h3>
              <p>0.15%</p>
            </div>
          </div>
        </div>
      </article>

      <article className="main-quotes">
        <h2>Quotes</h2>
        <div className="main-wrapper">{sings}</div>
      </article>
    </main>
  )
}

export default MainCourseInfo
