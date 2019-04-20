import { Component, OnInit,OnDestroy, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from "@rxweb/reactive-form-validators"
import {User} from "./model/user.model";
import { FormBuilderConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { ApplicationBroadcaster } from "@rx/core";
import { AuthService } from 'src/app/domain/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit,OnDestroy {
  userFormGroup: FormGroup;
  userForm:FormGroup;
  userInfoFormGroup:FormGroup;
  userModelFormGroup: FormGroup
  user:User;
  codeContent:any;
  showComponent:boolean = false;
  comparePasswordTab:string = "component";
  conditionalValidationRequiredTab:string = "component";
  decoratorbasedModelValidationTab:string = "component";
  dynamicValidationTab:string = "component";
  isLoggedIn: boolean = false;
  isCurrentTextDone: boolean = false;
  totalIndex = 0;
  codeIndex: number = 0;
  isAnimated: boolean = false;
  currentTextGroup: {[key:string]:any}
  typeItTexts = [
    {
      type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'RxwebValidators.', class: 'typeit-start-text' },{ text: 'required({conditionalExpression:(x:', class: '' }, { text: 'any', class: 'typeit-parameter-type' }, { text: ')=> x.country == ', class: '' }, { text: `'India'`, class: 'typeit-string-text' }, { text: `})`, class: '' }]
    },
    {
      type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'numeric({ allowDecimal:', class: '' }, { text: ' true', class: 'typeit-start-text' }, { text: ', isFormat: ', class: '' }, { text: `true `, class: 'typeit-start-text' }, { text: `})`, class: '' },{ text: `                      `, class: '' }]
    },
    {
      type: 'code', fixText: 'RxwebValidators.', codes: [ { text: 'compare({ fieldName:', class: '' }, { text: ` 'password' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{ text: `                                 `, class: '' }]
    },
    {
      type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'maxDate({ fieldName:', class: '' }, { text: ` 'todayDate' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{ text: `                                `, class: '' }]
    },
    {
      type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'file({ minFiles:', class: '' }, { text: ' 1', class: 'typeit-start-text' }, { text: ', maxFiles: ', class: '' }, { text: `5 `, class: 'typeit-start-text' }, { text: `})`, class: '' },{ text: `                      `, class: '' },{ text: `             `, class: '' }]
    },
    {
      type: 'code', fixText: '', codes: [{ text: 'unique()', class: '' },{ text: `                      `, class: '' },{ text: `                      `, class: '' },{ text: `           `, class: '' }]
    }
  ]
  textIndex: number = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private rxFormBuilder:RxFormBuilder,private applicationBroadcast:ApplicationBroadcaster,private auth: AuthService
  ) {
  }

  bindText(character: string, className: string) {
    if(this.isExistElement())
      document.getElementById("code_change").innerHTML += `<span class='${className}'>${character}</span>`
  }
isExistElement(){
    let codeElement = document.getElementById("code_change");
    return codeElement != null;
}
  removeChildNodes() {
    let codeElement = document.getElementById("code_change");
    if(this.isExistElement()){
      if (codeElement.children.length > this.currentTextGroup.fixText.length) {
        if(this.isExistElement())
          document.getElementById("code_change").removeChild(codeElement.children.item(codeElement.children.length - 1))
        var t = setTimeout(() => this.removeChildNodes(), 10);
      } else {
        this.totalIndex++;
        this.codeIndex = 0;
        this.changeCodeText();
      }
    }
  }


  processCharacters(textGroup: { [key: string]: any }) {
    if(this.isExistElement()){
      if (textGroup.text.length > this.textIndex) {
        this.bindText(textGroup.text.charAt(this.textIndex), textGroup.class);
        this.textIndex++;
        var t = setTimeout(() => { this.processCharacters(textGroup) }, 30)
      } else {
        this.textIndex = 0;
        this.changeCodeText()
      }
    }
    
  }

  changeCodeText(isFirstTime:boolean = false) {
    if(this.isExistElement()){
      if (this.typeItTexts.length > this.totalIndex) {
        if (this.typeItTexts[this.totalIndex].codes.length > this.codeIndex) {
          this.currentTextGroup = this.typeItTexts[this.totalIndex]
          if (isFirstTime && document.getElementById("code_change").children.length > 0 && this.totalIndex == 0)
            this.codeIndex++;
          this.processCharacters(this.typeItTexts[this.totalIndex].codes[this.codeIndex])
          this.codeIndex++;
        } else {
          var t = setTimeout(() => this.removeChildNodes(), 10);
  
          //this.changeCodeText();
        }
      } else {
        this.totalIndex = 0;
        this.changeText();
      }
    }
  }
  changeText() {
    if(this.isExistElement()){
      if (this.typeItTexts.length > this.totalIndex) {
        this.changeCodeText(true)
        //this.totalIndex++;
      } 
    }
  }

  ngOnInit(): void {
    
    window.setTimeout(() => { this.isAnimated = true },500)
    
    this.isLoggedIn = false;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    }
    this.applicationBroadcast.urlBroadCast(true);
    this.userFormGroup = this.formBuilder.group({
      password: ['',],
      confirmPassword: ['', RxwebValidators.compare({ fieldName: 'password' })],
    });
    this.userForm = this.formBuilder.group({
      country:[''],
      identityNumber:['',RxwebValidators.required({conditionalExpression:(x) => x.country == 'India' })]
    });
    this.user = new User();
    this.userInfoFormGroup = this.rxFormBuilder.formGroup(this.user);
    this.http.get('assets/json/home.json?v='+environment.appVersion).subscribe((response:object) => {
        this.codeContent = response;
    this.http.get('assets/json/dynamic-validation.json?v='+environment.appVersion).subscribe((dynamicValidationConfiguration:any) => {
      
        this.userModelFormGroup = this.rxFormBuilder.group({
          firstName:['Bharat']
        },
        new FormBuilderConfiguration( { dynamicValidation: dynamicValidationConfiguration,'genericEntities':{} }));
      this.showComponent = true;
      var t = setTimeout(() => { this.changeText();},500)
      });
    })
  }

  login():void{
    this.auth.login();
  }

  ngOnDestroy(){
    let childElement = document.getElementById("code_change");
    if(childElement != null){
      let rxwebbody = childElement.parentNode;
      rxwebbody.removeChild(childElement)
    }
    
  }
}
