/*
    Copyright (c)  Université catholique Louvain.  All rights reserved
    Authors :  Daubry Benjamin & Marchesini Bruno
    Date : July 2018
    This file is part of StudUCLouvain
    Licensed under the GPL 3.0 license. See LICENSE file in the project root for full license information.

    StudUCLouvain is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    StudUCLouvain is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with StudUCLouvain.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, ToastController, AlertController, ModalController  } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../../../providers/utils-services/user-service';

import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html'
})

export class ExamPage {


  constructor(public navCtrl: NavController,
              private calendar: Calendar,
              public toastCtrl: ToastController,
              public userS:UserService,
              public modalCtrl: ModalController,
              private alertCtrl : AlertController,
              private translateService: TranslateService,
              public navParams:NavParams)
  {

  }


  ionViewDidLoad() {

  }


}
