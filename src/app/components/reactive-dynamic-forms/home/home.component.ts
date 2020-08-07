import { OnInit, Component ,OnDestroy} from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  templateUrl: './home.component.html'
})
export class DynamicFormHomeComponent implements OnInit,OnDestroy {
  typeItTexts = [
    {
      type: 'code', fixText: '',data:{type:'text',name:'firstName',ui:{placeholder:'Enter your first name', label:"First Name"}} ,imagePath: "https://rxwebioassets.blob.core.windows.net/$web/images/dynamic-forms/textbox.png", codes: [{ text: '[',  speed: "fast" },{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"firstName"', class: 'typeit-parameter-type', speed: "slow" }, { text: ",", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"text"', class: "typeit-parameter-type", speed: "slow" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"FirstName"',class:"typeit-parameter-type",speed:"fast"},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"},{text:'"Enter FirstName"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    // {
    //   type: 'code', fixText: '',data:{type:'select',name:'country',source:[{value:1,text:'India'}],ui:{placeholder:'Select', label:"Country"}}, imagePath: "https://rxwebioassets.blob.core.windows.net/$web/images/dynamic-forms/select.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"country"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"select"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"India"', class: "typeit-parameter-type", speed: "fast" }, { text: "}]", speed: "fast" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"Country"',class:"typeit-parameter-type",speed:"fast"},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Select"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    // },
    {
      type: 'code', fixText: '',data:{type:'textarea',name:'address',ui:{ label:"Address",placeholder:"Enter Address"}}, imagePath: "https://rxwebioassets.blob.core.windows.net/$web/images/dynamic-forms/radio.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"address"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"textarea"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:""},{text:'"Address"',class:"typeit-parameter-type",speed:""},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Enter Address"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" },{ text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    {
      type: 'code', fixText: '',data:{type:'radio',name:'gender',ui:{ label:"Gender"},source:[{text:"Male",value:1},{text:"Female",value:2}]}, imagePath: "https://rxwebioassets.blob.core.windows.net/$web/images/dynamic-forms/radio.png",codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"gender"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"radio"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Male"', class: "typeit-parameter-type", speed: "fast" },{text:',',speed:"fast"},{ text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '2', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Female"', class: "typeit-parameter-type", speed: "fast" }, { text: "}]", speed: "fast" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"Gender"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    {
      type: 'code', fixText: '',data:{type:'checkbox',name:'agree',source:[{text:"Agree to all terms and conditions",value:1}]}, imagePath: "https://rxwebioassets.blob.core.windows.net/$web/images/dynamic-forms/radio.png",codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"agree"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"checkbox"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"value":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"text":', class: "typeit-start-text", speed: "fast" }, { text: '"Agree to all terms and conditions"', class: "typeit-parameter-type", speed: "fast" },{ text: "}]", speed: "fast" }, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}]", speed: "fast" }]
    }   
  ]
  isBind:boolean = false;
  serverData : any[] = [];;
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  uiBindings:string[] = [];
  textIndex: number = 0;
  totalIndex = 0;
  codeIndex: number = 0;
  currentTextGroup: { [key: string]: any }
  isCurrentTextDone: boolean = false;
  isAnimated: boolean = false;
  isDynamicAnimated: boolean = false;

  constructor(private applicationBroadcast: ApplicationBroadcaster,private formBuilder: RxDynamicFormBuilder) { }
  bindText(character: string, className: string, ) {
    if (this.isExistElement()) {
      document.getElementById("code_change_dynamic").innerHTML += `<span class='${className}'>${character}</span>`
    }
  }

  isExistElement() {
    let codeElement = document.getElementById("code_change_dynamic");
    return codeElement != null;
  }
  loadServerData(controlServerData:any) {
    this.serverData.push(controlServerData);
    this.isBind = false;
    setTimeout(()=>{
      this.uiBindings = [];
    //this.serverData = JSON.parse(controlServerData);
this.serverData.forEach(t=>{
  this.uiBindings.push(t.name);
})
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData);
    this.isBind = true;
  },50)

  }
  processCharacters(textGroup: { [key: string]: any }) {
    if (this.isExistElement()) {
      if (textGroup.text.length > this.textIndex) {
        this.bindText(textGroup.text.charAt(this.textIndex), textGroup.class)
        this.textIndex++;
        if (textGroup.speed == "fast") {
          this.timeOutId =  setTimeout(() => { this.processCharacters(textGroup) }, 20)
        }
        else {
          this.timeOutId =  setTimeout(() => { this.processCharacters(textGroup) }, 50)
        }

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
          if (isFirstTime && document.getElementById("code_change_dynamic").children.length > 0 && this.totalIndex == 0)
            this.codeIndex++;
          this.processCharacters(this.typeItTexts[this.totalIndex].codes[this.codeIndex])
          this.codeIndex++;

        }
        else {
          this.loadServerData(this.currentTextGroup.data);
          this.totalIndex++;
          this.codeIndex = 0;
          if (this.totalIndex <= 3) {
            this.changeCodeText();
          }
        }
      } else {
        this.totalIndex = 0;
        this.changeText();
      }
    }
  }
  changeText() {
    if (this.isExistElement()) {
      if (this.typeItTexts.length > this.totalIndex) {
        this.changeCodeText(true);
      
      }
    }
  }

  ngOnInit(): void {
   setTimeout(function () {
      document.getElementById("type-it").style.visibility = "visible";
    }, 2000);
    window.setTimeout(() => { this.isAnimated = true }, 500)
    this.applicationBroadcast.urlBroadCast(true);
    this.timeOutId = setTimeout(() => { this.changeText(); }, 2000)
   
  }
  timeOutId:any;
  ngOnDestroy(){
    if(this.timeOutId)
    clearTimeout(this.timeOutId);
  }

}
