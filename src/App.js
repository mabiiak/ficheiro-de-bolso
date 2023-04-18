import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Ficha from './paginas/Ficha';

function App() {
    const router = createBrowserRouter([
        {
            path: "/ficha",
            element: <Ficha />,
        }, 
        {
            path: "/",
            element: <Ficha />,
        }
    ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
