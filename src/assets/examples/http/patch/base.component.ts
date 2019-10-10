import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/patch",
})
export class BaseComponent extends RxHttp {

}