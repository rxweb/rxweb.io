import { OnInit, Component } from '@angular/core';
import * as Diff2Html from 'diff2html';
import * as Diff from 'diff'

@Component({
  templateUrl: './translate-service.component.html',
})
export class TranslateServiceComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "translate-service", "title": "translate-service", "subLink": null }, { "id": "translate-service", "title": "translate-service", "subLink": null }];
  outputHtml: string;

  ngOnInit() {
    this.init();
  }

  init() {
    let ngxContent: any = "import { fakeAsync, TestBed, tick } from \"@angular\/core\/testing\";\r\nimport { Observable, of, timer, zip, defer } from \"rxjs\";\r\nimport { mapTo, take, toArray, first } from 'rxjs\/operators';\r\nimport { LangChangeEvent, TranslateLoader, TranslateModule, TranslateService, TranslationChangeEvent } from '..\/src\/public_api';\r\n\r\nlet translations: any = { \"TEST\": \"This is a test\" };\r\n\r\nclass FakeLoader implements TranslateLoader {\r\n  getTranslation(lang: string): Observable<any> {\r\n    return of(translations);\r\n  }\r\n}\r\n\r\ndescribe('TranslateService', () => {\r\n  let translate: TranslateService;\r\n\r\n  beforeEach(() => {\r\n    TestBed.configureTestingModule({\r\n      imports: [\r\n        TranslateModule.forRoot({\r\n          loader: { provide: TranslateLoader, useClass: FakeLoader }\r\n        })\r\n      ]\r\n    });\r\n    translate = TestBed.get(TranslateService);\r\n  });\r\n\r\n  afterEach(() => {\r\n    translate = undefined;\r\n    translations = { \"TEST\": \"This is a test\" };\r\n  });\r\n\r\n  it('is defined', () => {\r\n    expect(TranslateService).toBeDefined();\r\n    expect(translate).toBeDefined();\r\n    expect(translate instanceof TranslateService).toBeTruthy();\r\n  });\r\n\r\n  it('should be able to get translations', () => {\r\n    translations = { \"TEST\": \"This is a test\", \"TEST2\": \"This is another test\" };\r\n    translate.use('en');\r\n\r\n    \/\/ this will request the translation from the backend because we use a static files loader for TranslateService\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test');\r\n    });\r\n\r\n\r\n    \/\/ this will request the translation from downloaded translations without making a request to the backend\r\n    translate.get('TEST2').subscribe((res: string) => {\r\n      expect(res).toEqual('This is another test');\r\n    });\r\n  });\r\n\r\n  it('should be able to get an array translations', () => {\r\n    translations = { \"TEST\": \"This is a test\", \"TEST2\": \"This is another test2\" };\r\n    translate.use('en');\r\n\r\n    \/\/ this will request the translation from the backend because we use a static files loader for TranslateService\r\n    translate.get(['TEST', 'TEST2']).subscribe((res: string) => {\r\n      expect(res).toEqual(translations);\r\n    });\r\n  });\r\n\r\n  it(\"should fallback to the default language\", () => {\r\n    translations = {};\r\n    translate.use('fr');\r\n\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('TEST');\r\n\r\n      translate.setDefaultLang('nl');\r\n      translate.setTranslation('nl', { \"TEST\": \"Dit is een test\" });\r\n\r\n      translate.get('TEST').subscribe((res2: string) => {\r\n        expect(res2).toEqual('Dit is een test');\r\n        expect(translate.getDefaultLang()).toEqual('nl');\r\n      });\r\n    });\r\n  });\r\n\r\n  it(\"should use the default language by default\", () => {\r\n    translate.setDefaultLang('nl');\r\n    translate.setTranslation('nl', { \"TEST\": \"Dit is een test\" });\r\n\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('Dit is een test');\r\n    });\r\n  });\r\n\r\n  it(\"should return the key when it doesn't find a translation\", () => {\r\n    translate.use('en');\r\n\r\n    translate.get('TEST2').subscribe((res: string) => {\r\n      expect(res).toEqual('TEST2');\r\n    });\r\n  });\r\n\r\n  it(\"should return the key when you haven't defined any translation\", () => {\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('TEST');\r\n    });\r\n  });\r\n\r\n  it('should return an empty value', () => {\r\n    translate.setDefaultLang('en');\r\n    translate.setTranslation('en', { \"TEST\": \"\" });\r\n\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('');\r\n    });\r\n  });\r\n\r\n  it('should be able to get translations with params', () => {\r\n    translations = { \"TEST\": \"This is a test {{param}}\" };\r\n    translate.use('en');\r\n\r\n    translate.get('TEST', { param: 'with param' }).subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test with param');\r\n    });\r\n\r\n  });\r\n\r\n  it('should be able to get translations with nested params', () => {\r\n    translations = { \"TEST\": \"This is a test {{param.value}}\" };\r\n    translate.use('en');\r\n\r\n    translate.get('TEST', { param: { value: 'with param' } }).subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test with param');\r\n    });\r\n\r\n  });\r\n\r\n  it('should throw if you forget the key', () => {\r\n    translate.use('en');\r\n\r\n    expect(() => {\r\n      translate.get(undefined);\r\n    }).toThrowError('Parameter \"key\" required');\r\n\r\n    expect(() => {\r\n      translate.get('');\r\n    }).toThrowError('Parameter \"key\" required');\r\n\r\n    expect(() => {\r\n      translate.get(null);\r\n    }).toThrowError('Parameter \"key\" required');\r\n\r\n    expect(() => {\r\n      translate.instant(undefined);\r\n    }).toThrowError('Parameter \"key\" required');\r\n  });\r\n\r\n  it('should be able to get translations with nested keys', () => {\r\n    translations = { \"TEST\": { \"TEST\": \"This is a test\" }, \"TEST2\": { \"TEST2\": { \"TEST2\": \"This is another test\" } } };\r\n    translate.use('en');\r\n\r\n    translate.get('TEST.TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test');\r\n    });\r\n\r\n\r\n    translate.get('TEST2.TEST2.TEST2').subscribe((res: string) => {\r\n      expect(res).toEqual('This is another test');\r\n    });\r\n  });\r\n\r\n  it(\"should merge translations if option shouldMerge is true\", (done: Function) => {\r\n    translations = {};\r\n    translate.setTranslation('en', { \"TEST\": { \"sub1\": \"value1\" } }, true);\r\n    translate.setTranslation('en', { \"TEST\": { \"sub2\": \"value2\" } }, true);\r\n    translate.use('en');\r\n\r\n    translate.get('TEST').subscribe((res: any) => {\r\n      expect(res).toEqual({ \"sub1\": \"value1\", \"sub2\": \"value2\" });\r\n      expect(translations).toEqual({});\r\n      done();\r\n    });\r\n  });\r\n\r\n  it(\"should merge non-valid JSON translations if option shouldMerge is true\", () => {\r\n    translations = {};\r\n    translate.setTranslation('en', { \"TEST\": { \"sub1\": () => \"value1\" } }, true);\r\n    translate.setTranslation('en', { \"TEST\": { \"sub2\": () => \"value2\" } }, true);\r\n    translate.use('en');\r\n\r\n    translate.get('TEST.sub1').subscribe((res: string) => {\r\n      expect(res).toEqual('value1');\r\n    });\r\n    translate.get('TEST.sub2').subscribe((res: string) => {\r\n      expect(res).toEqual('value2');\r\n    });\r\n  });\r\n\r\n  it(\"shouldn't call the current loader if you set the translation yourself\", (done: Function) => {\r\n    translations = {};\r\n    translate.setTranslation('en', { \"TEST\": \"This is a test\" });\r\n    translate.use('en');\r\n\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test');\r\n      expect(translations).toEqual({});\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should be able to get a stream array', (done: Function) => {\r\n    let tr = { \"TEST\": \"This is a test\", \"TEST2\": \"This is a test2\" };\r\n    translate.setTranslation('en', tr);\r\n    translate.use('en');\r\n\r\n    translate.getStreamOnTranslationChange(['TEST', 'TEST2']).subscribe((res: any) => {\r\n      expect(res).toEqual(tr);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should initially return the same value for getStreamOnTranslationChange and non-streaming get', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    zip(translate.getStreamOnTranslationChange('TEST'), translate.get('TEST')).subscribe((value: [string, string]) => {\r\n      const [streamed, nonStreamed] = value;\r\n      expect(streamed).toEqual('This is a test');\r\n      expect(streamed).toEqual(nonStreamed);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should be able to stream a translation on translation change', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    translate.getStreamOnTranslationChange('TEST').pipe(take(3), toArray()).subscribe((res: string[]) => {\r\n      const expected = ['This is a test', 'I changed the test value!', 'I changed it again!'];\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n    translate.setTranslation('en', { \"TEST\": \"I changed the test value!\" });\r\n    translate.setTranslation('en', { \"TEST\": \"I changed it again!\" });\r\n  });\r\n\r\n  it('should interpolate the same param into each streamed value when get strean on translation change', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test {{param}}\" };\r\n    translate.use('en');\r\n\r\n    translate.getStreamOnTranslationChange('TEST', { param: 'with param' }).subscribe((res: string[]) => {\r\n      const expected = 'This is a test with param';\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should be able to stream a translation for the current language', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    translate.stream('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('This is a test');\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should be able to stream a translation of an array for the current language', (done: Function) => {\r\n    let tr = { \"TEST\": \"This is a test\", \"TEST2\": \"This is a test2\" };\r\n    translate.setTranslation('en', tr);\r\n    translate.use('en');\r\n\r\n    translate.stream(['TEST', 'TEST2']).subscribe((res: any) => {\r\n      expect(res).toEqual(tr);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should initially return the same value for streaming and non-streaming get', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    zip(translate.stream('TEST'), translate.get('TEST')).subscribe((value: [string, string]) => {\r\n      const [streamed, nonStreamed] = value;\r\n      expect(streamed).toEqual('This is a test');\r\n      expect(streamed).toEqual(nonStreamed);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should update streaming translations on language change', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    translate.stream('TEST').pipe(take(3), toArray()).subscribe((res: string[]) => {\r\n      const expected = ['This is a test', 'Dit is een test', 'This is a test'];\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n\r\n    translate.setTranslation('nl', { \"TEST\": \"Dit is een test\" });\r\n    translate.use('nl');\r\n    translate.use('en');\r\n  });\r\n\r\n  it('should update lazy streaming translations on translation change', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    const translation$ = translate.getStreamOnTranslationChange('TEST');\r\n\r\n    translate.setTranslation('en', { \"TEST\": \"This is a test2\" });\r\n\r\n    translation$.pipe(first()).subscribe((res: string[]) => {\r\n      const expected = \"This is a test2\";\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should update lazy streaming translations on language change', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    translate.use('en');\r\n\r\n    const translation$ = translate.stream('TEST');\r\n\r\n    translate.setTranslation('nl', { \"TEST\": \"Dit is een test\" });\r\n    translate.use('nl');\r\n\r\n    translation$.pipe(first()).subscribe((res: string[]) => {\r\n      const expected = 'Dit is een test';\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n  });\r\n\r\n  it('should update streaming translations of an array on language change', (done: Function) => {\r\n    const en = { \"TEST\": \"This is a test\", \"TEST2\": \"This is a test2\" };\r\n    const nl = { \"TEST\": \"Dit is een test\", \"TEST2\": \"Dit is een test2\" };\r\n    translate.setTranslation('en', en);\r\n    translate.use('en');\r\n\r\n    translate.stream(['TEST', 'TEST2']).pipe(take(3), toArray()).subscribe((res: any[]) => {\r\n      const expected = [en, nl, en];\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n\r\n    translate.setTranslation('nl', nl);\r\n    translate.use('nl');\r\n    translate.use('en');\r\n  });\r\n\r\n  it('should interpolate the same param into each streamed value', (done: Function) => {\r\n    translations = { \"TEST\": \"This is a test {{param}}\" };\r\n    translate.use('en');\r\n\r\n    translate.stream('TEST', { param: 'with param' }).pipe(take(3), toArray()).subscribe((res: string[]) => {\r\n      const expected = [\r\n        'This is a test with param',\r\n        'Dit is een test with param',\r\n        'This is a test with param'\r\n      ];\r\n      expect(res).toEqual(expected);\r\n      done();\r\n    });\r\n\r\n    translate.setTranslation('nl', { \"TEST\": \"Dit is een test {{param}}\" });\r\n    translate.use('nl');\r\n    translate.use('en');\r\n  });\r\n\r\n  it('should be able to get instant translations', () => {\r\n    translate.setTranslation('en', { \"TEST\": \"This is a test\" });\r\n    translate.use('en');\r\n\r\n    expect(translate.instant('TEST')).toEqual('This is a test');\r\n  });\r\n\r\n  it('should be able to get instant translations of an array', () => {\r\n    let tr = { \"TEST\": \"This is a test\", \"TEST2\": \"This is a test2\" };\r\n    translate.setTranslation('en', tr);\r\n    translate.use('en');\r\n\r\n    expect(translate.instant(['TEST', 'TEST2'])).toEqual(tr);\r\n  });\r\n\r\n  it('should return the key if instant translations are not available', () => {\r\n    translate.setTranslation('en', { \"TEST\": \"This is a test\" });\r\n    translate.use('en');\r\n\r\n    expect(translate.instant('TEST2')).toEqual('TEST2');\r\n  });\r\n\r\n  it('should trigger an event when the translation value changes', () => {\r\n    translate.setTranslation('en', {});\r\n    translate.onTranslationChange.subscribe((event: TranslationChangeEvent) => {\r\n      expect(event.translations).toBeDefined();\r\n      expect(event.translations[\"TEST\"]).toEqual(\"This is a test\");\r\n      expect(event.lang).toBe('en');\r\n    });\r\n    translate.set(\"TEST\", \"This is a test\", 'en');\r\n  });\r\n\r\n  it('should trigger an event when the lang changes', () => {\r\n    let tr = { \"TEST\": \"This is a test\" };\r\n    translate.setTranslation('en', tr);\r\n    translate.onLangChange.subscribe((event: LangChangeEvent) => {\r\n      expect(event.lang).toBe('en');\r\n      expect(event.translations).toEqual(tr);\r\n    });\r\n    translate.use('en');\r\n  });\r\n\r\n  it('should be able to reset a lang', (done: Function) => {\r\n    translate.use('en');\r\n\r\n    \/\/ this will request the translation from the backend because we use a static files loader for TranslateService\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual(translations['TEST']);\r\n\r\n      \/\/ reset the lang as if it was never initiated\r\n      translate.resetLang('en');\r\n\r\n      expect(translate.instant('TEST')).toEqual('TEST');\r\n\r\n      translate.get('TEST').subscribe((res2: string) => {\r\n        expect(res2).toEqual('TEST'); \/\/ because the loader is \"pristine\" as if it was never called\r\n        done();\r\n      });\r\n    });\r\n  });\r\n\r\n  it('should be able to reload a lang', () => {\r\n    translations = {};\r\n    translate.use('en');\r\n\r\n    \/\/ this will request the translation from the loader\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(res).toEqual('TEST');\r\n\r\n      translations = { \"TEST\": \"This is a test 2\" };\r\n\r\n      \/\/ reset the lang as if it was never initiated\r\n      translate.reloadLang('en').subscribe((res2: string) => {\r\n        expect(translate.instant('TEST')).toEqual(translations['TEST']);\r\n      });\r\n    });\r\n  });\r\n\r\n  it('should be able to add new langs', () => {\r\n    translate.addLangs(['pl', 'es']);\r\n    expect(translate.getLangs()).toEqual(['pl', 'es']);\r\n    translate.addLangs(['fr']);\r\n    translate.addLangs(['pl', 'fr']);\r\n    expect(translate.getLangs()).toEqual(['pl', 'es', 'fr']);\r\n\r\n    \/\/ this will request the translation from the backend because we use a static files loader for TranslateService\r\n    translate.use('en').subscribe((res: string) => {\r\n      expect(translate.getLangs()).toEqual(['pl', 'es', 'fr', 'en']);\r\n      translate.addLangs(['de']);\r\n      expect(translate.getLangs()).toEqual(['pl', 'es', 'fr', 'en', 'de']);\r\n    });\r\n  });\r\n\r\n  it('should be able to get the browserLang', () => {\r\n    let browserLang = translate.getBrowserLang();\r\n    expect(browserLang).toBeDefined();\r\n    expect(typeof browserLang === 'string').toBeTruthy();\r\n  });\r\n\r\n  it('should be able to get the browserCultureLang', () => {\r\n    let browserCultureLand = translate.getBrowserCultureLang();\r\n    expect(browserCultureLand).toBeDefined();\r\n    expect(typeof browserCultureLand === 'string').toBeTruthy();\r\n  });\r\n\r\n  it('should not make duplicate getTranslation calls', fakeAsync(() => {\r\n    let getTranslationCalls = 0;\r\n    spyOn(translate.currentLoader, 'getTranslation').and.callFake(() => {\r\n      getTranslationCalls += 1;\r\n      return timer(1000).pipe(mapTo(of(translations)));\r\n    });\r\n    translate.use('en');\r\n    translate.use('en');\r\n\r\n    tick(1001);\r\n\r\n    expect(getTranslationCalls).toEqual(1);\r\n  }));\r\n\r\n  it('should subscribe to the loader just once', () => {\r\n    let subscriptions = 0;\r\n    spyOn(translate.currentLoader, 'getTranslation').and.callFake(() => {\r\n      return defer(() => {\r\n        subscriptions++;\r\n        return of(translations);\r\n      });\r\n    });\r\n    translate.use('en');\r\n    translate.use('en');\r\n    translate.use('en').subscribe();\r\n    translate.use('en').subscribe();\r\n\r\n    expect(subscriptions).toEqual(1);\r\n  });\r\n\r\n  it('should compile translations only once, even when subscribing to translations while translations are loading', fakeAsync(() => {\r\n    spyOn(translate.currentLoader, 'getTranslation').and.callFake(() => {\r\n      return timer(1000).pipe(mapTo(of(translations)));\r\n    });\r\n\r\n    let translateCompilerCallCount = 0;\r\n    spyOn(translate.compiler, 'compile').and.callFake((value) => {\r\n      ++translateCompilerCallCount;\r\n      return value;\r\n    });\r\n    spyOn(translate.compiler, 'compileTranslations').and.callFake((value) => {\r\n      ++translateCompilerCallCount;\r\n      return value;\r\n    });\r\n\r\n    translate.setDefaultLang('en-US');\r\n    translate.get('TEST1').subscribe();\r\n    translate.get('TEST2').subscribe();\r\n    translate.get('TEST3').subscribe();\r\n    translate.get('TEST4').subscribe();\r\n\r\n    tick(1001);\r\n\r\n    expect(translateCompilerCallCount).toBe(1);\r\n  }));\r\n});"
    let rxwebContent: any = "import { TestBed, fakeAsync, async } from \"@angular\/core\/testing\";\r\nimport { Observable, of } from \"rxjs\";\r\nimport { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, } from \"@ngx-translate\/core\";\r\nimport { TranslateModule, TranslateService } from '@rxweb\/ngx-translate-extension'\r\nimport { RxTranslateModule } from \"@rxweb\/translate\"\r\n\r\nlet translations: any = { \"TEST\": \"This is a test\" };\r\nlet fakeTranslation: any = { \"NOT_USED\": \"not used\" };\r\n\r\nclass FakeLoader implements TranslateLoader {\r\n  getTranslation(lang: string): Observable<any> {\r\n    if (lang === 'fake') {\r\n      return of(fakeTranslation);\r\n    }\r\n\r\n    return of(translations);\r\n  }\r\n}\r\n\r\ndescribe('MissingTranslationHandler', () => {\r\n  let translate: TranslateService;\r\n  let missingTranslationHandler: MissingTranslationHandler;\r\n\r\n  class Missing implements MissingTranslationHandler {\r\n    handle(params: MissingTranslationHandlerParams) {\r\n      return \"handled\";\r\n    }\r\n  }\r\n\r\n  class MissingObs implements MissingTranslationHandler {\r\n    handle(params: MissingTranslationHandlerParams): Observable<any> {\r\n      return of(`handled: ${params.key}`);\r\n    }\r\n  }\r\n\r\n  let prepare = ((handlerClass: Function, defaultLang: boolean = true) => {\r\n    TestBed.configureTestingModule({\r\n      imports: [\r\n        TranslateModule.forRoot({\r\n          useDefaultLang: defaultLang,\r\n          loader: FakeLoader\r\n        }),\r\n        RxTranslateModule.forRoot({\r\n          isTest: true,\r\n          forNgxTranslate: true,\r\n          cacheLanguageWiseObject: true,\r\n        })\r\n      ],\r\n      providers: [\r\n        { provide: MissingTranslationHandler, useClass: handlerClass }\r\n      ]\r\n    });\r\n    translate = TestBed.get(TranslateService);\r\n    missingTranslationHandler = TestBed.get(MissingTranslationHandler);\r\n    console.log(missingTranslationHandler);\r\n  });\r\n\r\n  afterEach(() => {\r\n    translate = undefined;\r\n    translations = { \"TEST\": \"This is a test\" };\r\n    missingTranslationHandler = undefined;\r\n  });\r\n\r\n  it('should use the MissingTranslationHandler when the key does not exist', () => {\r\n    prepare(Missing);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    translate.get('nonExistingKey').subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ key: 'nonExistingKey' }));\r\n      \/\/test that the instance of the last called argument is string\r\n      expect(res).toEqual('handled');\r\n    });\r\n  });\r\n\r\n  it('should propagate interpolation params when the key does not exist', () => {\r\n    prepare(Missing);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    let interpolateParams = { some: 'params' };\r\n\r\n    translate.get('nonExistingKey', interpolateParams).subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ interpolateParams: interpolateParams }));\r\n      \/\/test that the instance of the last called argument is string\r\n      expect(res).toEqual('handled');\r\n    });\r\n  });\r\n\r\n  it('should propagate TranslationService params when the key does not exist', () => {\r\n    prepare(Missing);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    let interpolateParams = { some: 'params' };\r\n\r\n    translate.get('nonExistingKey', interpolateParams).subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ translateService: translate }));\r\n      \/\/test that the instance of the last called argument is string\r\n      expect(res).toEqual('handled');\r\n    });\r\n  });\r\n\r\n  it('should return the key when using MissingTranslationHandler & the handler returns nothing', () => {\r\n    class MissingUndef implements MissingTranslationHandler {\r\n      handle(params: MissingTranslationHandlerParams) {\r\n      }\r\n    }\r\n    prepare(MissingUndef);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    translate.get('nonExistingKey').subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ key: 'nonExistingKey' }));\r\n      expect(res).toEqual('nonExistingKey');\r\n    });\r\n  });\r\n\r\n  it('should not call the MissingTranslationHandler when the key exists', () => {\r\n    prepare(Missing);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    translate.get('TEST').subscribe((t) => {\r\n      expect(missingTranslationHandler.handle).not.toHaveBeenCalled();\r\n    });\r\n  });\r\n\r\n  it('should use the MissingTranslationHandler when the key does not exist & we use instant translation', () => {\r\n    prepare(Missing);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n\r\n    expect(translate.instant('nonExistingKey')).toEqual('handled');\r\n    expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ key: 'nonExistingKey' }));\r\n  });\r\n\r\n  it('should wait for the MissingTranslationHandler when it returns an observable & we use get', () => {\r\n    prepare(MissingObs);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n\r\n    translate.get('nonExistingKey').subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ key: 'nonExistingKey' }));\r\n      expect(res).toEqual('handled: nonExistingKey');\r\n    });\r\n  });\r\n\r\n  it('should wait for the MissingTranslationHandler when it returns an observable & we use get with an array', () => {\r\n    let tr = {\r\n      nonExistingKey1: 'handled: nonExistingKey1',\r\n      nonExistingKey2: 'handled: nonExistingKey2',\r\n      nonExistingKey3: 'handled: nonExistingKey3'\r\n    };\r\n\r\n    prepare(MissingObs);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n\r\n    translate.get(Object.keys(tr)).subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledTimes(3);\r\n      expect(res).toEqual(tr as any);\r\n    });\r\n  });\r\n\r\n  it('should not wait for the MissingTranslationHandler when it returns an observable & we use instant', () => {\r\n    prepare(MissingObs);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n\r\n    expect(translate.instant('nonExistingKey')).toEqual('nonExistingKey');\r\n  });\r\n\r\n  it('should not wait for the MissingTranslationHandler when it returns an observable & we use instant with an array', () => {\r\n    let tr = {\r\n      nonExistingKey1: 'handled: nonExistingKey1',\r\n      nonExistingKey2: 'handled: nonExistingKey2',\r\n      nonExistingKey3: 'handled: nonExistingKey3'\r\n    };\r\n\r\n    prepare(MissingObs);\r\n    translate.use('en');\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n\r\n    expect(translate.instant(Object.keys(tr))).toEqual({\r\n      nonExistingKey1: 'nonExistingKey1',\r\n      nonExistingKey2: 'nonExistingKey2',\r\n      nonExistingKey3: 'nonExistingKey3'\r\n    } as any);\r\n  });\r\n\r\n  it('should not return default translation, but missing handler', () => {\r\n    prepare(Missing, false);\r\n    translate.use('en');\r\n    translate.use('fake');\r\n\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    translate.get('TEST').subscribe((res: string) => {\r\n      expect(missingTranslationHandler.handle).toHaveBeenCalledWith(jasmine.objectContaining({ key: 'TEST' }));\r\n      \/\/test that the instance of the last called argument is string\r\n      expect(res).toEqual('handled');\r\n    });\r\n  });\r\n\r\n  it('should return default translation', () => {\r\n    prepare(Missing, true);\r\n    translate.use('en');\r\n    \/\/translate.use('fake');\r\n\r\n    spyOn(missingTranslationHandler, 'handle').and.callThrough();\r\n    translate.get('TEST').subscribe((res: string) => {\r\n\r\n      expect(res).toEqual('This is a test');\r\n    });\r\n  });\r\n});\r\n"

    var diff = Diff.createTwoFilesPatch("ngx-translate/translate.service.spec.ts", "rxweb/translate.service.spec.ts", ngxContent, rxwebContent);

    let outputHtml = Diff2Html.html(diff, {
      drawFileList: true, matching: 'lines', outputFormat: 'side-by-side'
    });
    this.outputHtml = outputHtml;
  }
}