import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TdfFormsComponent } from './components/tdf-forms/tdf-forms.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { Spring1Component } from './components/spring1/spring1.component';

const routes: Routes = [
  { path: '', redirectTo: '/class', pathMatch: "full" },

  { path: "string", component: StringInterpolationComponent },

  { path: "class", component: ClassBindingComponent },

  { path: "If", component: IfComponent },

  { path: "eventbinding", component: EventBindingComponent },

  { path: "For", component: ForComponent },

  { path: "Parent", component: ParentComponent },

  { path: "child", component: ChildComponent },

  { path: "Home", component: HomeComponent },

  { path: "index", component: IndexComponent },

  { path: "course", component: CourseComponent },

  { path: "coursedetails", component: CourseDetailsComponent },

  { path: "coursedetails/:id", component: SelectedCourseComponent },

  { path: "product", component: ProductComponent },

  { path: "spring", component: Spring1Component },

  { path: "RF", component: ReactiveFormsComponent },

  { path: "tdf", component: TdfFormsComponent },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
