import { GithubBattleAppPage } from './app.po';

describe('github-battle-app App', () => {
  let page: GithubBattleAppPage;

  beforeEach(() => {
    page = new GithubBattleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
