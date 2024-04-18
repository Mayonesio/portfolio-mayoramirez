import React, { useEffect } from 'react';

const SubNavBar = () => {
    useEffect(() => {
        const toggleMenu = () => {
            const navToggle = document.getElementsByClassName("toggle");
            for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
            }
        };

        document.getElementById("hamburger").addEventListener("click", toggleMenu);

        return () => {
            document.getElementById("hamburger").removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200">
            <img src="https://tailwindflex.com/public/favicon.ico" className="h-10 w-10" alt="ACME" width="120" />
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
            </div>
            <div className="toggle hidden w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                <a href="/home/login" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Login</a>
                <a href="/home/login/tasks" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Tareas</a>
                <a href="/home/register" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Registro</a>
                
            </div>
            <a href="#" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Salir</a>
        </nav>
    );
}

export default SubNavBar;
