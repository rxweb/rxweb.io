import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ListAddComponent } from './add/list-add.component';
import { ListAddRangeComponent } from './addRange/list-add-range.component';
import { ListAllComponent } from './all/list-all.component';
import { ListAnyComponent } from './any/list-any.component';
import { ListAverageComponent } from './average/list-average.component';
import { ListContainsComponent } from './contains/list-contains.component';
import { ListCountComponent } from './count/list-count.component';
import { ListWhereComponent } from './where/list-where.component';
import { ListDistinctComponent } from './distinct/list-distinct.component';
import { ListDistinctByComponent } from './distinctBy/list-distinct-by.component';
import { ListElementAtComponent } from './elementAt/list-element-at.component';
import { ListExceptComponent } from './except/list-except.component';
import { ListFirstOrDefaultComponent } from './firstOrDefault/list-first-or-default.component';
import { ListAggregateComponent } from './aggregate/list-aggregate.component';
import { ListFirstComponent } from './first/list-first.component';
import { ListGroupByComponent } from './groupBy/list-group-by.component';
import { ListInsertComponent } from './insert/list-insert.component';
import { ListLastComponent } from './last/list-last.component';
import { ListLastOrDefaultComponent } from './lastOrDefault/list-last-or-default.component';
import { ListMaxComponent } from './max/list-max.component';
import { ListMaxByComponent } from './maxBy/list-max-by.component';
import { ListMinComponent } from './min/list-min.component';
import { ListMinByComponent } from './minBy/list-min-by.component';
import { ListOrderByComponent } from './orderBy/list-order-by.component';
import { ListOrderByDescendingComponent } from './orderByDescending/list-order-by-descending.component';
import { ListRemoveComponent } from './remove/list-remove.component';
import { ListRemoveAllComponent } from './removeAll/list-remove-all.component';
import { ListSingleComponent } from './single/list-single.component';
import { ListSingleOrDefaultComponent } from './singleOrDefault/list-single-or-default.component';
import { ListSkipComponent } from './skip/list-skip.component';
import { ListSumComponent } from './sum/list-sum.component';
import { ListTakeComponent } from './take/list-take.component';
import { ListToArrayComponent } from './toArray/list-to-array.component';
import { ListConcatComponent } from './concat/list-concat.component';
import { ListPopComponent } from './pop/list-pop.component';
import { ListShiftComponent } from './shift/list-shift.component';
import { ListRemoveAtComponent } from './removeAt/list-remove-at.component';



@NgModule({
  declarations: [
    ListAddComponent,ListAddRangeComponent,ListAllComponent,ListAnyComponent,ListAverageComponent,ListContainsComponent,
    ListCountComponent,ListWhereComponent,ListDistinctComponent,ListDistinctByComponent,ListElementAtComponent,
    ListExceptComponent,ListFirstComponent,ListFirstOrDefaultComponent,ListAggregateComponent,ListGroupByComponent,
    ListInsertComponent,ListLastComponent,ListLastOrDefaultComponent,ListMaxComponent,ListMaxByComponent,
    ListMinComponent,ListMinByComponent,ListOrderByComponent,ListOrderByDescendingComponent,ListRemoveComponent,
    ListRemoveAllComponent,ListSingleComponent,ListSingleOrDefaultComponent,ListSkipComponent,ListSumComponent,
    ListTakeComponent,ListToArrayComponent,ListConcatComponent,ListPopComponent,ListShiftComponent,ListRemoveAtComponent
  ],
entryComponents: [
  ListAddComponent,ListAddRangeComponent,ListAllComponent,ListAnyComponent,ListAverageComponent,ListContainsComponent,
  ListCountComponent,ListWhereComponent,ListDistinctComponent,ListDistinctByComponent,ListElementAtComponent,
  ListExceptComponent,ListFirstComponent,ListFirstOrDefaultComponent,ListAggregateComponent,ListGroupByComponent,
  ListInsertComponent,ListLastComponent,ListLastOrDefaultComponent,ListMaxComponent,ListMaxByComponent,
  ListMinComponent,ListMinByComponent,ListOrderByComponent,ListOrderByDescendingComponent,ListRemoveComponent,
  ListRemoveAllComponent,ListSingleComponent,ListSingleOrDefaultComponent,ListSkipComponent,ListSumComponent,
  ListTakeComponent,ListToArrayComponent,ListConcatComponent,ListPopComponent,ListShiftComponent,ListRemoveAtComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ListAddComponent,ListAddRangeComponent,ListAllComponent,ListAnyComponent,ListAverageComponent,ListContainsComponent,
    ListCountComponent,ListWhereComponent,ListDistinctComponent,ListDistinctByComponent,ListElementAtComponent,
    ListExceptComponent,ListFirstComponent,ListFirstOrDefaultComponent,ListAggregateComponent,ListGroupByComponent,
    ListInsertComponent,ListLastComponent,ListLastOrDefaultComponent,ListMaxComponent,ListMaxByComponent,
    ListMinComponent,ListMinByComponent,ListOrderByComponent,ListOrderByDescendingComponent,ListRemoveComponent,
    ListRemoveAllComponent,ListSingleComponent,ListSingleOrDefaultComponent,ListSkipComponent,ListSumComponent,
    ListTakeComponent,ListToArrayComponent,ListConcatComponent,ListPopComponent,ListShiftComponent,ListRemoveAtComponent
  ],

})
export class  ListValidatorsExtendedModule { }