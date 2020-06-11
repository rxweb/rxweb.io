import { Component } from '@angular/core';
import { translate } from '@rxweb/translate';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
})
export class PurePipeComponent {
  @translate() global: { [key: string]: any };

  name: string = "John"

  constructor(public translate: TranslateService) { }
}