import React from 'react';
import { useForm } from "react-hook-form";
import { registerRequest } from '../../../api/auth';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const res = await registerRequest(values);
        console.log(res);
    })
    return (
        <div className="dark:bg-gradient-to-l from-gray-900 to-gray-600 flex justify-center items-center w-screen h-screen p-5">
            <div className="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3 dark:bg-gray-800">
                <h1 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">Regístrate</h1>
                <form onSubmit={onSubmit}
                >
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
                            Usuario<span className="text-red-500">*</span>
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" {...register('username', { required: true })} type="text" placeholder="Introduce Usuario" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="email" {...register('email', { required: true })} type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña <span className="text-red-500">*</span>
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="password" {...register('password', { required: true })} type="password" placeholder="Mínimo 6 caracteres" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600" type="submit">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
