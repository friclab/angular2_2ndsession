import { CorsoPage } from './app.po';

describe('corso App', () => {
  let page: CorsoPage;

  beforeEach(() => {
    page = new CorsoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
