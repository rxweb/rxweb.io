import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/GetByResponseType",
})
export class BaseComponent extends RxHttp {

}