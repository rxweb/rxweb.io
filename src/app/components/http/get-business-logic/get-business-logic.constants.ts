import { GetCustomCompleteComponent } from "src/assets/examples/http/get-business-logic/complete/get-custom.component";

import { GetCustomParamsComponent } from "src/assets/examples/http/get-business-logic/get-custom-by-params/get-custom-params.component";
import {  GetCustomByResponseTypeCompleteComponent } from "src/assets/examples/http/get-business-logic/get-custom-by-responsetype/get-custom-responsetype.component";
import { GetCustomByIdComponent } from "src/assets/examples/http/get-business-logic/get-custom-by-id/get-custom-by-id.component";


export const GET_BUSINESS_LOGIC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
      customlogic: GetCustomCompleteComponent,
      customgetById: GetCustomByIdComponent,
      customgetByParams: GetCustomParamsComponent,
      custombyresponsetype: GetCustomByResponseTypeCompleteComponent
    }
}