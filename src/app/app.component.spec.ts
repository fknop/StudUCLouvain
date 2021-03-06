/*
    Copyright (c)  Université catholique Louvain.  All rights reserved
    Authors :  Jérôme Lemaire and Corentin Lamy
    Date : July 2017
    This file is part of UCLCampus
    Licensed under the GPL 3.0 license. See LICENSE file in the project root for full license information.

    UCLCampus is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    UCLCampus is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with UCLCampus.  If not, see <http://www.gnu.org/licenses/>.
*/

import { async, TestBed } from '@angular/core/testing';
import { IonicModule, MenuController, Nav, Platform, AlertController,LoadingController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Market } from '@ionic-native/market';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
/*import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http'
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { IonicStorageModule  } from '@ionic/storage';*/

//import { UserService } from '../providers/utils-services/user-service';


import { MyApp } from './app.component';
import {PlatformMock, StatusBarMock, SplashScreenMock, UserServiceMock, Wso2ServiceMock} from '../../test-config/mocks-ionic';
import { UserService } from '../providers/utils-services/user-service';
import { Wso2Service } from '../providers/wso2-services/wso2-service';

/*export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}*/
class IonicAppMock { }
describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot()
        /*TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [Http]
                    }
                }),
        IonicStorageModule.forRoot(),
        HttpModule*/
      ],
      providers: [
        {provide: StatusBar, useClass: StatusBarMock },
        {provide: SplashScreen, useClass: SplashScreenMock },
        {provide: Platform, useClass: PlatformMock },
        AlertController,
        LoadingController,
        {provide:IonicApp, useClass: IonicAppMock},
        Nav,
        Market,
        AppAvailability,
        InAppBrowser,
        Device,
        {provide:UserService, useClass:UserServiceMock},
        {provide: Wso2Service, useClass: Wso2ServiceMock}
        /*AppAvailability,
        InAppBrowser,
        Device,
        UserService*/
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

});
