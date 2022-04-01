import Player from './Player';

describe('Player', ()=>{
  let player:Player;

  beforeEach(()=>{
    player = new Player('test player');
  });

  it('should increase kill by one', ()=>{
    player.addKill();
    expect(player.kills).toBe(1);
  });

  it('should increase death by one', ()=>{
    player.addDeath();
    expect(player.deaths).toBe(1);
  });

  it('should increase assist by one', ()=>{
    player.addAssist();
    expect(player.assists).toBe(1);
  });

  it('should increase total damage by 200', ()=>{
    player.addTotalDamage(200);
    expect(player.totalDamage).toBe(200);
  });
});
