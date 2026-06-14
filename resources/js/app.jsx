import './bootstrap';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';
import router from './routes/AppRouter';

const root = document.getElementById("app");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);
