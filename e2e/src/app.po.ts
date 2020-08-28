import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getInputField() {
    return element(by.css('app-root input'));
  }

  getPhotoDiv() {
    return element(by.css('app-root div#photoContainer'));
  }
}
