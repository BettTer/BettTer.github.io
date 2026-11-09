import {afterEach, describe, expect, it, vi} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {parseHTML} from 'linkedom';
import App from './App';
import {I18nProvider} from './i18n/I18n';

afterEach(()=>vi.unstubAllGlobals());
function renderHome(language='en') {
 vi.stubGlobal('localStorage',{getItem:()=>language});
 vi.stubGlobal('navigator',{languages:[language]});
 vi.stubGlobal('matchMedia',()=>({matches:false}));
 return parseHTML(renderToStaticMarkup(<I18nProvider><App/></I18nProvider>)).document;
}
describe('a homepage led by shipped work',()=>{
 it('introduces Young and links real products in the first screen',()=>{
  const doc=renderHome();
  const hero=doc.querySelector('#home')!;
  expect(hero.querySelector('h1')?.textContent).toContain('Young');
  expect(hero.textContent).toContain('Nine years');
  for(const url of ['https://ancher.ai/','https://apps.apple.com/app/id6751126870','https://apps.apple.com/app/id6747648089'])
   expect(hero.querySelector(`a[href="${url}"]`)).not.toBeNull();
  expect(hero.querySelector('.lcd-title')?.textContent).toContain('Ancher');
 });
 it('takes About navigation to the first-screen introduction',()=>{
  const doc=renderHome();
  expect(doc.querySelectorAll('#about')).toHaveLength(1);
  expect(doc.querySelector('#home #about')).not.toBeNull();
 });
 it.each(['en','zh-Hans','zh-Hant','ja'])('keeps production links out of source-code links in %s',language=>{
  const doc=renderHome(language);
  const details=doc.querySelector('.project-insert')!;
  expect(details.textContent).toContain('Ancher');
  expect(details.querySelector('a[href="https://ancher.ai/"]')).not.toBeNull();
  expect(details.querySelector('a[href*="github.com"]')).toBeNull();
  expect(details.querySelector('a[href="https://apps.apple.com/app/id6759999347"]')).not.toBeNull();
 });
});
