import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommitDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/commit/commit-decorators-extended.module";

import { CommitValidatorsExtendedModule } from "src/assets/examples/howto/validators/commit/commit-validators-extended.module";
import { COMMIT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/commit/commit.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { COMMIT_ROUTING } from "src/app/components/howto/commit/commit.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [COMMIT_ROUTING ,CommitDecoratorsExtendedModule ,CommitValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: COMMIT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CommitModule { }

