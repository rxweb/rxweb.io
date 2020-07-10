import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "api/Post",
})
export class BaseComponent extends RxHttp {

}