import '../../styles/layout.scss';
import './KeyboardFocus.scss';

export const KeyboardFocus = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>Keyboard focus</h1>
      <p>Use the tab key to focus the input and button below.</p>
      <p>Check the CSS file linked to this component, to fix the selector that's resetting the focus outline.</p>
      <form>
        <div>
          <label htmlFor={'input'}>Enter your name</label>
          <div><input id="input" type={'text'} /></div>
        </div>
        <p><button>Submit</button></p>
      </form>
    </main>
  )
}
