import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCodeComponent } from "src/app/components/shared/app-code/app-code.component";
import { ClipboardModule } from "ngx-clipboard";
import { HighlightModule } from "ngx-highlightjs";
import { AppExampleRunnerComponent } from "src/app/components/shared/app-example-runner/app-example-runner.component";
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { CodeExampleComponent } from "src/app/components/shared/code-example/code-example.component";
import { AppTabsComponent } from "src/app/components/shared/app-tabs/app-tabs.component";


@NgModule({
 imports:      [CommonModule,ClipboardModule,HighlightModule ],
  declarations: [PageViewerComponent, AppCodeComponent, AppExampleRunnerComponent,CodeExampleComponent,AppTabsComponent ],
  exports: [CommonModule, FormsModule, AppCodeComponent,AppExampleRunnerComponent,PageViewerComponent,CodeExampleComponent,AppTabsComponent ],
 entryComponents: [],
})
export class CommonSharedModule { }