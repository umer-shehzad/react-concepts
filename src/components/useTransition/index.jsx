import React, { useState, useTransition } from 'react';

function Index() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    // priortize first, non-blocking UI
    setValue(e.target.value);

    // priortize second
    startTransition(()=> {   
      // delaying
      const arr = [];
      for (let i=0; i<20000; i++){
        arr.push(e.target.value);
      }
      setItems(arr);
    })
  }

  return (
    <div className='container'>
      <h2>React useTransition Hook</h2>
      <input type="text" value={value} onChange={handleChange}/>
      {
        isPending
        ? 'loading...'
        : items.map((item, i) => (
          <div key={i}>{item}</div>
        ))
      }
    </div>
  );
}

export default Index;
