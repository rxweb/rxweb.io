import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/GetByQueryParams",
})
export class BaseComponent extends RxHttp {

}