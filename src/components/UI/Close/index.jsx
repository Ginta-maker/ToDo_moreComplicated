import React from 'react';
import style from './style.module.sass';

export default function Close(props) {
  return (
    <button {...props} className={style.close} >
        x
    </button>
  )
}
