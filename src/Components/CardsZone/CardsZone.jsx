import React from 'react';

const CardZone = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Todas las tarjetas</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img className="w-1/2 md:w-full mx-auto" src="https://placeholder.pics/svg/400" alt="can_help_banner" />
        </div>
        {/* end can help image */}

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <Feature
            title="Dynamic Personalization:"
            description="Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time."
          />
          <Feature
            title="Mobile-Optimized Interface"
            description="Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets."
          />
          <Feature
            title="24/7 Customer Support"
            description="Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you."
          />
          <Feature
            title="Secure Payment Processing"
            description="We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site."
          />
          <Feature
            title="Secure Payment Processing"
            description="We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site."
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className="w-full sm:w-1/2 mb-4 px-2">
      <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
        <h3 className="text-2xl font-bold text-md mb-6">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardZone;
