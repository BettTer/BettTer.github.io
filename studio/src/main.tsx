import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {I18nProvider} from './i18n/I18n';
import './styles.css';
import './newspaper.css';
import './living-studio.css';
import './scene-day-cycle.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><I18nProvider><App/></I18nProvider></React.StrictMode>);
