import { PortofolioPage } from './app.po';

describe('portofolio App', () => {
  let page: PortofolioPage;

  beforeEach(() => {
    page = new PortofolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
