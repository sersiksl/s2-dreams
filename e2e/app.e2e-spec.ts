import { S2DreamAppPage } from './app.po';

describe('s2-dream-app App', function() {
  let page: S2DreamAppPage;

  beforeEach(() => {
    page = new S2DreamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
