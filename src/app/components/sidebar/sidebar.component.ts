import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    badge?: string;
    param: {};

    subMenus?: RouteInfo[];
    isOpen: boolean;
}

export const ROUTES: RouteInfo[] = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '', param: {}},
    {
        path: 'sample',
        title: 'Sample',
        icon: 'dashboard',
        class: '', param: {},
        isOpen: false,
        subMenus: [
            {
                path: 'sample',
                title: 'Create Sample',
                icon: 'dashboard', class: '',
                param: {},
                isOpen:false,
                subMenus:[
                    {
                        path: 'cndn',
                        title: 'third level',
                        icon: 'dashboard', class: '',
                        param: {},
                        isOpen:false},

                ]
            },
            {
                path: 'sample',
                title: 'Confirmed Sample',
                icon: 'dashboard',
                class: '',
                param: {},
                isOpen:false
            },
        ]
    },






    {
        path: 'cndn',
        title: 'CN / DN',
        icon: 'dashboard',
        class: '', param: {},
        isOpen: false,
        subMenus: [
            {
                path: 'cndn',
                title: 'Create CN / DN',
                icon: 'dashboard', class: '',
                param: {},
                isOpen:false,
                subMenus:[
                    {
                        path: 'cndn',
                        title: 'third level',
                        icon: 'dashboard', class: '',
                        param: {},
                        isOpen:false},

                ]
            },
            {
                path: 'cndn',
                title: 'Confirmed CN / DN',
                icon: 'dashboard',
                class: '',
                param: {},
                isOpen:false
            },
        ]
    },
    // {path: 'profile', title: 'My Profile', icon: 'person', class: '', param: {}},
    // {path: 'user-list', title: 'User List', icon: 'supervisor_account', class: '', param: {}},
    // {path: 'branch/list', title: 'Branch list', icon: 'home', class: '', param: {}},
    //
    // {path: 'database/select-list', title: 'Select List Configuration', icon: 'content_paste', class: '', param: {}},
    // {path: 'database/page-title', title: 'Page Title', icon: 'content_paste', class: '', param: {}},
    // {path: 'module/room', title: 'Room', icon: 'forward', class: '', badge: 'room', param: {}},
    // {path: 'module/advertisement', title: 'Advertisement', icon: 'forward', class: '', badge: 'advertisement', param: {}},
    // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' , param: {}},
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' , param: {}},
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' , param: {}},
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' , param: {}},
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' , param: {}},
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' , param: {}},
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sideMenu: any[];

    constructor(public userService: UserService) {

    }

    ngOnInit() {
        this.sideMenu = ROUTES.filter(menuItem => menuItem);
        // this.sideMenu[1].param = {id: this.userService.userData.id};
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
