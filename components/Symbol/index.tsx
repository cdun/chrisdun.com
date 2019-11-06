import React from 'react';
import classnames from 'classnames';
import './Symbol.scss'

const r = 120;
const left = `
  M 0 0
  L 5 325
  L 165 325
  L 165 320
  A 165 157.66 0 0 1 165 5
  L 165 5
  L 165 0
  L 0 0
`

const Symbol = (props: { animating: boolean }) => (
  <svg
    className={classnames('Symbol', { 'Symbol--animating': props.animating })}
    width="330"
    height="330"
    viewBox="0 0 330 330"
    xmlns="http://www.w3.org/2000/svg">
    <path
      className="left"
      d={left}
      fill="#f7f6f6"
    />
    <path
      className="right"
      d={`M 165 5 
      A ${r} ${r} 0 0 1 165 320`}
      fill="#f7f6f6"
    />
  </svg>
)

export default Symbol;