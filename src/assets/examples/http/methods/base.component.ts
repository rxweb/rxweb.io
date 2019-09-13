import { RxHttp, http, inMemory } from "@rxweb/http";

export class BaseComponent extends RxHttp {

}
@http({
    hostKey: "local",
    path: "posts",
})
@inMemory()
export class AppDomain extends BaseComponent {

}