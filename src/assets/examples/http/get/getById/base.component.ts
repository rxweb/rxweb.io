import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/GetById",
})
export class BaseComponent extends RxHttp {

}