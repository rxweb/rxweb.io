import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from "@rxweb/reactive-form-validators"
import { User } from "./model/user.model";
import { FormBuilderConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
import { element } from '@angular/core/src/render3';


@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit, OnDestroy {
  timeOutId: any;
  userFormGroup: FormGroup;
  userForm: FormGroup;
  userInfoFormGroup: FormGroup;
  userModelFormGroup: FormGroup
  user: User;
  codeContent: any;
  showComponent: boolean = false;
  comparePasswordTab: string = "component";
  conditionalValidationRequiredTab: string = "component";
  decoratorbasedModelValidationTab: string = "component";
  dynamicValidationTab: string = "component";
  isLoggedIn: boolean = false;
  isCurrentTextDone: boolean = false;
  totalIndex = 0;
  totalSecondIndex = 0;
  codeIndex: number = 0;
  secondCodeIndex: number = 0;
  isAnimated: boolean = false;
  currentTextGroup: { [key: string]: any }
  typeItCodeTexts = [{
    type: 'code', fixText: '', codes: [
      { text: '[', class: 'highlighted-code' }, { text: 'RecordLog', class: "visual-studio-object highlighted-code" }, { text: ']', class: 'highlighted-code', id: 1, title: 'Auditing' }, { text: " ", class: "type-it-space" }, { text: "//Data Entity Auditing", class: "type-it-comment" },
      { text: " ", class: "typeit-json-text" },
      { text: 'public', speed: "fast", class: 'visual-studio-keyword' },
      { text: " ", class: "type-it-space" },
      { text: 'partial', class: "visual-studio-keyword", speed: "fast" },
      { text: " ", class: "type-it-space" },
      { text: "class", class: "visual-studio-keyword" },
      { text: " ", class: "type-it-space" },
      { text: 'Developer', class: "visual-studio-object", speed: "slow" },
      { text: " ", class: "typeit-json-text" }, { text: '{', class: '', speed: "fast" },

      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'Key', class: "visual-studio-object highlighted-code" }, { text: ']', class: "highlighted-code", id: 2, title: 'Primary Key' }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },
      //first property
      { text: ' ', class: "type-it-tabing" }, { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'int', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "DeveloperId", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },

      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },
      // second property
      { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'TenantQueryFilter', class: "visual-studio-object highlighted-code" }, { text: ']', class: "highlighted-code", id: 3, title: "Single Database Multitenant" }, { text: " ", class: "type-it-space" }, { text: "//Single Database Multitenant", class: "type-it-comment" },
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'int', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "ClientId", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },
      // third property
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'Unique', class: "visual-studio-object highlighted-code" }, { text: '(', class: 'highlighted-code' }, { text: 'typeOf', class: 'visual-studio-keyword highlighted-code' }, { text: '(', class: 'highlighted-code' }, { text: 'IMainDatabasedFacade', class: 'visual-studio-object highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ']', class: "highlighted-code", id: 4, title: 'Unique Validation' }, { text: " ", class: "type-it-space" }, { text: "//Unique Validation", class: "type-it-comment" },
      { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
      { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'string', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "DeveloperName", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },



      // sixth property
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'Required', class: "visual-studio-object highlighted-code" }, { text: '(', class: 'highlighted-code' }, { text: "conditionalExpressionName:", class: "visual-studio-keyword" }, { text: 'nameOf', class: 'visual-studio-keyword highlighted-code' }, { text: '(', class: 'highlighted-code' }, { text: 'Developer', class: 'visual-studio-object highlighted-code' }, { text: ".IsRequiredSkills" }, { text: ')', class: 'highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ']', class: 'highlighted-code', id: 5, title: "Conditional Data Validation" },
      { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
      { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'List', class: "visual-studio-object", speed: "fast" }, { text: '<' }, { text: "string", class: "visual-studio-keyword" }, { text: '>' }, { text: " ", class: "type-it-space" },
      { text: "Skills", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },



      // fourth property

      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'ValueConversion', class: "visual-studio-object highlighted-code" }, { text: '(', class: 'highlighted-code' }, { text: 'typeOf', class: 'visual-studio-keyword highlighted-code' }, { text: '(', class: 'highlighted-code' }, { text: 'EncryDecryValueConversion', class: 'visual-studio-object highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ']', class: 'highlighted-code', id: 6, title: "Centralized Value Encryption" }, { text: " ", class: "type-it-space" }, { text: "//Centralized Value Encryption", class: "type-it-comment" },
      { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
      { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'string', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "Email", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: " ", class: "typeit-json-text" },

      // fifth property
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: 'highlighted-code' }, { text: 'OnAction', class: "visual-studio-object highlighted-code" }, { text: '(', class: 'highlighted-code' }, { text: '"POST"', class: 'typeit-parameter-type highlighted-code' }, { text: ',', class: 'highlighted-code' }, { text: 'ActionValueType', class: 'visual-studio-object highlighted-code' }, { text: ".NameClaimIdentifier", class: 'highlighted-code' }, { text: ')', class: 'highlighted-code' }, { text: ']', class: 'highlighted-code', id: 7, title: 'Data Sanization' }, { text: " ", class: "type-it-space" }, { text: "//Auto Data Sanitization", class: "type-it-comment" },
      { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
      { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'int', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "CreatedBy", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      //{ text: '}', class: '', speed: "fast" },



      //seventh property
      { text: ' ', class: "", speed: "fast" }, { text: " ", class: "typeit-json-text" },
      { text: ' ', class: "type-it-tabing" }, { text: '[', class: '' }, { text: 'TimeZoneValueConversion', class: "visual-studio-object" }, { text: ']', id: 8, title: "TimeZone Conversion" }, { text: " ", class: "type-it-space" }, { text: "//TimeZone Conversion", class: "type-it-comment" },
      { text: " ", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },
      { text: 'public', class: "visual-studio-keyword", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: 'DateTimeOffset', class: "visual-studio-object", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "CreatedDate", class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: '{', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },
      { text: "get;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: "set;", speed: "visual-studio-keyword" }, { text: " ", class: "type-it-space" },
      { text: '}', class: "", speed: "fast" }, { text: " ", class: "type-it-space" },

      { text: " ", class: "typeit-json-text" }, { text: '}' },
    ]
  }]

  typeItTexts = [
    {
      type: 'code', fixText: '', codes: [{ text: 'One', class: '' }, { text: "One", class: '' }, { text: " ", class: "type-it-space" }, { text: 'architecture', class: '' }, { text: " ", class: "typeit-C-text" }, { text: 'for' }, { text: " ", class: "type-it-space" }, { text: 'restful', class: "typeitremove code1" }, { text: " ", class: "typeit-json-text" }, { text: 'with' }, { text: " ", class: "type-it-space" }, { text: 'cleaner.', class: "typeitremove code2" },]
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
  secondTextIndex: number = 0;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private rxFormBuilder: RxFormBuilder, private applicationBroadcast: ApplicationBroadcaster
  ) {
  }

  bindText(character: string, className: string) {


    if (this.isExistElement())

      document.getElementById("code_change_text").innerHTML += `<span class='${className}'>${character}</span>`
  }
  isExistElement() {
    let codeElement = document.getElementById("code_change_text");
    return codeElement != null;
  }
  removeChildNodes() {
    let codeElement = document.getElementById("code_change_text");
    if (this.isExistElement()) {
      if (codeElement.children.length > this.currentTextGroup.fixText.length) {
        if (this.isExistElement())
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
        //if (textGroup.text == "for")
        // this.timeOutId = setTimeout(() => { document.getElementById("word-animate").style.opacity = "1" }, 200);


        this.timeOutId = setTimeout(() => { this.processCharacters(textGroup) }, 50)


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


          document.getElementById("word-animate").style.opacity = "1";
          document.getElementById("word-second-animate").style.opacity = "1"
          var i = 0;
          var removewords = document.getElementsByClassName('typeitremove');
          for (i = 0; i < removewords.length; i++) {
            removewords[i].classList.add("d-none");
          }
          document.getElementById("doc-button-link").style.display = "block";
          this.loadAnimatedText();

          //this.timeOutId = setTimeout(() => { document.getElementById("word-second-animate").style.opacity = "1" }, 200);

          this.loadSecondAnimatedText();

          this.totalIndex++;
          if (this.totalIndex == 1) {
            this.timeOutId = setTimeout(() => { this.changeSecondText() }, 1000)
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

  loadAnimatedText() {
    var words = document.getElementsByClassName('word');
    if (words) {
      var wordArray = [];
      var currentWord = 0;

      //words[currentWord].style.opacity = 1;
      for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }
    }

    function changeWord() {
      if (words) {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
          animateLetterOut(cw, i);
        }


        for (var i = 0; i < nw.length; i++) {
          nw[i].className = 'letter behind';
          nw[0].parentElement.style.opacity = 1;
          animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
      }
    }

    function animateLetterOut(cw, i) {
      setTimeout(function () {
        cw[i].className = 'letter out';
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function () {
        nw[i].className = 'letter in';
      }, 340 + (i * 80));
    }

    function splitLetters(word) {
      if (word) {
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
    }

    changeWord();
    setInterval(changeWord, 2000);


  }
  words = ["Cleaner", "Modular", "Extensible", "Secure"];
  wordIndex: number = 0;
  loadSecondAnimated() {
    var words2 = document.getElementById('word2');
    words2.classList.remove("fadeIn");
    words2.classList.remove("fadeOut");
    setTimeout(() => {
      words2.innerHTML = this.words[this.wordIndex];
      words2.classList.add("animated", "fadeIn")

      this.timeOutId = setTimeout(() => {
        this.wordIndex++;
        words2.classList.add("fadeOut");
        if (this.wordIndex > 3)
          this.wordIndex = 0;
        this.loadSecondAnimated();
      }, 3000);
    }, 500)


  }
  loadSecondAnimatedText() {

    var words = document.getElementsByClassName('word2');
    if (words) {
      var wordArray = [];
      var currentWord = 0;

      //words[currentWord].style.opacity = 1;
      for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }
    }
    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function () {
        cw[i].className = 'letter out';
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function () {
        nw[i].className = 'letter in';
      }, 340 + (i * 80));
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
    if (this.isExistElement()) {
      if (this.typeItTexts.length > this.totalIndex) {
        this.changeCodeText(true)
        //this.totalIndex++;
      }
    }
  }

  ngOnInit(): void {

    window.setTimeout(() => { this.isAnimated = true }, 500)

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
      country: [''],
      identityNumber: ['', RxwebValidators.required({ conditionalExpression: (x) => x.country == 'India' })]
    });
    this.user = new User();
    this.userInfoFormGroup = this.rxFormBuilder.formGroup(this.user);
    var t = setTimeout(() => { this.changeText(); }, 500)

  }



  ngOnDestroy() {
    let childElement = document.getElementById("code_change_text");
    if (childElement != null) {
      let rxwebbody = childElement.parentNode;
      rxwebbody.removeChild(childElement)
    }
    if (this.timeOutId)
      clearTimeout(this.timeOutId);

  }

  // second text logic 

  changeSecondText() {

    if (this.isExistElement()) {
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
          if (this.totalSecondIndex == 1) {
            //this.ShowToolTips();
            //this.loadAnimatedText();
            // this.loadSecondAnimatedText();
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

  ShowToolTips(idNumber: number = 1) {

    document.getElementById(idNumber.toString());
    if (this.timeOutId)
      window.clearTimeout(this.timeOutId);
    // this.timeOutId = setTimeout(() => {
    //   (<any>$(`#${idNumber}`)).tooltip("show");
    //   $(`#${idNumber}`).on('hide.bs.tooltip', function () {
    //     return false;
    //   })
    //   if (idNumber < 8) {
    //     idNumber = idNumber + 1;
    //     this.ShowToolTips(idNumber)
    //   }

    // }, 500);
  }

  processSecondCharacters(textGroup: { [key: string]: any }) {
    if (this.isExistElement()) {
      if (textGroup.text.length > this.secondTextIndex) {
        this.bindSecondText(textGroup.text.charAt(this.secondTextIndex), textGroup.class, textGroup.id, textGroup.title)
        this.secondTextIndex++;


        this.timeOutId = setTimeout(() => { this.processSecondCharacters(textGroup) }, 1)


      } else {
        this.secondTextIndex = 0;
        this.changeSecondCodeText()
      }
    }

  }

  bindSecondText(character: string, className: string, id: number, title: string) {
    if (this.isExistElement())
      if (id) {
        document.getElementById("code_second_change").innerHTML += `<span class='${className}' id='${id}' title='${title}' data-placement="right"  data-toggle="tooltip" >${character}</span>`
      }
      else {
        document.getElementById("code_second_change").innerHTML += `<span class='${className}' id='${id}'>${character}</span>`
      }
  }


}
