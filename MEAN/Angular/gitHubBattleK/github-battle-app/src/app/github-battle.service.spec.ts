import { TestBed, inject } from '@angular/core/testing';

import { GithubBattleService } from './github-battle.service';

describe('GithubBattleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubBattleService]
    });
  });

  it('should be created', inject([GithubBattleService], (service: GithubBattleService) => {
    expect(service).toBeTruthy();
  }));
});
