import {Component, Input} from '@angular/core';
import { STATIC_TRANSLATIONS } from '../../data/static-translations';
import { SCOPED_TRANSLATIONS } from '../../data/scoped-translation';
import { CONDITIONAL_SCOPED_TRANSLATIONS } from '../../data/conditional-scoped-translation';
import { ASYNC_TRANSLATIONS } from '../../data/async-translation';
import { BINDING_BY_KEY_NAME_TRANSLATIONS } from '../../data/binding-by-key-name-translation';
import { ON_DEMAND_TRANSLATIONS } from '../../data/on-demand-translation';
import { RxTranslation, translate } from '@rxweb/translate';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { AppCodeComponent } from '../../shared/app-code/app-code.component';

@Component({
    templateUrl:'./binding.component.html',
    selector:'app-binding',
    entryComponents: [AppCodeComponent]
})
export class BindingComponent {

    rightSidebarLinks: any = [{ "id": "binding", "title": "Binding", "subLink": null }, { "id": "static-translation", "title": "Static Translation", "subLink": null }, { "id": "scoped-translation", "title": "Scoped Translation", "subLink": null }, { "id": "conditional-scoped-translation", "title": "Conditional Scoped Translation", "subLink": null }, { "id": "async-translation", "title": "Async Translation", "subLink": null }, { "id": "binding-by-key-name", "title": "Binding By KeyName", "subLink": null }, { "id": "on-demand-scope-translation", "title": "On Demand Scoped Translation", "subLink": null }];
    staticTranslations: any = STATIC_TRANSLATIONS
    scopedTranslations:any = SCOPED_TRANSLATIONS
    conditionalTranslations:any = CONDITIONAL_SCOPED_TRANSLATIONS
    asyncTranslations:any = ASYNC_TRANSLATIONS;
    bindingByKeyNameTranslations:any = BINDING_BY_KEY_NAME_TRANSLATIONS;
    ondemandtranslations:any = ON_DEMAND_TRANSLATIONS;

    @translate()
    multilingualContent: { [key: string]: any }

    constructor(private rxTranslation: RxTranslation) { }

    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }
}
