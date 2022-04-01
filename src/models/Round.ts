import Player from './Player';
export enum TEAMS{
    CT,
    T
}
/**
 * @class
 */
class Round {
  number:number;
  ct:Player[];
  t:Player[];
  id:string;

  /**
   * @constructor
   * @param {number} number
   * @param {string} id
   * @param {Player} ct
   * @param {Player} t
   */
  constructor(number:number, id:string, ct:Player[] = [], t:Player[]=[]) {
    this.number = number;
    this.ct = ct;
    this.t = t;
    this.id = id;
  }

  /**
   * @method
   * @param {Player} player
   * @param {TEAMS} side
   */
  addPlayer(player:Player, side:TEAMS) {
    if (side == TEAMS.CT) {
      this.ct.push(player);
    } else {
      this.t.push(player);
    }
  }
}

export default Round;
