import { RxHttp, http } from "@rxweb/http";

export class BaseComponent extends RxHttp {

}
@http({
    hostKey: "local",
    path: "posts",
})
export class AppDomain extends BaseComponent {

}