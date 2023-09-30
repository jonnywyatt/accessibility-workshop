import '../../styles/layout.css';
import './KeyboardFocus.css';

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
      <h2>Extra challenge if you finish quickly</h2>
      <p>Have a look at gov.uk - tab across some of the inputs. They've added a custom style to outline to make it even more noticeable. Use Chrome devtools to find the style they've applied and copy it. Add it to the stylesheet for this page.</p>
    </main>
  )
}
