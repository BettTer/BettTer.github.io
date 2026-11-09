export type Locale='en'|'zh-Hans'|'zh-Hant'|'ja';
export const locales:Locale[]=['en','zh-Hans','zh-Hant','ja'];
export function pickLocale(saved:string|null,languages:readonly string[]):Locale{
 if(locales.includes(saved as Locale))return saved as Locale;
 for(const value of languages){const l=value.toLowerCase();if(l.startsWith('zh'))return /hant|tw|hk|mo/.test(l)?'zh-Hant':'zh-Hans';if(l.startsWith('ja'))return 'ja';if(l.startsWith('en'))return 'en';}
 return 'en';
}
