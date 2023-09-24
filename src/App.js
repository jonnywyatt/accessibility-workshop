import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './Root/Root';
import { KeyboardFocus } from './exercises/keyboard/KeyboardFocus';
import { useEffect } from 'react';
import { ResizeText } from './exercises/resize-text/ResizeText';
import { ResizeSpacing } from './exercises/resize-spacing/ResizeSpacing';
import { HeadingLevels } from './exercises/screenreader/HeadingLevels';
import { VisuallyHiddenText } from './exercises/screenreader/VisuallyHiddenText';
import { FocusH1Spas, SpaPageOne, SpaPageTwo } from './exercises/screenreader/FocusH1Spas';
import { Landmarks } from './exercises/screenreader/Landmarks';
import { LiveRegions } from './exercises/screenreader/LiveRegions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/keyboard-focus",
    element: <KeyboardFocus />
  },
  {
    path: "/resize-text",
    element: <ResizeText />
  },
  {
    path: "/resize-spacing",
    element: <ResizeSpacing />
  },
  {
    path: "/heading-levels",
    element: <HeadingLevels />
  },
  {
    path: "/visually-hidden-text",
    element: <VisuallyHiddenText />
  },
  {
    path: "/landmarks",
    element: <Landmarks />
  },
  {
    path: "/focus-h1-spas",
    element: <FocusH1Spas />,
    children: [
      {
        path: "one",
        element: <SpaPageOne />,
      },
      {
        path: "two",
        element: <SpaPageTwo />,
      },
    ],
  },
  {
    path: "/live-regions",
    element: <LiveRegions />
  }
]);

function App() {
  useEffect(() => {
    document.title = 'Accessibility exercises'
  }, [])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
