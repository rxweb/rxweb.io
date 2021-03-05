import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RESOLVE_CONTACT_DETAILS_ON_DEMAND_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/resolve-contact-details-on-demand/resolve-contact-details-on-demand.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RESOLVE_CONTACT_DETAILS_ON_DEMAND_ROUTING } from "src/app/components/learn/resolve-contact-details-on-demand/resolve-contact-details-on-demand.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RESOLVE_CONTACT_DETAILS_ON_DEMAND_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RESOLVE_CONTACT_DETAILS_ON_DEMAND_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Resolve_contact_details_on_demandModule { }



