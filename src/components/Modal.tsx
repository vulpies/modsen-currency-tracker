/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import axios from 'axios'
import { useState } from 'react'

interface ModalUI {
  code: string
  setShow: any
}

const Modal = ({ setShow, code }: ModalUI) => {
  const [baseCur, setBaseCur] = useState(code)
  const [targetCur, setTargetCur] = useState('')

  const [baseCurAmount, setBaseCurAmount] = useState(1)
  const [targetCurAmount, setTargetCurAmount] = useState(0)

  function closeModal(e: any) {
    e.preventDefault()
    setShow(false)
  }

  function getRates(e: any) {
    e.preventDefault()

    axios
      .get(`https://api.exchangerate.host/latest?base=${baseCur}`)
      .then((res) => {
        const rate = res.data.rates[targetCur]
        setTargetCurAmount(Number((baseCurAmount * rate).toFixed(2)))
      })
  }

  return (
    <>
      <div className="modal" onClick={(e) => closeModal(e)}>
        <form className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            className="modal-close-btn"
            onClick={(e) => closeModal(e)}
          >
            <path d="M2 16.8507L17 2.00001" strokeWidth="3" />
            <path d="M2 2.14928L17 17" strokeWidth="3" />
          </svg>

          <div className="modal__currency">
            <div className="modal__single-block">
              <div className="modal__currency-item">
                <p>Amount</p>
                <input
                  name="baseCurAmount"
                  defaultValue={baseCurAmount}
                  type="number"
                  onChange={(e: any) => setBaseCurAmount(e.target.value)}
                />
              </div>

              <div className="modal__currency-item">
                <p>Base Currency</p>
                <input
                  name="base"
                  defaultValue={code}
                  type="text"
                  onChange={(e) => setBaseCur(e.target.value.trim())}
                />
              </div>
            </div>

            <div className="modal__single-block">
              <div className="modal__currency-item">
                <p>Amount</p>
                <input
                  name="targetCurAmount"
                  value={targetCurAmount}
                  type="number"
                  onChange={(e: any) => setTargetCurAmount(e.target.value)}
                />
              </div>
              <div className="modal__currency-item">
                <p>Target Currency</p>
                <input
                  name="target"
                  placeholder="USD, EUR, RUS, etc..."
                  type="text"
                  onChange={(e) => setTargetCur(e.target.value.trim())}
                />
              </div>
            </div>

            <button onClick={(e) => getRates(e)} className="modal__btn">
              Change!
            </button>
          </div>

          <div className="modal__rates"></div>
        </form>
      </div>
    </>
  )
}

export default Modal
