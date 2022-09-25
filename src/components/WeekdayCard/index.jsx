import React from 'react';
import DealCard from '../DealCard';
import Close from '../UI/Close';
import style from './style.module.sass';
import {week_label} from './weekLabels';


export default function WeekdayCard({label, deals, delteDeal, delDays, day_num}) {
  return (
    <div className={style.container}>
        <div className={style.label}>
            {week_label[label]}
        </div>
        <div className={style.deals}>
            {
                deals.map(deal => <DealCard key={deal.id} {...deal} delteDeal={delteDeal}/>)
            }
        </div>
        <div className={style.close}>
          <Close onClick={()=>delDays(label)}/>
        </div>
    </div>
  )
}
