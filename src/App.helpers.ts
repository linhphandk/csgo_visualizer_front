import {PlayerActionType, ACTION_TYPE} from './components/RoundTable.interface';
import Player from './models/Player';

export const addPlayerStats = (action:PlayerActionType, player:Player)=>{
  if (action.action_type == ACTION_TYPE.KILL) {
    if (player.name == action.attacker) {
      player.addKill();
    }
    if (player.name == action.attacker && action.headshot) {
      player.addTotalHeadhots();
    }

    if (player.name == action.victim) {
      player.addDeath();
    }
  }
  if (action.action_type == ACTION_TYPE.ASSIST) {
    if (player.name == action.attacker) {
      player.addAssist();
    }
  }
  if (action.action_type == ACTION_TYPE.ATTACK) {
    if (player.name == action.attacker) {
      player.addTotalDamage(
          action.damage_state.damage+action.damage_state.damage_armor,
      );
    }
  }
};
