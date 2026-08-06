import './bootstrap';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';
import router from './routes/AppRouter';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';

const root = document.getElementById("app");

ReactDOM.createRoot(root).render(
    <>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
        <Toaster richColors />
    </>
);
