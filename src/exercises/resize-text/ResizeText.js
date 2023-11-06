import '../../styles/layout.css';
import './ResizeText.css';

export const ResizeText = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>Resizing text</h1>
      <p>This will enable users to use their 'global' font size setting, without having to zoom each page.</p>
      <p>Go to Chrome settings -> Appearance (chrome://settings/appearance) and change Font size from Medium to Large</p>

      <div className={'panel-secondary'}>
      <p className={'px'}>This is set in px - it won't resize</p>
      <p className={'rem'}>This is set in rem - it will resize</p>
      </div>

      <details className={'details'}>
        <summary>Using 'rem' in your CSS</summary>
        <div className={'details__content'}>
        <p>By default, 1 rem === 16px.</p>
        <p>If you set your font sizes in rems it can get confusing to have to calculate in your head what 1.5 rem equals in pixels, or translating 20px into rems.</p>
        <p>Easiest solution? Use CSS variables:</p>
        <pre>
        <code>
          {
          `
          // look in src/styles/variables.css
          :root {
            --font-size-10px: 0.625rem;
            --font-size-14px: 0.875rem;
            --font-size-16px: 1rem;
            --font-size-20px: 1.25rem;
            --font-size-32px: 2rem;
          }
         
          // use one of the font size variables in any of your CSS files
          .text {
            font-size: var(--font-size-16px);
          }
         `
          }
        </code>
        </pre>
        </div>
      </details>

      <details className={'details'}>
        <summary>Allow containers to grow with resized text</summary>
        <div className={'details__content'}>
          <p>Resize text and fix the container that doesn't expand</p>
        <div className={'wrapper'}>
        <div className={'fixed-height'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={'variable-height'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
        </div>
      </details>
    </main>
  )
}
