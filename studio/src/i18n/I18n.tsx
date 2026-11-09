import {createContext,useContext,useState,useEffect,type ReactNode} from 'react';
import {messages,type Messages} from './messages';
import {pickLocale,type Locale} from './locale';
const I18nContext=createContext<{locale:Locale;t:Messages;setLocale:(locale:Locale)=>void}|null>(null);
export function I18nProvider({children}:{children:ReactNode}){
 const [locale,setLocale]=useState<Locale>(()=>{let saved=null;try{saved=localStorage.getItem('studio-language')}catch{}return pickLocale(saved,navigator.languages)});
 useEffect(()=>{document.documentElement.lang=locale;document.title=messages[locale].pageTitle;try{localStorage.setItem('studio-language',locale)}catch{}},[locale]);
 return <I18nContext.Provider value={{locale,t:messages[locale],setLocale}}>{children}</I18nContext.Provider>;
}
export function useI18n(){const context=useContext(I18nContext);if(!context)throw new Error('Missing I18nProvider');return context;}
export function LanguageSwitch(){const {locale,t,setLocale}=useI18n();return <label className="language-switch"><span className="language-mark" aria-hidden="true">文 / A</span><select aria-label={t.language} value={locale} onChange={e=>setLocale(e.target.value as Locale)}><option value="en">English</option><option value="zh-Hans">简体中文</option><option value="zh-Hant">繁體中文</option><option value="ja">日本語</option></select></label>}
