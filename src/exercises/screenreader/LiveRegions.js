import '../../styles/layout.css';
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
      <p>Clicking the 'Load some data' button adds new content to the page but screen readers won't know about it. They're only notified automatically about full page loads (eg clicking a link to load a new page).</p>
      <p>To let screen readers know that something has changed</p>
      <ol>
        <li>Add an empty div to this page with the attribute 'aria-live="polite"'.</li>
        <li>When the data is loaded, use a React state value (declared with useState) to write a message inside the div that would be useful to a screen reader, ie let them know what has changed.</li>
        <li>The live region is useful for screen reader users. Sighted users don't need it as they can see where the content has been added. So the live region can be hidden from sighted users. Add the same CSS class that you used in a previous exercise to do this.</li>
      </ol>
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
