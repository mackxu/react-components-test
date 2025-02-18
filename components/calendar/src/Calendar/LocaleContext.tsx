import { createContext } from 'react';

const LocaleContext = createContext<string | undefined>(navigator.language);

export { LocaleContext };
