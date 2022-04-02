import {PlayerActionType} from './components/RoundTable.interface';
export enum TEAM_SIDES{
  TERRORIST='TERRORIST',
  CT='CT'
}
export interface ITeam{
  members: string[]
  name: string
  start_side: TEAM_SIDES
  _id: IObjectId
}
interface IObjectId{
    '$oid': string
}
export interface IResult{
  ct: number,
  t: number,
}
export interface IRound{
    _id: IObjectId
    actions:PlayerActionType[],
    result: IResult
}
export interface IRoundResponse{
  rounds: IRound[]
  teams: ITeam[]
};
