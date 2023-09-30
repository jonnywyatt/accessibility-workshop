import '../styles/variables.css';
import '../styles/type.css';
import '../styles/layout.css';
import styles from './Root.module.css';

export const Root = () => {

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.siteTitle}>
          A11y exercises
        </h1>
      </header>
      <main className={'main'}>
        <h2 className={'heading'}>Keyboard</h2>
        <ul>
          <li><a href={'/keyboard-focus'}>Show which element is focused</a></li>
        </ul>
        <h2 className={'heading'}>Resize text</h2>
        <ul>
          <li><a href={'/resize-text'}>Enable text to be resized in browser settings</a></li>
          <li><a href={'/resize-spacing'}>Resize spacing in line with text size</a></li>
        </ul>
        <h2 className={'heading'}>Screen readers</h2>
        <ul>
          <li><a href={'/heading-levels'}>Heading levels</a></li>
          <li><a href={'/visually-hidden-text'}>Visually hidden text</a></li>
          <li><a href={'/landmarks'}>Landmarks</a></li>
        </ul>
        <h3 className={'heading-3'}>More advanced techniques</h3>
        <ul>
          <li><a href={'/focus-h1-spas/one'}>Single page apps - focus heading</a></li>
          <li><a href={'/live-regions'}>Live regions</a></li>
        </ul>
      </main>
    </div>
  )
}
