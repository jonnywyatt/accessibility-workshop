import '../../styles/layout.css';

export const HeadingLevels = () => {
  return (
    <main className={'main'}>
      <h2 className={'heading'}>Screen readers: Heading levels</h2>
      <p>Golden rules:</p>
      <ul>
        <li>Every page should have one h1 only which should reflect the contents of the page, not the whole site</li>
        <li>Don't skip heading levels, eg don't follow a h1 with a h3</li>
      </ul>
      <h4>Use the VoiceOver rotor to understand the page using its headings</h4>
      <ol>
        <li>Open the VoiceOver rotor - Caps lock + U</li>
        <li>Use the right arrow to go to the headings panel in the rotor</li>
        <li>Press 1 to list the H1 heading</li>
        <li>Press 2 to list the H2 headings</li>
        <li>etc...</li>
      </ol>
    </main>
  )
}
