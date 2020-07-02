import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from "ngx-clipboard";
import { CommonSharedModule } from "src/app/components/shared/common/common-shared.module";
import { AppTabsComponent } from "src/app/components/shared/app-tabs/app-tabs.component";
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { AppCodeComponent } from "src/app/components/shared/app-code/app-code.component";
import { AppExampleRunnerComponent } from "src/app/components/shared/app-example-runner/app-example-runner.component";
import { HtmlPageComponent } from './html.page.component';
import { HTML_PAGE_ROUTING } from './html.page.routing';


@NgModule({
  imports: [
    HTML_PAGE_ROUTING,RouterModule,CommonModule, FormsModule, ReactiveFormsModule, ClipboardModule, ClipboardModule, HighlightModule, CommonSharedModule,
  ],
  declarations: [HtmlPageComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [PageViewerComponent]
})
export class HtmlPageModule { }

