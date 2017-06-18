import { GreentubeLoginPagePage } from './app.po';

describe('greentube-login-page App', () => {
  let page: GreentubeLoginPagePage;

  beforeEach(() => {
    page = new GreentubeLoginPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
