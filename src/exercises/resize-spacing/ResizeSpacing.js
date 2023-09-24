import '../../styles/layout.scss';
import './ResizeSpacing.scss';

export const ResizeSpacing = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>Resizing spacing with text size</h1>

      <details className={'details'}>
        <summary>Using 'rem' for spacing</summary>
        {
          `
          // declare these once in your reset.css or variables.css
          
      :root {
        --spacing-unit-1: 5px;
        --spacing-unit-2: 10px;
        --spacing-unit-3: 15px;
        --spacing-unit-4: 20px;
      }
    `
        }
      </details>
    </main>
  )
}
