import { iif, Observable, switchMap } from "rxjs"
import { TimeInterval } from "rxjs/internal/operators/timeInterval"

export const sswitch = <TIn, TOut = TIn>(
  condition: (value: TIn) => boolean,
  truePredicate: (value: TIn) => Observable<TOut>,
  falsePredicate: (value: TIn) => Observable<TOut>
) => {
  return (source: Observable<TIn>): Observable<TOut> => {
    return source.pipe(
      switchMap(value => iif(
        () => condition(value),
        truePredicate(value),
        falsePredicate(value)
      ))
    );
  }
}
