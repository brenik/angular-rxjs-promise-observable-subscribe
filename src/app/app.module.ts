import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';



import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ObservableUnicastComponent } from './observable-unicast/observable-unicast.component';
import { SubjectMulticastComponent } from './subject-multicast/subject-multicast.component';
import { TakewhileComponent } from './takewhile/takewhile.component';
import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { ColdAndHotComponent } from './cold-and-hot/cold-and-hot.component';
import { FromPromiseComponent } from './from-promise/from-promise.component';
import { ObservableCounterComponent } from './observable-counter/observable-counter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { OperatorsComponent } from './operators/operators.component';
import { PipeFunctionComponent } from './pipe-function/pipe-function.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { RxjsFormComponent } from './rxjs-form/rxjs-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    SubjectComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    ObservableUnicastComponent,
    SubjectMulticastComponent,
    TakewhileComponent,
    TakeuntilComponent,
    ColdAndHotComponent,
    FromPromiseComponent,
    ObservableCounterComponent,
    FromEventComponent,
    OperatorsComponent,
    PipeFunctionComponent,
    EventEmitterComponent,
    AsyncObservablePipeComponent,
    RxjsFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
