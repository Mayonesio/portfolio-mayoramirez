import React from 'react';

function ContactForm() {
    return (
        <div className="max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-12 border">
                <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Get In <span className="text-indigo-600">Touch</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>

                    <div className="flex items-center mt-5">
                        <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536"
                            xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 489.536 489.536">
                            {/* SVG path */}
                        </svg>
                        <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                    </div>
                    {/* More content */}
                </div>
                <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 p-10">
                    {/* Form fields */}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
