import { RxHttp, http, inMemory } from "@rxweb/http";

export class BaseComponent extends RxHttp {

}
@inMemory()
export class AppDomain extends BaseComponent {

}