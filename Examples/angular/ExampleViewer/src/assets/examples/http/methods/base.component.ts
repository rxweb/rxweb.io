import { RxHttp, http } from "@rxweb/http";


@http({
    hostKey: "local",
    path: "https://rxwebioassets.blob.core.windows.net/$web/json/db.json",
})
export class BaseComponent extends RxHttp {

}