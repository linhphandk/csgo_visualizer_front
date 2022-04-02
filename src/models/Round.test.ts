import Player from './Player';
import Round, {TEAMS} from './Round';

describe('Round', ()=>{
  let round:Round;
  beforeEach(()=>{
    round = new Round(1, 'test', {ct: 3, t: 4});
  });

  it('should add one player to CT', ()=>{
    const newPlayer = new Player('test');
    round.addPlayer(newPlayer, TEAMS.CT);
    expect(round.ct.length).toBe(1);
    expect(round.t.length).toBe(0);
  });

  it('should add one player to T', ()=>{
    const newPlayer = new Player('test');
    round.addPlayer(newPlayer, TEAMS.T);
    expect(round.ct.length).toBe(0);
    expect(round.t.length).toBe(1);
  });
});
