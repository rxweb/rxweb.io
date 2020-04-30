import {Component, Input} from '@angular/core';
import { SHARED_COMPONENT_TRANSLATIONS } from '../../data/shared-component-translations';
import { PAGE_DRIVEN_TRANSLATIONS } from '../../data/page-driven-translations';
import { RxTranslation, translate } from '@rxweb/translate';
import { PRELOAD_TRANSLATIONS } from '../../data/preload-translations';

@Component({
    templateUrl:'./translation-strategy.component.html',
    selector:'app-translation-strategy'
})
export class TranslationStrategyComponent {

    rightSidebarLinks: any = [{ "id": "translation-strategy", "title": "Translation Strategy", "subLink": null }, { "id": "resolve-translation-page-wise", "title": "Resolve Translation Page Wise", "subLink": null }, { "id": "resolve-translation-of-shared-component", "title": "Resolve Translation of Shared Component", "subLink": null }, { "id": "preload-translation-in-background", "title": "Preload Translation in Background", "subLink": null }];
    pageDrivenTranslations: any = PAGE_DRIVEN_TRANSLATIONS
    sharedComponentTranslations: any = SHARED_COMPONENT_TRANSLATIONS
    preloadTranslations: any = PRELOAD_TRANSLATIONS

    @translate()
    multilingualContent: { [key: string]: any }

    constructor(private rxTranslation: RxTranslation) { }

    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }
}
