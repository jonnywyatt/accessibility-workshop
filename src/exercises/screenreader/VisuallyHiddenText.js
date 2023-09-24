import '../../styles/layout.scss';
import { IconDelete } from './IconDelete';

export const VisuallyHiddenText = () => {
  return (
    <main className={'main'}>
      <h1>Use 'visually hidden' text</h1>
      <p>In some cases a sighted user doesn't need text, the content itself will make it clear.</p>
      <h2>Icons</h2>
      <p>Turn on the screen reader and tab to the button below. The screen reader can't tell what the button is for. </p>
      <button>
        <IconDelete width={18} height={18} />
      </button>
      <p>Add a span within the button, with a short descriptive label. Add the .visually-hidden CSS class to the span (this class is already defined in this code base).</p>
      <h2>Repeated links</h2>
      <p>A sighted user can use the visual position of the View and Delete links to understand which role they each relate to.</p>
      <p>A visually impaired user might want to view the links in a list, 'out of context'. Use the Links panel in the rotor to try it. Use the .visually-hidden CSS class to add some extra text to each link label, for screen reader users.</p>
      <ul>
        <li>Front end role <a href={'#'}>View</a> | <a href={'#'}>Delete</a></li>
        <li>Back end role <a href={'#'}>View</a> | <a href={'#'}>Delete</a></li>
        <li>Full stack role <a href={'#'}>View</a> | <a href={'#'}>Delete</a></li>
      </ul>

      <p><a href={'https://blog.logrocket.com/design-accessibility-css-visually-hidden-class'}>More info</a> </p>
    </main>
  )
}
