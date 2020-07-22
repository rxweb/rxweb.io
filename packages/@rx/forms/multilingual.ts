import { Input, Directive } from "@angular/core";
import { ApplicationPage } from '@rx/core';

@Directive()
export class Multilingual {
  placeholderText: string = "";

  @Input() formControlName: string;

  @Input() set placeholder(value: string) {
    this.placeholderText = value;
  }
  get placeholder(): string {
    if (!this.placeholderText) {
      var applicationModuleId = ApplicationPage.getActiveModule();
      var placeHolder = ApplicationPage.localizeValue(this.formControlName, 'placeholder', applicationModuleId);
      return placeHolder ? placeHolder : '';
    }
    return this.placeholderText;
  }
}
