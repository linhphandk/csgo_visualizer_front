import {PlayerActionType} from './components/RoundTable.interface';

export interface ITeam{
    CT: string[],
    TERRORIST: string[]
  }
interface IObjectId{
    '$oid': string
}
export interface IRound{
    _id: IObjectId
    actions:PlayerActionType[]
}
export interface IRoundResponse{
  rounds: IRound[]
  teams: ITeam
};
