import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-fileSizeAsync-dynamic-validator',
    templateUrl: './file-size-async-dynamic.component.html'
})
export class FileSizeAsyncDynamicValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

				fileTypes = [ "Picture", "Document",];
	
	
	
	
	
	
	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/fileSizeAsync/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var userInfo = { fileType:'', videoFile:'', audioFile:'', contactFile:'', profilePicture:'', excelFile:'',  }
			this.userInfoFormGroup = this.formBuilder.group(userInfo,formBuilderConfiguration);
		})
    }
}
