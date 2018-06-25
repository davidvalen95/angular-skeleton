import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserProfileComponent} from './page/user-profile/user-profile.component';
import {TableListComponent} from './example/table-list/table-list.component';
import {TypographyComponent} from './example/typography/typography.component';
import {IconsComponent} from './example/icons/icons.component';
import {UpgradeComponent} from './example/upgrade/upgrade.component';
import {UserService} from './service/user/user.service';
import {ApiService} from './service/api/api.service';
import {HttpClientModule} from '@angular/common/http';

import {PipeModule} from './pipe/pipe.module';
import {LoginComponent} from './page/login/login.component';
import {MyLocalStorageService} from './service/my-local-storage/my-local-storage.service';
import {HelperService} from './service/helper/helper.service';
import {DirectiveModule} from './directive/directive.module';
import {ProfileComponent} from './page/profile/profile.component';
import {UserComponent} from './page/module/user/user.component';
import { BranchComponent } from './page/module/branch/branchList/branch.component';
import { BranchDetailComponent } from './page/module/branch/branch-detail/branch-detail.component';
import { AbsenceListComponent } from './page/module/absence/absence-list/absence-list.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ThreadListComponent } from './page/thread/thread-list/thread-list.component';
import { ThreadDetailComponent } from './page/thread/thread-detail/thread-detail.component';
import { CndnListComponent } from './page/cndn/cndn-list/cndn-list.component';
import { CndnDetailComponent } from './page/cndn/cndn-detail/cndn-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        UpgradeComponent,
        LoginComponent,
        ProfileComponent,
        UserComponent,
        BranchComponent,
        BranchDetailComponent,
        AbsenceListComponent,
        ThreadListComponent,
        ThreadDetailComponent,
        CndnListComponent,
        CndnDetailComponent,



    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        PipeModule,
        DirectiveModule,
        ...AppModule.module,

    ],
    providers: [
        UserService,
        ApiService,
        MyLocalStorageService,
        HelperService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},



    ],

    bootstrap: [AppComponent],


})
export class AppModule {

    public static module = [
        // MatDatepickerModule, BrowserAnimationsModule
    ]
}
