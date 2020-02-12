import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { HexcolorInfo } from './hexcolor-info.model';

@Component({
    selector: 'app-hexColor-messageKey-template-driven-validation-decorators',
    templateUrl: './hex-color-message-key.component.html'
})
export class HexColorMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    hexcolorinfo: HexcolorInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.hexcolorinfo= new HexcolorInfo()
    }
}
