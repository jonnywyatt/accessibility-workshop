import '../../styles/layout.css';
import './FocusH1Spas.css';
import { Link, Outlet } from 'react-router-dom';

export const SpaPageOne = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>Page 1</h1>
      <p>Accessibility for the win!</p>
      <Link to={'one'}>Go to page two</Link>
    </main>
  )
}

export const SpaPageTwo = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>Page 2</h1>
      <p>Let screen reader users know that this is a different page, by focussing the h1.</p>
      <Link to={'one'}>Go back to page one</Link>
    </main>
  )
}

export const FocusH1Spas = () => {
  return (
    <main className={'main'}>
      <nav>
        <Link to={'one'}>Link one</Link> | <Link to={'two'}>Link two</Link>
      </nav>
      <Outlet />
    </main>
  )
}
