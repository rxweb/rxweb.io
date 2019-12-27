import { Component, OnInit,OnDestroy, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from "@rxweb/reactive-form-validators"
import {User} from "./model/user.model";
import { FormBuilderConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
@Component({
  templateUrl: './home.component.html',


})
export class HomeComponent implements OnInit,OnDestroy {
  timeOutId:any;
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
  totalSecondIndex= 0;
  codeIndex: number = 0;
  secondCodeIndex : number = 0;
  isAnimated: boolean = false;
  currentTextGroup: {[key:string]:any}
  typeItCodeTexts = [ {
    type: 'code', fixText: '', codes: [
      { text: 'public',  speed: "fast",class:'visual-studio-keyword' },
      { text: " ", class: "type-it-space" },
      { text: 'partial', class: "visual-studio-keyword", speed: "fast" },
      { text: " ", class: "type-it-space" }, 
      { text: "class", class: "visual-studio-keyword" },
      { text: " ", class: "type-it-space" }, 
      { text: 'Developer', class: "visual-studio-object", speed: "slow" },
      {text:" ",class:"typeit-json-text"}, { text: '{', class: '', speed: "fast" },

      {text:' ',class:"",speed:"fast"},{ text: " ", class: "typeit-json-text" },
       { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
       //first property
        { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
        { text: 'int', class: "visual-studio-keyword", speed: "fast" },{ text: " ", class: "type-it-space" }, 
        { text: "DeveloperId", class: "", speed: "fast" },{ text: " ", class: "type-it-space" },
        {text:'{',class:"",speed:"fast"},{ text: " ", class: "type-it-space" },
      
        { text: "get;", speed: "visual-studio-keyword" },{ text: " ", class: "type-it-space" },
        { text: "set;", speed: "visual-studio-keyword" },{ text: " ", class: "type-it-space" },
        {text:'}',class:"",speed:"fast"},{ text: " ", class: "type-it-space" },
  // second property
 

  {text:' ',class:"",speed:"fast"},{ text: " ", class: "typeit-json-text" },
   { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
        { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
        { text: 'int', class: "visual-studio-keyword", speed: "fast" },{ text: " ", class: "type-it-space" }, 
        { text: "ClientId", class: "", speed: "fast" },{ text: " ", class: "type-it-space" },
        {text:'{',class:"",speed:"fast"},{ text: " ", class: "type-it-space" },       
        { text: "get;", speed: "visual-studio-keyword" },{ text: " ", class: "type-it-space" },
        { text: "set;", speed: "visual-studio-keyword" },{ text: " ", class: "type-it-space" },
        {text:'}',class:"",speed:"fast"},{ text: " ", class: "type-it-space" },

        {text:" ",class:"typeit-json-text"},{text:'}'}
    ]
  },
  // {
  //   type: 'code', fixText: '',data:{type:'select',name:'country',source:[{value:1,text:'India'}],ui:{placeholder:'Select', label:"Country"}}, imagePath: "assets/images/dynamic-forms/select.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"country"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"select"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"India"', class: "typeit-parameter-type", speed: "fast" }, { text: "}]", speed: "fast" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-space" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"Country"',class:"typeit-parameter-type",speed:"fast"},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Select"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
  // },
  {
    type: 'code', fixText: '',data:{type:'textarea',name:'address',ui:{ label:"Address",placeholder:"Enter Address"}}, imagePath: "assets/images/dynamic-forms/radio.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"address"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"textarea"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" },{ text: " ", class: "type-it-space" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:""},{text:'"Address"',class:"typeit-parameter-type",speed:""},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Enter Address"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" },{ text: ',', class: "typeit-json-text", speed: "fast" }]
  },
  {
    type: 'code', fixText: '',data:{type:'radio',name:'gender',ui:{ label:"Gender"},source:[{text:"Male",value:1},{text:"Female",value:2}]}, imagePath: "assets/images/dynamic-forms/radio.png",codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"gender"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"radio"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Male"', class: "typeit-parameter-type", speed: "fast" },{text:',',speed:"fast"},{ text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '2', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Female"', class: "typeit-parameter-type", speed: "fast" }, { text: "}]", speed: "fast" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-space" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"Gender"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
  },
  {
    type: 'code', fixText: '',data:{type:'checkbox',name:'agree',source:[{text:"Agree to all terms and conditions",value:1}]}, imagePath: "assets/images/dynamic-forms/radio.png",codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"agree"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"checkbox"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-space" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Agree to all terms and conditions"', class: "typeit-parameter-type", speed: "fast" },{ text: "}]", speed: "fast" }, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}]", speed: "fast" }]
  }  ]
  typeItTexts = [
    {
       type: 'code', fixText: '', codes: [{ text: 'One', class: '' },{ text: "One", class: '' },{ text: " ", class: "type-it-space" },{ text: 'architecture', class: '' },{ text: " ", class: "typeit-C-text" }, { text: 'for' },{ text: " ", class: "typeit-json-text" },{text:'with'}]
    },
    
    
    // {
    //   type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'numeric({ allowDecimal:', class: '' }, { text: ' true', class: 'typeit-start-text' }, { text: ', isFormat: ', class: '' }, { text: `true `, class: 'typeit-start-text' }, { text: `})`, class: '' },{ text: `                      `, class: '' }]
    // },
    // {
    //   type: 'code', fixText: 'RxwebValidators.', codes: [ { text: 'compare({ fieldName:', class: '' }, { text: ` 'password' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{ text: `                                 `, class: '' }]
    // },
    // {
    //   type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'maxDate({ fieldName:', class: '' }, { text: ` 'todayDate' `, class: 'typeit-string-text' }, { text: `})`, class: '' },{ text: `                                `, class: '' }]
    // },
    // {
    //   type: 'code', fixText: 'RxwebValidators.', codes: [{ text: 'file({ minFiles:', class: '' }, { text: ' 1', class: 'typeit-start-text' }, { text: ', maxFiles: ', class: '' }, { text: `5 `, class: 'typeit-start-text' }, { text: `})`, class: '' },{ text: `                      `, class: '' },{ text: `             `, class: '' }]
    // },
    // {
    //   type: 'code', fixText: '', codes: [{ text: 'unique()', class: '' },{ text: `                      `, class: '' },{ text: `                      `, class: '' },{ text: `           `, class: '' }]
    // }
  ]
  textIndex: number = 0;
  secondTextIndex:number = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private rxFormBuilder:RxFormBuilder,private applicationBroadcast:ApplicationBroadcaster
  ) {
  }

  bindText(character: string, className: string) {
  

    if(this.isExistElement())
   
      document.getElementById("code_change_text").innerHTML += `<span class='${className}'>${character}</span>`
  }
isExistElement(){
    let codeElement = document.getElementById("code_change_text");
    return codeElement != null;
}
  removeChildNodes() {
    let codeElement = document.getElementById("code_change_text");
    if(this.isExistElement()){
      if (codeElement.children.length > this.currentTextGroup.fixText.length) {
        if(this.isExistElement())
          document.getElementById("code_change_text").removeChild(codeElement.children.item(codeElement.children.length - 1))
        this.timeOutId = setTimeout(() => this.removeChildNodes(), 10);
      } else {
        this.totalIndex++;
        this.codeIndex = 0;
       // this.changeCodeText();
      }
    }
  }


  processCharacters(textGroup: { [key: string]: any }) {
    if (this.isExistElement()) {
      if (textGroup.text.length > this.textIndex) {
        this.bindText(textGroup.text.charAt(this.textIndex), textGroup.class)
        this.textIndex++;
       if(textGroup.text == "for")
       this.timeOutId =  setTimeout(() =>{ document.getElementById("word-animate").style.opacity = "1"},200);
    
      
          this.timeOutId =  setTimeout(() => { this.processCharacters(textGroup) }, 50)
        

      } else {
        this.textIndex = 0;
        this.changeCodeText()
      }
    }

  }


 

  changeCodeText(isFirstTime: boolean = false) {

    if (this.isExistElement()) {
      if (this.typeItTexts.length > this.totalIndex) {
        if (this.typeItTexts[this.totalIndex].codes.length > this.codeIndex) {
          this.currentTextGroup = this.typeItTexts[this.totalIndex]
          if (isFirstTime && document.getElementById("code_change_text").children.length > 0 && this.totalIndex == 0)
            this.codeIndex++;
            
          this.processCharacters(this.typeItTexts[this.totalIndex].codes[this.codeIndex])
          this.codeIndex++;

        }
        else {
         this.loadAnimatedText();
         this.loadSecondAnimatedText();
      
          this.totalIndex++;
          if(this.totalIndex == 1){
            this.timeOutId =  setTimeout(() => {this.changeSecondText()},1000)
          }
          this.codeIndex = 0;
          if (this.totalIndex <= 1) {
         //   this.changeSecondText()
         //   this.changeCodeText();
          }
        }
      } else {
        this.totalIndex = 0;
        this.changeText();
      }
    }
  }

  loadAnimatedText(){
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;
    
    //words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    
    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }
    
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }
    
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }
    
    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }
    
    changeWord();
    setInterval(changeWord, 2000);
  }


  loadSecondAnimatedText(){
    var words = document.getElementsByClassName('word2');
    var wordArray = [];
    var currentWord = 0;
    
    //words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    
    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }
    
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }
    
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }
    
    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }
    
    changeWord();
    setInterval(changeWord, 2000);
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
      var t = setTimeout(() => { this.changeText();},500)

  }

 

  ngOnDestroy(){
    let childElement = document.getElementById("code_change_text");
    if(childElement != null){
      let rxwebbody = childElement.parentNode;
      rxwebbody.removeChild(childElement)
    }
    if(this.timeOutId)
    clearTimeout(this.timeOutId);
    
  }

// second text logic 

changeSecondText(){

    if(this.isExistElement()){
      if (this.typeItCodeTexts.length > this.totalSecondIndex) {
        this.changeSecondCodeText(true)
        //this.totalIndex++;
      } 
    }
  
}
changeSecondCodeText(isFirstTime: boolean = false) {

  if (this.isExistElement()) {
    if (this.typeItCodeTexts.length > this.totalSecondIndex) {
      if (this.typeItCodeTexts[this.totalSecondIndex].codes.length > this.secondCodeIndex) {
        this.currentTextGroup = this.typeItCodeTexts[this.totalSecondIndex]
        if (isFirstTime && document.getElementById("code_second_change").children.length > 0 && this.totalSecondIndex == 0)
          this.secondCodeIndex++;
          
        this.processSecondCharacters(this.typeItCodeTexts[this.totalSecondIndex].codes[this.secondCodeIndex])
        this.secondCodeIndex++;

      }
      else {
     //  this.loadAnimatedText();
     //  this.loadSecondAnimatedText();
        this.totalSecondIndex++;
        if(this.totalSecondIndex == 1){
          this.ShowToolTips();
        }
        this.secondCodeIndex = 0;
        if (this.totalSecondIndex <= 1) {
         
       //   this.changeCodeText();
        }
      }
    } else {
      this.totalIndex = 0;
      this.changeText();
    }
  }
}
ShowToolTips(idNumber:number = 1)
{
 debugger;
  document.getElementById(idNumber.toString()).style.display = "block";

  idNumber++;
  if(idNumber < 4)
  this.timeOutId =  setTimeout(() => { this.ShowToolTips(idNumber)},500);
}

processSecondCharacters(textGroup: { [key: string]: any }) {
  if (this.isExistElement()) {
    if (textGroup.text.length > this.secondTextIndex) {
      this.bindSecondText(textGroup.text.charAt(this.secondTextIndex), textGroup.class)
      this.secondTextIndex++;
   
    
        this.timeOutId =  setTimeout(() => { this.processSecondCharacters(textGroup) }, 30)
      

    } else {
      this.secondTextIndex = 0;
      this.changeSecondCodeText()
    }
  }

}

bindSecondText(character: string, className: string) {


  if(this.isExistElement())
 
    document.getElementById("code_second_change").innerHTML += `<span class='${className}'>${character}</span>`
}


}
