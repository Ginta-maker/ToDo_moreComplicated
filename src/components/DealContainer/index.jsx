import React from 'react';
import style from './style.module.sass';
import WeekdayCard from '../WeekdayCard';
import EmtyDeals from '../EmtyDeals';

export default function DealContainer({deals, delteDeal, delDays}) {

  const result = [];

  deals.forEach(deal => {
    const cur_days = result.map(day => day.day_num);

    if(cur_days.includes(deal.day)) {
      const day = result.find(day => day.day_num === deal.day);
      day.deals.push(deal)
    } else {
      result.push({
        day_num: deal.day,
        deals: [deal]
      })}
  });

  
  result.sort((a, b) => +a.day_num - +b.day_num);

  
  return (
    
    <div className={style.container}>
      { 
        deals.length === 0  
         ? <EmtyDeals />
         : result.map(day => 
            <WeekdayCard key={day.day_num} 
            label={day.day_num} 
            deals={day.deals}
            delDays={delDays}
            delteDeal={delteDeal}
            />)
      }
    </div>
  )
}
