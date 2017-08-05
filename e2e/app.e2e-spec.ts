import { RepositoryOnePage } from './app.po';

describe('repository-one App', () => {
  let page: RepositoryOnePage;

  beforeEach(() => {
    page = new RepositoryOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
