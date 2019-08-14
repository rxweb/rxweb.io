import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  typeItTexts = [
    {
      type: 'code', fixText: '', imagePath: "assets/images/dynamic-forms/textbox.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"firstName"', class: 'typeit-parameter-type', speed: "slow" }, { text: ",", class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"text"', class: "typeit-parameter-type", speed: "slow" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"FirstName"',class:"typeit-parameter-type",speed:"fast"},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"},{text:'"Enter FirstName"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    {
      type: 'code', fixText: '', imagePath: "assets/images/dynamic-forms/select.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"country"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"select"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"source":', class: "typeit-start-text", speed: "fast" }, { text: "[{", speed: "fast" }, { text: '"cityId":', class: "typeit-start-text", speed: "fast" }, { text: '1', class: "typeit-parameter-type", speed: "fast" }, { text: ",", speed: "fast" }, { text: '"cityName":', class: "typeit-start-text", speed: "fast" }, { text: '"Boston"', class: "typeit-parameter-type", speed: "fast" }, { text: "}]", speed: "fast" },{text:",",speed:"fast"}, { text: " ", class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:"fast"},{text:'"Country"',class:"typeit-parameter-type",speed:"fast"},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Select"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    {
      type: 'code', fixText: '', imagePath: "assets/images/dynamic-forms/radio.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"address"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"textarea"', class: "typeit-parameter-type", speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"validators":', class: "typeit-start-text", speed: "fast" }, { text: "{", speed: "fast" }, { text: '"required":', class: "typeit-start-text", speed: "fast" }, { text: '"true"', class: "typeit-parameter-type", speed: "fast" }, { text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" },{ text: " ", class: "type-it-tabing" },{text:'"ui":',class:"typeit-start-text",speed:"fast"},{ text: "{", speed: "fast" },{text:'"label":',class:"typeit-start-text",speed:""},{text:'"Address"',class:"typeit-parameter-type",speed:""},{text:",",speed:"fast"},{text:'"placeholder":',class:"typeit-start-text",speed:"fast"}, {text:'"Enter Address"',class:"typeit-parameter-type",speed:"fast"},{ text: '}', speed: "fast" },{ text: " ", class: "typeit-json-text", speed: "fast" },{ text: "}", speed: "fast" }, { text: ',', class: "typeit-json-text", speed: "fast" }]
    },
    {
      type: 'code', fixText: '', imagePath: "assets/images/dynamic-forms/radio.png", codes: [{ text: '{', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"name":', class: "typeit-start-text", speed: "slow" }, { text: '"submit"', class: 'typeit-parameter-type', speed: "slow" }, { text: ',', class: "typeit-json-text", speed: "fast" }, { text: " ", class: "type-it-tabing" }, { text: '"type":', class: "typeit-start-text", speed: "slow" }, { text: '"button"', class: "typeit-parameter-type", speed: "slow" }, { text: ' ', class: "typeit-json-text", speed: "fast" }, { text: '}', class: "typeit-json-text", speed: "fast" }]
    }
  ]
  textIndex: number = 0;
  totalIndex = 0;
  codeIndex: number = 0;
  currentTextGroup: { [key: string]: any }
  isCurrentTextDone: boolean = false;
  isAnimated: boolean = false;
  isDynamicAnimated: boolean = false;

  constructor(private applicationBroadcast: ApplicationBroadcaster) { }
  bindText(character: string, className: string, ) {
    if (this.isExistElement()) {
      document.getElementById("code_change").innerHTML += `<span class='${className}'>${character}</span>`
    }

  }
  isExistElement() {
    let codeElement = document.getElementById("code_change");
    return codeElement != null;
  }

  loadImage(imagePath: string) {
    document.getElementById("dynamic_img")['src'] = imagePath
  }
  processCharacters(textGroup: { [key: string]: any }) {
    if (this.isExistElement()) {
      if (textGroup.text.length > this.textIndex) {
        this.bindText(textGroup.text.charAt(this.textIndex), textGroup.class)
        this.textIndex++;
        if (textGroup.speed == "fast") {
          var t = setTimeout(() => { this.processCharacters(textGroup) }, 20)
        }
        else {
          var t = setTimeout(() => { this.processCharacters(textGroup) }, 50)
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
          if (isFirstTime && document.getElementById("code_change").children.length > 0 && this.totalIndex == 0)
            this.codeIndex++;
          this.processCharacters(this.typeItTexts[this.totalIndex].codes[this.codeIndex])
          this.codeIndex++;

        }
        else {
          this.loadImage(this.currentTextGroup.imagePath);
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
    var t = setTimeout(() => { this.changeText(); }, 2000)
  }

}