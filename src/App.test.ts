import {addPlayerStats} from './App.helpers';
import {
  ACTION_TYPE,
  IDamageState,
  IPlayerAssist,
  IPlayerAttack,
  IPlayerKill,
} from './components/RoundTable.interface';
import Player from './models/Player';

const PLAYER_NAME = 'test';
const DAMAGE_STATE:IDamageState = {
  damage: 10,
  damage_armor: 20,
  health: 40,
  armor: 24,
};
describe('addPlayerStats', ()=>{
  let player:Player;
  beforeEach(()=>{
    player = new Player(PLAYER_NAME);
  });

  it('should add total damage', ()=>{
    const action:IPlayerAttack = {
      action_type: ACTION_TYPE.ATTACK,
      attacker: PLAYER_NAME,
      victim: 'some',
      damage_state: DAMAGE_STATE,
    };
    addPlayerStats(action, player);
    expect(player.totalDamage)
        .toBe(DAMAGE_STATE.damage+DAMAGE_STATE.damage_armor);
  });

  it('should add kill', ()=>{
    const action:IPlayerKill = {
      action_type: ACTION_TYPE.KILL,
      attacker: PLAYER_NAME,
      victim: 'some',
      headshot: false,
    };
    addPlayerStats(action, player);
    expect(player.kills)
        .toBe(1);
  });

  it('should add headshot', ()=>{
    const action:IPlayerKill = {
      action_type: ACTION_TYPE.KILL,
      attacker: PLAYER_NAME,
      victim: 'some',
      headshot: true,
    };
    addPlayerStats(action, player);
    expect(player.headshots)
        .toBe(1);
  });

  it('should not add headshot', ()=>{
    const action:IPlayerKill = {
      action_type: ACTION_TYPE.KILL,
      attacker: PLAYER_NAME,
      victim: 'some',
      headshot: false,
    };
    addPlayerStats(action, player);
    expect(player.headshots)
        .toBe(0);
  });

  it('should add assist', ()=>{
    const action:IPlayerAssist = {
      action_type: ACTION_TYPE.ASSIST,
      attacker: PLAYER_NAME,
      victim: 'some',
    };
    addPlayerStats(action, player);
    expect(player.assists)
        .toBe(1);
  });
});
