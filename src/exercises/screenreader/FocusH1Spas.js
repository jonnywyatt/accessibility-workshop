import '../../styles/layout.css';
import './FocusH1Spas.css';
import { Link, Outlet } from 'react-router-dom';

export const SpaPageOne = () => {
  return (
    <div className={'content'}>
      <h1 className={'heading'}>Page 1</h1>
      <p>Accessibility for the win!</p>
      <Link to={'/focus-h1-spas/two'}>Go to page two</Link>
    </div>
  )
}

export const SpaPageTwo = () => {
  return (
    <div className={'content'}>
      <h1 className={'heading'}>Page 2</h1>
      <p>Let screen reader users know that this is a different page, by focussing the h1.</p>
      <Link to={'/focus-h1-spas/one'}>Go back to page one</Link>
    </div>
  )
}

export const FocusH1Spas = () => {
  return (
    <main className={'main'}>
      <nav>
        <Link to={'/focus-h1-spas/one'}>Link one</Link> | <Link to={'/focus-h1-spas/two'}>Link two</Link>
      </nav>
      <Outlet />
    </main>
  )
}
