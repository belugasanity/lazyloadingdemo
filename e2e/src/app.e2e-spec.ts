import { AppPage } from './app.po';
import { browser, logging, by, element, $ } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Lazy Loading Demo');
  });

  it('should find input field', () => {
    expect(page.getInputField().isDisplayed()).toBeTruthy();
  });

  it('should not find any photos', () => {
    expect(page.getPhotoDiv().isPresent()).toBeFalsy();
  });

  it('should search for images', () => {
    let field = page.getInputField();
    field.sendKeys('toads');
    field.sendKeys(protractor.Key.ENTER);
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf($('#photoContainer')), 10000);
    expect(page.getPhotoDiv().isPresent()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
