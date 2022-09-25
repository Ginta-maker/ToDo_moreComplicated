import { useEffect } from "react";
import { useState } from "react";
import AddDeal from "../AddDeal";
import DealContainer from "../DealContainer";



function App() {
  
  const start_deals = []
  const [deals, setDeals] = useState(start_deals);

  useEffect(()=> {
    console.log('useEffect')
  })

  const addNewDeal = (descr, importance, day) => {
    setDeals([...deals,
      {
        id: Date.now(),
        descr, 
        importance, 
        day
    }])  
  };

  const delteDeal = (id) => {
    setDeals(deals.filter(elem => elem.id !== id))
  };

  const delDays = (day_num) => {
    setDeals(deals.filter(elem => elem.day !== day_num));
  }

  return (
    <>
      <AddDeal addNewDeal={addNewDeal}/>
      <DealContainer deals={deals} delteDeal={delteDeal} delDays={delDays}/>
    </>
 );
}

export default App;