import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTHORIZATION_RESOLVER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/authorization-resolver/authorization-resolver.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { AUTHORIZATION_RESOLVER_ROUTING } from "src/app/components/learn/authorization-resolver/authorization-resolver.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [AUTHORIZATION_RESOLVER_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: AUTHORIZATION_RESOLVER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Authorization_resolverModule { }



