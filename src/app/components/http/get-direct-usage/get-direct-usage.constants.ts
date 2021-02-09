import { GetCompleteComponent } from "src/assets/examples/http/get/complete/get-complete.component";
import { GetGetByIdComponent } from "src/assets/examples/http/get/getById/get-get-by-id.component";
import { GetGetByQueryParamsComponent } from "src/assets/examples/http/get/getByQueryParams/get-get-by-query-params.component";
import { GetResponseTypeComponent } from "src/assets/examples/http/get/responseType/get-response-type.component";


export const GET_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        complete:GetCompleteComponent,
        getById:GetGetByIdComponent,
        getByQueryParams:GetGetByQueryParamsComponent,
        responseType:GetResponseTypeComponent
    }
}   