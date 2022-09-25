import React from 'react';
import Close from '../UI/Close';
import styles from './style.module.sass';


export default function DealCard({id, descr, importance, delteDeal}) {



  const style = {
    backgroundColor: importance === '0' ? '#82a89a' : '#e78888'
  };  

  return (
    <div style={style} className={styles.card}>
        {descr}
        <div className={styles.close} >
          <Close onClick={()=> delteDeal(id)}/>
        </div>
    </div>
  )
}
