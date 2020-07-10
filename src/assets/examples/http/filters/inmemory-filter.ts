import {XhrContext, HttpResponse,ResponseFilter,AbstractRequestFilter } from "@rxweb/http"

export class InMemory extends AbstractRequestFilter {
    
    onRequest = (context: XhrContext) => {
        context.result = [{ firstName: 'John' }]
        context.response.statusCode = 200;
        this.onRequestExecuting(context);
    }

}