import {XhrContext, HttpResponse,ResponseFilter,AbstractRequestFilter } from "@rxweb/http"

export class Logging extends AbstractRequestFilter implements ResponseFilter {
    private _startTime: Date;
    onRequest = (context: XhrContext) => {
        this._startTime = new Date();
        this.onRequestExecuting(context);
    }


    onResponse = (response: HttpResponse) => {
        return response;
    }
}