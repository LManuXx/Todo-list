import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const LoginPage = () => {

  const { register, handleSubmit } = useForm();
  const {signin, isAuth} = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (isAuth) {
      nav('/tasks');
    }
  }, [isAuth]);
  
  const onSubmit = handleSubmit((data)=>{
    signin(data);
  })

  return (
    

    <div className="flex flex-col justify-center items-center h-screen">
    <div className="max-w-md px-6 py-10 bg-zinc-800 rounded-lg shadow-lg">
      <h1 className="text-white text-4xl mb-6">Logeate</h1>
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register('username', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-6"
        />
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-400 text-white rounded-lg px-4 py-2 transition-colors duration-300 shadow-lg"
        >
          Enviar
        </button>
      </form>
    </div>
    <div className="mt-4"> {/* Espacio para separar el formulario del footer */}
      
    </div>
  </div>
  )
}