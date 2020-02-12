import { XhrContext, AbstractRequestFilter } from "@rxweb/http"
export class AuthFilter extends AbstractRequestFilter {

    onRequest = (context: XhrContext) => {
        context.request.headers.Authorization = "Abc";
        this.onRequestExecuting(context);
    }
}