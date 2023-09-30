import '../../styles/layout.css';

export const Landmarks = () => {
  return (
    <div>
      <header className={'header'}>
        Header
      </header>
      <main className={'main'}>
        <h2 className={'heading'}>Screen readers: Landmarks</h2>
        <p>Group your content with landmarks:</p>
        <ul>
          <li>header</li>
          <li>main</li>
          <li>footer</li>
        </ul>
      </main>
    </div>
  )
}
