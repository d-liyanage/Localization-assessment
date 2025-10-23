
import React, { useState, useEffect } from 'react';
import { Instructions } from './components/Instructions';
import { GreetingCard } from './components/GreetingCard';
import { LanguageSwitcher } from './components/LanguageSwitcher';

// MOCK DATA for the intern.
// In a real implementation, these would be loaded from JSON files.
const messages = {
  en: {
    greeting: "Welcome!",
    introduction: "This is a simple application designed to demonstrate localization. Your task is to replace this hardcoded text with dynamically loaded translations using the next-intl library. Follow the instructions below to get started.",
    buttonText: "Click Me!",
    languageSelector: "Select Language:",
    english: "English",
    spanish: "Spanish",
    french: "French",
  },
  es: {
    greeting: "¡Bienvenido!",
    introduction: "Esta es una aplicación sencilla diseñada para demostrar la localización. Tu tarea es reemplazar este texto codificado con traducciones cargadas dinámicamente usando la biblioteca next-intl. Sigue las instrucciones a continuación para comenzar.",
    buttonText: "¡Haz Clic!",
    languageSelector: "Selecciona un Idioma:",
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
  },
  fr: {
    greeting: "Bienvenue !",
    introduction: "Ceci est une application simple conçue pour démontrer la localisation. Votre tâche est de remplacer ce texte en dur par des traductions chargées dynamiquement à l'aide de la bibliothèque next-intl. Suivez les instructions ci-dessous pour commencer.",
    buttonText: "Cliquez Moi !",
    languageSelector: "Sélectionner la Langue :",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
  }
};

export type Locale = 'en' | 'es' | 'fr';

// TODO: Intern - Your primary task starts here.
// You need to replace the mocked `messages` object and the logic in this file
// with a proper implementation using `next-intl`.
//
// 1. Install `next-intl`.
// 2. Create message files (e.g., `messages/en.json`).
// 3. Import and wrap the application with `NextIntlClientProvider`.
// 4. Load the messages dynamically based on the selected `locale`.

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [currentMessages, setCurrentMessages] = useState(messages.en);

  useEffect(() => {
    // This effect simulates loading messages when the locale changes.
    // TODO: Intern - Replace this with your message loading logic for next-intl.
    setCurrentMessages(messages[locale]);
  }, [locale]);
  
  // TODO: Intern - This is where you would wrap your components with `NextIntlClientProvider`.
  // You will need to pass the `locale` and `messages` props to it.
  // For example:
  //
  // import { NextIntlClientProvider } from 'next-intl';
  //
  // return (
  //   <NextIntlClientProvider locale={locale} messages={currentMessages}>
  //     <TheRestOfYourApp />
  //   </NextIntlClientProvider>
  // );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
            Localization Assessment
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            A hands-on exercise with `next-intl`.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <Instructions />
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Live Preview
              </h2>
              {/* This component should eventually get its text from the next-intl context */}
              <GreetingCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
