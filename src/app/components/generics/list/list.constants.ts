import { ListAddComponent } from "src/assets/examples/generics/list/add/list-add.component";
import { ListAddRangeComponent } from "src/assets/examples/generics/list/addRange/list-add-range.component";
import { ListAllComponent } from "src/assets/examples/generics/list/all/list-all.component";
import { ListAnyComponent } from "src/assets/examples/generics/list/any/list-any.component";
import { ListAverageComponent } from "src/assets/examples/generics/list/average/list-average.component";
import { ListContainsComponent } from "src/assets/examples/generics/list/contains/list-contains.component";
import { ListCountComponent } from "src/assets/examples/generics/list/count/list-count.component";
import { ListWhereComponent } from "src/assets/examples/generics/list/where/list-where.component";
import { ListDistinctComponent } from "src/assets/examples/generics/list/distinct/list-distinct.component";
import { ListDistinctByComponent } from "src/assets/examples/generics/list/distinctBy/list-distinct-by.component";
import { ListElementAtComponent } from "src/assets/examples/generics/list/elementAt/list-element-at.component";
import { ListExceptComponent } from "src/assets/examples/generics/list/except/list-except.component";
import { ListFirstComponent } from "src/assets/examples/generics/list/first/list-first.component";
import { ListFirstOrDefaultComponent } from "src/assets/examples/generics/list/firstOrDefault/list-first-or-default.component";
import { ListAggregateComponent } from "src/assets/examples/generics/list/aggregate/list-aggregate.component";
import { ListGroupByComponent } from "src/assets/examples/generics/list/groupBy/list-group-by.component";
import { ListInsertComponent } from "src/assets/examples/generics/list/insert/list-insert.component";
import { ListLastComponent } from "src/assets/examples/generics/list/last/list-last.component";
import { ListLastOrDefaultComponent } from "src/assets/examples/generics/list/lastOrDefault/list-last-or-default.component";
import { ListMaxComponent } from "src/assets/examples/generics/list/max/list-max.component";
import { ListMaxByComponent } from "src/assets/examples/generics/list/maxBy/list-max-by.component";
import { ListMinComponent } from "src/assets/examples/generics/list/min/list-min.component";
import { ListMinByComponent } from "src/assets/examples/generics/list/minBy/list-min-by.component";
import { ListOrderByComponent } from "src/assets/examples/generics/list/orderBy/list-order-by.component";
import { ListOrderByDescendingComponent } from "src/assets/examples/generics/list/orderByDescending/list-order-by-descending.component";
import { ListRemoveComponent } from "src/assets/examples/generics/list/remove/list-remove.component";
import { ListRemoveAllComponent } from "src/assets/examples/generics/list/removeAll/list-remove-all.component";
import { ListSingleComponent } from "src/assets/examples/generics/list/single/list-single.component";
import { ListSingleOrDefaultComponent } from "src/assets/examples/generics/list/singleOrDefault/list-single-or-default.component";
import { ListSkipComponent } from "src/assets/examples/generics/list/skip/list-skip.component";
import { ListSumComponent } from "src/assets/examples/generics/list/sum/list-sum.component";
import { ListTakeComponent } from "src/assets/examples/generics/list/take/list-take.component";
import { ListToArrayComponent } from "src/assets/examples/generics/list/toArray/list-to-array.component";
import { ListConcatComponent } from "src/assets/examples/generics/list/concat/list-concat.component";
import { ListPopComponent } from "src/assets/examples/generics/list/pop/list-pop.component";
import { ListRemoveAtComponent } from "src/assets/examples/generics/list/removeAt/list-remove-at.component";
import { ListShiftComponent } from "src/assets/examples/generics/list/shift/list-shift.component";

export const LIST_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        add:ListAddComponent,
        addRange:ListAddRangeComponent,
        all:ListAllComponent,
        any:ListAnyComponent,
        average:ListAverageComponent,
        contains:ListContainsComponent,
        count:ListCountComponent,
        where:ListWhereComponent,
        distinct:ListDistinctComponent,
        distinctBy:ListDistinctByComponent,
        except:ListExceptComponent,
        first:ListFirstComponent,
        firstOrDefault:ListFirstOrDefaultComponent,
        aggregate:ListAggregateComponent,
        groupBy:ListGroupByComponent,
        insert:ListInsertComponent,
        last:ListLastComponent,
        lastOrDefault:ListLastOrDefaultComponent,
        max:ListMaxComponent,
        maxBy:ListMaxByComponent,
        min:ListMinComponent,
        minBy:ListMinByComponent,
        orderBy:ListOrderByComponent,
        orderByDescending:ListOrderByDescendingComponent,
        remove:ListRemoveComponent,
        removeAll:ListRemoveAllComponent,
        single:ListSingleComponent,
        singleOrDefault:ListSingleOrDefaultComponent,
        skip:ListSkipComponent,
        sum:ListSumComponent,
        take:ListTakeComponent,
        toArray:ListToArrayComponent,
        concat:ListConcatComponent,
        pop:ListPopComponent,
        shift:ListShiftComponent,
        removeAt:ListRemoveAtComponent
    }
}