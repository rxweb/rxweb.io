import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "assets/json/db.json",
})
export class BaseComponent extends RxHttp {

}