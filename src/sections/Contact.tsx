import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="pt-16 pb-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === 'es' ? 'Contacto' : 'Contact'}
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {language === 'es' ? 'Nombre' : 'Name'}
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              placeholder={language === 'es' ? 'Tu email' : 'Your email'}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {language === 'es' ? 'Mensaje' : 'Message'}
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              rows={4}
              placeholder={language === 'es' ? 'Tu mensaje' : 'Your message'}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy text-white p-2 rounded-lg hover:bg-blue-900 transition-colors"
          >
            {language === 'es' ? 'Enviar' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;