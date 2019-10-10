import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/delete",
})
export class BaseComponent extends RxHttp {

}