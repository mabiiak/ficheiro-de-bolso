import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Ficha from './paginas/Ficha';
import Provider from './context/Provider';

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
    <Provider>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
