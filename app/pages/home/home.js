import {Page} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Page({
  templateUrl: 'build/pages/home/home.html',
  pipes: [TranslatePipe]
})
export class HomePage {
  static get parameters() {
    return [[TranslateService]];
  }
  constructor(translate) {
    this.translate = translate;
  }
}
