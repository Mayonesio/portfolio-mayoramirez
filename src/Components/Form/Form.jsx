'use client'
import React from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className="h-screen bg-gray-800">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Adjunta una tarea</h1>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit((values) => {
                        console.log(values);
                    })} action="/submit-post" method="POST">
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            {/* <div className="flex flex-col md:flex-row">
                                <input id="name" type="text"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Nombre" name='title' />
                                <input id="email" type="email"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Email" />
                            </div> */}
                            <input id="subject" type="text" name='title' placeholder="Título"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600" />
                            <textarea id="message" name='description' rows="5" placeholder="Aqui va tu descripción"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600 "></textarea>
                        </div>
                        <button
                            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;