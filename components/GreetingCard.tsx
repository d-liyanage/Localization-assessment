
import React from 'react';

// TODO: Intern - Your task is to modify this component.
// 1. Import the `useTranslations` hook from `next-intl`.
// 2. Call the hook: `const t = useTranslations('GreetingCard');`
// 3. Replace the hardcoded strings below with calls to the `t` function.
//    For example, `<h1>Welcome!</h1>` becomes `<h1>{t('greeting')}</h1>`.
//
// You will need to define the corresponding keys ('greeting', 'introduction', 'buttonText')
// in your JSON message files.

export const GreetingCard: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* TODO: Intern - Replace "Welcome!" with a localized string. Key: 'greeting' */}
      <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        Welcome!
      </h3>
      
      {/* TODO: Intern - Replace this paragraph with a localized string. Key: 'introduction' */}
      <p className="text-gray-600 dark:text-gray-400">
        This is a simple application designed to demonstrate localization. Your task is to replace this hardcoded text with dynamically loaded translations using the next-intl library. Follow the instructions to get started.
      </p>

      <div className="pt-2">
        {/* TODO: Intern - Replace "Click Me!" with a localized string. Key: 'buttonText' */}
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors">
          Click Me!
        </button>
      </div>
    </div>
  );
};
