import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/Get",
})
export class BaseComponent extends RxHttp {

}