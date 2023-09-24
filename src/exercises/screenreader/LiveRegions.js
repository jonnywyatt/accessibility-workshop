import '../../styles/layout.scss';
import './FocusH1Spas.css';
import { useState } from 'react';
export const LiveRegions = () => {
  const [ data, setData ] = useState([]);
  const loadData = () => {
    setTimeout(() => {
      const data = ['one', 'two', 'three']
      setData(data);
    }, 2000);
  };

  return (
    <main className={'main'}>
      <h1 className={'heading'}>Live regions</h1>
      <p>Live regions are used to announce changes to the page. They are useful for things like chat messages, notifications, and form validation.</p>
      <p>Add a div to this page with the attribute 'aria-live="polite"'. When the data is loaded, write a message inside the div.</p>
      <div><button type={'button'} onClick={loadData}>Load some data</button></div>
      {data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  )
}
