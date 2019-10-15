export const HTTP_APP_COMPONENT :string = `import { Component,OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import {HttpClientConfig} from '@rxweb/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(){
    //if you want to apply global configuration then use below code. 
    HttpClientConfig.register({
        hostURIs: [{
            name: 'local',
            default: true,
            uri: 'https://rxhttpapi.azurewebsites.net' //Your server side url here
        }],
        filters: [],
        onError: (r) => { console.log(r) }        
    });
  }
}`
