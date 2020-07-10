import { Component } from "@angular/core";
import { asyncTranslate, translate } from "@rxweb/translate";
import { CountryService } from "./country.service";


@Component({
  templateUrl: "./async-translation.component.html",
  selector: 'app-async-translation'
})
export class AsyncTranslationComponent {

  @translate()
  global: { [key: string]: any };

  @asyncTranslate({
    serviceModel: CountryService,
    serviceMethod: CountryService.prototype.get
  })
  countries: any;

}
