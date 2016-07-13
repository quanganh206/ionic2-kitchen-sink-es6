import {Page, Events, NavController, ViewController, Storage, LocalStorage} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/settings/settings.html',
  pipes: [TranslatePipe]
})
export class SettingsPage {
  static get parameters() {
    return [[NavController], [ViewController], [TranslateService], [Events]];
  }

  constructor(nav, view, translate, events) {
    this.nav = nav;
    this.view = view;
    this.translate = translate;
    this.events = events;
    this.interpo
    
    
    lateParams = {};
    this.events.subscribe('reload',() => {
      console.log('reload');
      //this.nav.pop();
      //this.nav.push(SettingsPage);
    });
    this.local = new Storage(LocalStorage);
    var userLang = navigator.language.split('-')[0];
    userLang = /(de|en|hr)/gi.test(userLang) ? userLang : 'en';
    this.local.get('language')
      .then((l) => {
        if (l) {
          this.language = l;
        } else {
          this.language = userLang;
        }
      });
  }

  onChange() {
    console.log(this.language);
    this.local.set('language', this.language);
    this.translate.use(this.language);
    this.translate.get('pages.settings').then((res) => {
      console.log(res);
    });
    
    //this.events.publish('reload');
    //setTimeout(() => this.nav.pop(), 500);
    this.nav.remove().then(() => {
      this.nav.pop();
    });
  }
}
