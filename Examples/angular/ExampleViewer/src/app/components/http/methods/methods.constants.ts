
import { MethodsPatchComponent } from "src/assets/examples/http/methods/patch/methods-patch.component";
import { MethodsPostComponent } from "src/assets/examples/http/methods/post/methods-post.component";
import { MethodsPutComponent } from "src/assets/examples/http/methods/put/methods-put.component";
import { MethodsDeleteComponent } from "src/assets/examples/http/methods/delete/methods-delete.component";

export const METHODS_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
      
        patch:MethodsPatchComponent,
        post:MethodsPostComponent,
        put: MethodsPutComponent,
        delete:MethodsDeleteComponent
    }

}