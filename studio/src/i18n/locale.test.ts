import {expect,it} from 'vitest';
import {pickLocale} from './locale';
it('restores an explicit language choice even when the browser differs',()=>{expect(pickLocale('ja',['zh-CN'])).toBe('ja');expect(pickLocale('zh-Hant',['en-US'])).toBe('zh-Hant')});
it('recognises regional Chinese variants and falls back safely',()=>{expect(pickLocale(null,['zh-TW'])).toBe('zh-Hant');expect(pickLocale(null,['zh-HK'])).toBe('zh-Hant');expect(pickLocale(null,['zh-CN'])).toBe('zh-Hans');expect(pickLocale('invalid',['ja-JP'])).toBe('ja');expect(pickLocale(null,['de-DE'])).toBe('en')});
