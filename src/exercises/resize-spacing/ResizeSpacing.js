import '../../styles/layout.css';
import './ResizeSpacing.css';

export const ResizeSpacing = () => {
  return (
    <main className={'main'}>
      <h1 className={'heading'}>When text is resized, also resize spacing</h1>

      <div className={'wrapper'}>
        <div className={'box-px'}>
          This box has padding and margin set in pixels. Try resizing the text.
        </div>
      </div>
      <p>Look at the spacing variables declared in variables.css</p>
      <pre>
      {
        `
      :root {
        --spacing-4px: 0.25rem;
        --spacing-8px: 0.5rem;
        --spacing-12px: 0.75rem;
        --spacing-16px: 1rem;
      }
    `
      }
      </pre>
      <p>Use a variable to set the padding and margin on .box-px, instead of using a pixel value.</p>
    </main>
  )
}
