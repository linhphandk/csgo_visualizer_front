/**
 * @class
 */
class Player {
  name:string;
  kills:number;
  deaths:number;
  assists:number;
  totalDamage: number;
  headshots:number;
  /**
   * @param {string} name
   */
  constructor(name: string) {
    this.name = name;
    this.kills = 0;
    this.deaths = 0;
    this.assists = 0;
    this.totalDamage = 0;
    this.headshots = 0;
  }
  /**
    *
    */
  addKill() {
    this.kills += 1;
  }

  /**
   * @method
   */
  addDeath() {
    this.deaths +=1;
  }

  /**
   * @method
   */
  addAssist() {
    this.assists +=1;
  }

  /**
   * accumulates to the total damage
   * @param {number} damage
   */
  addTotalDamage(damage:number) {
    this.totalDamage += damage;
  }

  /**
   * accumulates to the total damage
   * @param {number} headshots
   */
  addTotalHeadhots(headshots = 1) {
    this.headshots += headshots;
  }
}

export default Player;
