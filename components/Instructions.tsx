
import React from 'react';

const InstructionStep: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <li className="flex">
    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center rounded-full font-bold mr-4">{number}</span>
    <div>
      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
  </li>
);

export const Instructions: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Your Task</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Your goal is to replace all hardcoded English text in the "Live Preview" section with localized content using the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">next-intl</code> library. This requires moving beyond AI prompts and engaging directly with library documentation.
      </p>
      <ol className="space-y-6">
        <InstructionStep number={1} title="Setup & Installation">
          Install the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">next-intl</code> package into the project dependencies.
        </InstructionStep>
        <InstructionStep number={2} title="Create Message Files">
          Create a new directory named <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">messages</code>. Inside, create <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">en.json</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">es.json</code>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">fr.json</code>. Populate them with translations for the keys mentioned in the code comments.
        </InstructionStep>
        <InstructionStep number={3} title="Configure the Provider">
          In <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">App.tsx</code>, import and configure the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">NextIntlClientProvider</code> to wrap the application components. You'll need to load the correct message file based on the selected locale.
        </InstructionStep>
        <InstructionStep number={4} title="Implement Translations">
          In <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">GreetingCard.tsx</code>, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">useTranslations</code> hook from <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">next-intl</code> to replace all hardcoded text with the localized strings.
        </InstructionStep>
      </ol>
      <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-blue-600">
        <h3 className="font-bold text-blue-800 dark:text-blue-300">Primary Resource</h3>
        <p className="text-blue-700 dark:text-blue-300">
          Refer to the official <a href="https://next-intl-docs.vercel.app/docs/getting-started" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-blue-500">next-intl documentation</a> to understand its APIs. This is the most reliable source of information.
        </p>
      </div>
    </div>
  );
};
