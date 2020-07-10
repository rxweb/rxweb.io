import { Component } from "@angular/core";
import { translate } from "@rxweb/translate";

@Component({
  templateUrl: "./binding-by-key-name.component.html",
  selector:'app-binding-by-key-name'
})
export class BindingByKeyNameComponent {


  @translate()
  multilingualContent: { [key: string]: any };

  keys: string[] = ['bindingByKeyNameLabel', 'text.bindingByKeyNameDescription'];

}
