import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { translate, RxTranslateModule, RxTranslation } from "@rxweb/translate";

@Component({
  templateUrl: "./on-demand-translation.component.html",
  selector:'app-on-demand'
})
export class OnDemandTranslationComponent {
  
  @translate()
  multilingualContent: { [key: string]: any };

  message: string;

  constructor(private rxTranslation: RxTranslation) {
  }

  users: any[] = [
    {
      id: "1",
      name: "Benny taylor",
      gender: "female",
      email: "benny.taylor@unisure.com",
      phone: "+1 (978) 434-2855"
    },
    {
      id: "2",
      name: "Jack Thomas",
      gender: "male",
      email: "jack.thomas@unisure.com",
      phone: "+1 (884) 459-2081"
    }
  ];

  selectUser(user) {
  this.message = this.rxTranslation.translate(
      this.multilingualContent.text.selectedRecord,user
    );
  }
}
