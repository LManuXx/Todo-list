import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TaskPage } from './pages/TaskPage';
import { TaskFormPage } from './pages/TaskFormPage';
import { ProfilePage } from './pages/ProfilePage';
import {ProtectedRoute} from './ProtectedRoute'; // Corrección en la importación aquí
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <div className='h-screen'>
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<RegisterPage />} />

            <Route element={<ProtectedRoute/>}>
              <Route path='/tasks' element={<TaskPage />} />
              <Route path='/add-task' element={<TaskFormPage />} />
              <Route path='/tasks/:id' element={<TaskFormPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>

            <Route path='*' element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
