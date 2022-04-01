import Round from '../models/Round';

export enum ACTION_TYPE{
    ATTACK = 'ATTACK',
    KILL = 'KILL',
    ASSIST = 'ASSIST'
}

export interface PlayerAction{
    action_type: ACTION_TYPE
    attacker: string
    victim: string
}
export interface IPlayerKill extends PlayerAction{
    action_type: ACTION_TYPE.KILL
    headshot: boolean
}

export interface IPlayerAssist extends PlayerAction{
    action_type: ACTION_TYPE.ASSIST
}

export interface IDamageState{
    damage: number,
    damage_armor: number,
    health: number,
    armor: number
}
export interface IPlayerAttack extends PlayerAction{
    action_type: ACTION_TYPE.ATTACK
    damage_state:IDamageState
}

export type PlayerActionType = IPlayerKill | IPlayerAttack | IPlayerAssist

export interface IRoundTableProps{
    round:Round
}
