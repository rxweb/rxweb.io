import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { translate, RxTranslateModule, RxTranslation } from "@rxweb/translate";

@Component({
  templateUrl: "./conditional-scoped-translation.component.html",
  selector: 'app-conditional-scoped-translation'
})
export class ConditionalScopedTranslationComponent {
  @translate()
  global: { [key: string]: any };

  userName: string = '';

  questionType:number = 1;

  askQuestion(questionType:number){
    this.questionType  = questionType;
  }

}
