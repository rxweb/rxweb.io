import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-vue-home',
    templateUrl: './vue-home-page.component.html'
})
export class VueHomePageComponent implements OnInit {

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
      type: 'code', fixText: '.', codes: [{text:'@required',class:"typeit-start-text"},{ text: '({conditionalExpression:(x:', class: '' }, { text: 'any', class: 'typeit-parameter-type' }, { text: ')=> x.country == ', class: '' }, { text: `'India'`, class: 'typeit-string-text' }, { text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"userName",class:"'typeit-start-text'"},{text:':'},{text:"string",class:"type-it-datatype"},{text:';'}]
    },
    {
      type: 'code', fixText: '', codes: [{text:'numeric',class:"typeit-start-text"},{ text: '({ allowDecimal:', class: '' }, { text: ' true', class: 'typeit-start-text' }, { text: ', isFormat: ', class: '' }, { text: `true `, class: 'typeit-start-text' }, { text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"price",class:"'typeit-start-text'"},{text:':'},{text:"number",class:"type-it-datatype"},{text:';'}]
    },
    {
      type: 'code', fixText: '', codes: [{text:'@compare',class:"typeit-start-text"}, { text: '({ fieldName:', class: '' }, { text: ` 'password' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"comparePassword",class:"'typeit-start-text'"},{text:':'},{text:"string",class:"type-it-datatype"},{text:';'}]
    },
    {
      type: 'code', fixText: '', codes: [{text:'@maxDate',class:"typeit-start-text"},{ text: '({ fieldName:', class: '' }, { text: ` 'todayDate' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"birthDate",class:"'typeit-start-text'"},{text:':'},{text:"string",class:"type-it-datatype"},{text:';'}]
    },
    {
      type: 'code', fixText: '', codes: [{text:'@file',class:"typeit-start-text"},{ text: '({ minFiles:', class: '' }, { text: ' 1', class: 'typeit-start-text' }, { text: ', maxFiles: ', class: '' }, { text: `5 `, class: 'typeit-start-text' }, { text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"totalImageFiles",class:"'typeit-start-text'"},{text:':'},{text:"string",class:"type-it-datatype"},{text:';'}]
    }
  
  ]
  textIndex: number = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private applicationBroadcast:ApplicationBroadcaster
  ) {
  }

  bindText(character: string, className: string) {
    if(this.isExistElement())
      document.getElementById("code_change_vue").innerHTML += `<span class='${className}'>${character}</span>`
  }
isExistElement(){
    let codeElement = document.getElementById("code_change_vue");
    return codeElement != null;
}
  removeChildNodes() {
    let codeElement = document.getElementById("code_change_vue");
    if(this.isExistElement()){
      if (codeElement.children.length > this.currentTextGroup.fixText.length) {
        if(this.isExistElement())
          document.getElementById("code_change_vue").removeChild(codeElement.children.item(codeElement.children.length - 1))
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
          if (isFirstTime && document.getElementById("code_change_vue").children.length > 0 && this.totalIndex == 0)
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
    document.title = "RxWeb - clean code built with purpose";
    window.setTimeout(() => { this.isAnimated = true },500)
    
   
      this.showComponent = true;
      var t = setTimeout(() => { this.changeText();},500)
    
  }

  login():void{

  }

  ngOnDestroy(){
    let childElement = document.getElementById("code_change_vue");
    if(childElement != null){
      let rxwebbody = childElement.parentNode;
      rxwebbody.removeChild(childElement)
    }
    
  }
}
