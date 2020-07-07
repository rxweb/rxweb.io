import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from "@rxweb/reactive-form-validators"

import { FormBuilderConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './angular-home.component.html',
})

export class AngularHomeComponent implements OnInit {
  totalIndex = 0;
  codeIndex: number = 0;
  textIndex: number = 0;
  currentTextGroup: {[key:string]:any}
  typeItTexts = [
    {
      type: 'code',fixText: '',  codes: [{ text: '@required', class: 'typeit-start-text' },{ text: '({conditionalExpression:(x:', class: '' }, { text: 'any', class: 'typeit-parameter-type' }, { text: ')=> x.country == ', class: '' }, { text: `'India'`, class: 'typeit-string-text' }, { text: `})`, class: '' }, {text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"userName",class:"'typeit-start-text'"},{text:':'},{text:"string",class:"type-it-datatype"},{text:';'} ]
    },
   
    {
      type: 'code',fixText: '',  codes: [ { text: 'RxwebValidators.', class: 'typeit-start-text' },{ text: 'compare({ fieldName:', class: '' }, { text: ` 'password' `, class: 'typeit-string-text' }, { text: `})`, class: '' }]
    },
    {
      type: 'code', fixText: '', codes: [{ text: '@http', class: 'typeit-start-text' }, { text: `({`, class: '' },{text:" hostKey:",class:"typeit-parameter-type"}, {text:"'local'",class:"type-it-datatype"},{text:"path:",class:"typeit-parameter-type"}, {text:"'api/values'",class:"type-it-datatype"},{ text: `})`, class: '' },{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"export",class:"type-it-this-text"},{text:" class",class:"type-it-this-text"},{text:" User",class:"typeit-start-text"},{text:' extends',class:"type-it-this-text"},{text:" RxHttp",class:"typeit-start-text"},{text:'{'},{text:'  }'} ]
    },
    {
      type: 'code', fixText: '',codes: [{ text: 'let', class: 'typeit-start-text' },{ text: ' items', class: 'typeit-start-text' }, {text:":"},{ text: 'List', class: 'typeit-start-text' },{text:"<"},{text:"UserModel"},{text:">"},{text:"="},{text:" new ",class:"type-it-this-text"},{ text: 'List', class: 'typeit-start-text' },{text:"<"},{text:"UserModel"},{text:">"},{text:'([{',class:""},{text:"name",class:"typeit-start-text"},{text:":"},{text:"'John'",class:"typeit-parameter-type"},{text:","},{text:"name",class:"typeit-start-text"},{text:":"},{text:"'David'",class:"typeit-parameter-type"},{text:"}])"},{text:" ",class: "typeit-json-text"},{text:" ",class:"type-it-angular-tabing"},{text:"this",class:"type-it-this-text"},{text:"."},{text:"items",class:"typeit-start-text"},{text:"."},{text:"firstOrDefault",class:"type-it-this-text"},{text:"("},{text:"x=>",class:"typeit-start-text"},{text:"x",class:"typeit-start-text"},{text:"."},{text:"name",class:"type-it-datatype"},{text:"=="},{text:"'John'",class:"typeit-parameter-type"},{text:');'}]
    },
    // {
    //   type: 'code',fixText: '', codes: [{ text: 'unique()', class: '' }]
    // }
  ]
  bindText(character: string, className: string) {
    if(document.getElementById("code_change_1") && location.pathname.includes('home'))
    document.getElementById("code_change_1").innerHTML += `<span class='${className}'>${character}</span>`
  }

  removeChildNodes() {
    let codeElement = document.getElementById("code_change_1");
    if(codeElement){
    if (codeElement?.children.length > this.currentTextGroup.fixText.length) {
      document.getElementById("code_change_1").removeChild(codeElement?.children.item(codeElement.children.length - 1))
      var t = setTimeout(() => this.removeChildNodes(), 10);
    } else {
      this.totalIndex++;
      this.codeIndex = 0;
      this.changeCodeText();
    }
  }
  }


  processCharacters(textGroup: { [key: string]: any }) {
    if (textGroup.text.length > this.textIndex) {
      this.bindText(textGroup.text.charAt(this.textIndex), textGroup.class);
      this.textIndex++;
      var t = setTimeout(() => { this.processCharacters(textGroup) }, 30)
    } else {
      this.textIndex = 0;
      this.changeCodeText()
      
    }
  }

  changeCodeText(isFirstTime:boolean = false) {
    if (this.typeItTexts.length > this.totalIndex) {
      if (this.typeItTexts[this.totalIndex].codes.length > this.codeIndex) {
        this.currentTextGroup = this.typeItTexts[this.totalIndex]
        if (isFirstTime && document.getElementById("code_change_1").children.length > 0 && this.totalIndex == 0)
          this.codeIndex++;
        this.processCharacters(this.typeItTexts[this.totalIndex].codes[this.codeIndex])
        this.codeIndex++;
      } else {
        
        var t = setTimeout(() => this.removeChildNodes(), 600);

        //this.changeCodeText();
      }
    } else {
      this.totalIndex = 0;
      this.changeText();
    }
  }
  changeText() {
    
    if (this.typeItTexts.length > this.totalIndex) {
      this.changeCodeText(true)
      //this.totalIndex++;
    } 
    
  }
    
  ngOnInit(): void {
    document.title = "Angular Architecture - RxWeb Docs";
    var t = setTimeout(() => { this.changeText();},500)
  }
}