import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/Put",
})
export class BaseComponent extends RxHttp {

}