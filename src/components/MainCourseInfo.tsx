/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import axios from 'axios'
import { Bovespa, IFIX } from '../assets/image/signs/index.js'
import { data } from '../mocks/signsMocks'
import { useEffect, useState } from 'react'
import Modal from './Modal'
// import currencyapi from '@everapi/currencyapi-js'

const MainCourseInfo = () => {
  const [itemId, setItemId] = useState(0)
  const [show, setShow] = useState(false)
  const [list, setList]: any = useState(data)
  // const [cur, setCur] = useState(data)
  const [allCurr, setAllCurr] = useState()

  function openModal(item: number) {
    setShow(true)
    setItemId(item)
  }

  useEffect(() => {
    axios.get(`https://api.exchangerate.host/latest?base=USD`).then((res) => {
      setAllCurr(res.data.rates)
    })
  }, [])

  /* ДЛЯ РЕАЛЬНЫХ ДАННЫХ */
  // useEffect(() => {
  //   const client = new currencyapi(
  //     'cur_live_2ipYARKKC1oZ9I1QZrbbYf8KIxQcXPe2v05zwMOB'
  //   )
  //   client
  //     .currencies({
  //       currencies: [
  //         'USD',
  //         'EUR',
  //         'CAD',
  //         'CNY',
  //         'JPY',
  //         'CNY',
  //         'BTC',
  //         'AUD',
  //         'ARS',
  //         'BYN',
  //         'JPY',
  //         'TRY',
  //       ],
  //     })
  //     .then((res: any) => setCur(res.data))
  // }, [])

  const arr = []

  /* ДЛЯ РЕАЛЬНЫХ ДАННЫХ */
  // for (const key in cur) {
  //   for (const curs in allCurr) {
  //     if (cur[key].code === curs) {
  //       cur[key].cur = allCurr[curs].toFixed(2)

  //       const clone = Object.assign(
  //         {},
  //         { code: cur[key].code },
  //         { cur: cur[key].cur },
  //         { name: cur[key].name },
  //         { symbol: cur[key].symbol }
  //       )
  //       arr.push(clone)
  //     }
  //   }
  // }

  for (const key in list) {
    for (const cur in allCurr) {
      if (list[key].code === cur) {
        list[key].cur = allCurr[cur].toFixed(2)

        const clone = Object.assign(
          {},
          { code: list[key].code },
          { cur: list[key].cur },
          { name: list[key].name },
          { symbol: list[key].symbol },
        )
        arr.push(clone)
      }
    }
  }

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
        <div className="main-wrapper">
          {arr.map((item: any, i: number) => {
            return (
              <>
                <div className="main-wrapper__item" key={i} onClick={() => openModal(i)}>
                  <div className="main-wrapper__symbol">
                    <span>{item.symbol}</span>
                  </div>
                  <div className="main-wrapper__text">
                    <h3>{item.name}</h3>
                    <p>
                      1 USD = {item.cur} {item.symbol}
                    </p>
                  </div>
                </div>

                {itemId === i && show ? <Modal setShow={setShow} code={item.code} /> : ''}
              </>
            )
          })}
        </div>
      </article>
    </main>
  )
}

export default MainCourseInfo
