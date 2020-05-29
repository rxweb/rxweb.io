export const CODE_EXAMPLE_TITLES: { [key: string]: any } = {
    plainText: 'Plain Text Code Example ',
    conditionalText: 'Condition Text Code Example',
    scopedText: 'Scoped Text Code Example',
    reuseText: 'Reuse Text Code Example',
    asyncSource: 'Async Source Code Example',
    onDemandText: 'On Demand Text Code Example',
    validationMessage: 'Validation Message Code Example',
    validationMessageWithParameters: 'Validation Message With Parameters Code Example',
    validationMessageWithArrayParameters: 'Validation Message With Array Parameters Code Example',
    resolveTextByKeyName: 'Resolve Text By KeyName',
    byUrl: 'Translatiion By Url Code Example',
    throughCode: 'Translation Through Code Example',
    resolveContentByPageComponent: 'Resolve Content By Page Component Code Example',
    resolveContentBySharedComponent: 'Resolve Content By Shared Component Code Example',
    automaticallySetPageTitle: 'Automatically Set Page Title Code Example',
    preload: 'Preload Module Strategy Code Example',
    fixedLanguage: 'Fixed Language'
}
export const EXAMPLE_TITLES: { [key: string]: any } = {
    json: 'JSON',
    typescript: 'COMPONENT',
    html: 'HTML',
    ts: 'SERVICE'
}
export const CODE_EXAMPLES: { [key: string]: any } = {
    plainText: {
        json: {
            en: `{
"plainText":"Showing Text in English."
}`,
            fr: `{
    "plainText": "Affichage du texte en français."
}`
        } ,
        typescript: `
        @translate() global:{[key:string]:any}
        `,
        html: `<div class="badge badge-warning"> {{global.plainText}}</div>
            `
    },
    scopedText: {
        json: {
            en: `{
"scopedText": "Hey {{name}}!"
}`,
            fr: `{
    "scopedText": "Hey {{name}}!"
}`
        } ,
        typescript: `
  @translate() global:{[key:string]:any};

name:string = "John";
`,
        html: `<input type="text" [(ngModel)]="name" [ngModelOptions]="{standalone: true}" class="form-control translate-form-control">
<div class="margin-left badge"> {{global.scopedText}}</div>`
    },
    conditionalText: {
        json: {
            en: `{
    "conditionalText": "this.meridiem == 'am' ? 'Good Morning' : 'Have a Good Day'"
}`,
            fr: `{
    "conditionalText": "this.meridiem == 'am' ? 'ante meridiem' : 'post meridiem'"
}`
        },
        typescript: `
  @translate() global:{[key:string]:any};

meridiem:string = "am";

changeMeridiem(){
    this.meridiem = this.meridiem == "am" ? "pm" : "am";
}
`,
        html: `<div class="badge">{{global.conditionalText}}</div>`
    },
    reuseText: {
        json: {
            en: `{
    "reuseText": "{{global.scopedText}} {{global.conditionalText}}",
    "scopedText": "Hey {{name}}!",
    "conditionalText": "this.meridiem == 'am' ? 'Good Morning' : 'Have a Good Day'"
}`,
            fr: `{
    "reuseText": "{{global.scopedText}} {{global.conditionalText}}",
  "scopedText": "Hey {{name}}!",
  "conditionalText": "this.meridiem == 'am' ? 'Bonjour' : 'Bonne journée'"
}`
        },
        typescript: `@translate() global:{[key:string]:any}`,
        html: `<div class="badge {{badgeClass}}">{{global.reuseText}}</div>
            `
    },
    asyncSource: {
        typescript: `@asyncTranslate({
    serviceModel: CountryService,
    serviceMethod: CountryService.prototype.get
})
countries: any;`,
        ts: `
constructor(private http: HttpClient, private rxTranslation: RxTranslation) {}

get() { 
    return this.http.get("assets/i18n/" + this.rxTranslation.language + "/countries." + this.rxTranslation.language + ".json")
}`,
        html: `     <select name="control" class="form-control">
    <option *ngFor="let item of countries | async" [value]="item.countryId">{{item.countryName}}</option>
</select>
            `
    },
    onDemandText: {
        json: {
            en: `"selectedRecord": "You have selected record of '{name}'"`,
            fr: `"selectedRecord": "Vous avez sélectionné l'enregistrement de '{name}'"`
        },
        typescript: `@translate() global:{[key:string]:any}
users: any[] = USERS;
message: string;

selectUser(user) {
    this.message = this.rxTranslation.translate(
        this.global.selectedRecord, user
    );
}`,

        html: `
<div class="col-sm-6 mx-auto mt-2">
    <div class="alert alert-primary" role="alert">
        {{message}}
    </div>
</div>
            `
    },
    resolveTextByKeyName: {
        json: {
            en: `{
  "keyOne": "Key One",
  "nested": {
    "keyOne": "Nested Key One"
  }
}`,
            fr: `{
  "keyOne": "Key One",
  "nested": {
    "keyOne": "Clé imbriquée"
  }
}`
        },
        typescript: `@translate() global:{[key:string]:any}
keys: string[] = ["keyOne", "nested.keyOne"];`,
        html: `      <table class="table table-sm example-table-color ">
    <tbody>
        <tr>
            <th style="width:50%">Key Name</th>
            <th style="width:50%">Key Value</th>
        </tr>
        <tr *ngFor="let key of keys;">
            <td><span class="badge badge-light">{{key}}</span></td>
            <td>
                <span class="badge {{badgeClass}}">{{global.get(key)}}</span>
            </td>
        </tr>
    </tbody>
</table>`
    },
    validationMessage: {
        json: {
            en: `{
"validationErrorMessages": {
    "required": "This Field is Required."
  },
}`,
            fr: `{
"validationErrorMessages": {
    "required": "Ce champ est requis."
  }
}`
        },
        typescript: `@translate() global:{[key:string]:any}
formGroup: FormGroup;

ngOnInit() {
    this.formGroup = this.formBuilder.group({
        fullName: ['', Validators.required]
    })
}`,
        html: `<form [formGroup]="formGroup">
    <input type="text" formControlName="fullName" class="form-control"/>
    <span>{{formGroup.controls.fullName.errors.required.message}}</span>
</form>`
    },
    validationMessageWithParameters: {
        json: {
            en: `{
"validationErrorMessages": {
    "maxlength": "Maximum length is reached"
  },
}`,
            fr: `{
"validationErrorMessages": {
    "maxlength": "La longueur maximale est atteinte"
  }
}`
        },
        typescript: `@translate() global:{[key:string]:any}
formGroup: FormGroup;

ngOnInit() {
    this.formGroup = this.formBuilder.group({
        designation: ['Software', Validators.maxLength(5)]
    })
}`,
        html: `<form [formGroup]="formGroup">
    <input type="text" formControlName="designation" class="form-control"/>
    <span>{{formGroup.controls.designation.errors.maxlength.message}}</span>
</form>`
    },
    validationMessageWithArrayParameters: {
        json: {
            en: `{
"validationErrorMessages": {
    "maxlength": "Maximum length is reached"
  },
}`,
            fr: `{
"validationErrorMessages": {
    "maxlength": "La longueur maximale est atteinte"
  }
}`
        },
        typescript: `@translate() global:{[key:string]:any}
formGroup: FormGroup;

ngOnInit() {
    this.formGroup = this.formBuilder.group({
        designation: ['Software', Validators.maxLength(5)]
    })
}`,
        html: `      <form [formGroup]="formGroup">
    <input type="text" formControlName="designation" class="form-control"/>
    <span>{{formGroup.controls.designation.errors.maxlength.message}}</span>
</form>`
    },
    byUrl: {
        typescript: `
constructor(private router: Router) {}

navigate(languageCode: string) {
    this.router.navigate([languageCode, "lazy-load"])
}`,
        html: `
        <a class="blue-link" (click)="navigate('en')">English</a>
<a class="blue-link" (click)="navigate('fr')">French</a>
        `
    },
    throughCode: {
        typescript: `
constructor(private rxTranslation: RxTranslation) {}

changeLanguage(languageCode: string) {
    this.rxTranslation.change(languageCode);
}`,
        html: `
<a class="blue-link" (click)="changeLanguage('en')">English</a>
<a class="blue-link" (click)="changeLanguage('fr')">French</a>
        `
    },
    fixedLanguage: {
        json: {
            en: `{
    "text": "This is fixed content in English."
}`,
            fr: `{
    "text": "Il s'agit d'un contenu fixe en français."
}`
        },
        typescript: `
@translate({ translationName: 'fixed-language', language:'en' }) fixedLanguage: any;`,
        html: `
<div class="badge badge-warning">{{fixedLanguage.text}}</div>
        `
    },
    resolveContentByPageComponent: {
        json: {
            en: `{
    "text": "The content is resolved based upon routed page component."
}`,
            fr: `{
    "text": "Le contenu est résolu en fonction du composant de page routé."
}`
        },
        typescript: `
@translate({ translationName: 'lazy-load' }) lazyLoadContent: {[key:string]:any};
`,
        html: `
<div class="badge">{{lazyLoadContent.text}}</div>
        `
    },
    resolveContentBySharedComponent: {
        json: {
            en: `{
    "text": "This is resolved because it's used in routed page component."
}`,
            fr: `{
    "text": "Ce problème est résolu car il est utilisé dans le composant de page routé."
}`
        },
        typescript: `
@Component({
    selector:'app-lazy-load-child', 
    template: '<div class="badge {{badgeClass}}">{{lazyLoadChild.text}}</div>',
})
export class LazyLoadChildComponent {
    @translate({ translationName: 'lazy-load-child' }) lazyLoadChild: any;
}
`,
        html: `
<div class="col-sm-8 col-style">
    <app-lazy-load-child *rxTranslate="true"></app-lazy-load-child>
</div>
        `
    },
    automaticallySetPageTitle: {
        json: {
            en: `{
    "pageTitle": "Translation Example in English."
}`,
            fr: `{
    "pageTitle": "Exemple de traduction en français."
}`
        },
        typescript: `
@translate({ translationName: 'lazy-load' }) lazyLoadContent: {[key:string]:any};
`
    },
    preload: {
        typescript: {
            module: `
NgModule({
  imports: [
    RxTranslateModule.forRoot({
      preloadingStrategy: true,
      cacheLanguageWiseObject: true,
      globalFilePath:
        "assets/i18n/{{language-code}}/global.{{language-code}}.json",
      filePath:
        "assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json",
      
    })
  ],
  exports: [RxTranslateModule]
})
export class RxWebModule {}
`
        },
        ts: {
            route: `
            @NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules  })],
    exports: [RouterModule]
})
export class AppRoutingModule { }`
        }
    },
}
