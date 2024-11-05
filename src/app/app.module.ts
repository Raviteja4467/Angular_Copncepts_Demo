import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { IndexComponent } from './components/index/index.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { ProductComponent } from './components/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TdfFormsComponent } from './components/tdf-forms/tdf-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquarePipe } from './pipe/square.pipe';
import { ChangeInterceptor } from './interceptors/change.interceptor';
import { Spring1Component } from './components/spring1/spring1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    IfComponent,
    ForComponent,
    CustomDirectiveDirective,
    IndexComponent,
    CourseComponent,
    CourseDetailsComponent,
    SelectedCourseComponent,
    ProductComponent,
    ReactiveFormsComponent,
    TdfFormsComponent,
    SquarePipe,
    Spring1Component,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:ChangeInterceptor,
    multi:true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
