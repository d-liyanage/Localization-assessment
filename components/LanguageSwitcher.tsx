
import React from 'react';
import type { Locale } from '../App';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const languages: { code: Locale; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, onLocaleChange }) => {
  // TODO: Intern (Optional Bonus Task)
  // Can you also localize the "Select Language:" label and the language names themselves?
  // You would need to add keys for these in your JSON files and use the `useTranslations` hook here.

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
        Select Language:
      </label>
      <div className="flex space-x-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLocaleChange(lang.code)}
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-200
              ${currentLocale === lang.code
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};
