import React, {FC} from 'react';
import Player from '../models/Player';
import {IRoundTableProps} from './RoundTable.interface';
import {StyledHeader} from './RoundTable.styled';

const RoundTable:FC<IRoundTableProps> = ({round})=>{
  const getRow = (player:Player)=>{
    let killDeathRatio = undefined;
    killDeathRatio = player.kills / player.deaths;
    if (isNaN(killDeathRatio) || !isFinite(killDeathRatio)) {
      killDeathRatio = '-';
    } else {
      killDeathRatio = (Math.round(
          (killDeathRatio + Number.EPSILON) * 100) / 100)
          .toFixed(2);
    }
    const averageDamagePerRound = (Math.round(
        (player.totalDamage/round.number + Number.EPSILON) * 100) / 100)
        .toFixed(2);
    const headshotPercentage = ((player.headshots/player.kills)*100);

    return (
      <StyledHeader key={player.name}>
        <div>{player.name}</div>
        <div>{player.kills}</div>
        <div>{player.deaths}</div>
        <div>{player.assists}</div>
        <div>{player.kills - player.deaths}</div>

        <div>{killDeathRatio}</div>
        <div>{averageDamagePerRound}</div>
        <div>
          {
            isNaN(headshotPercentage) +'  %'?'-':headshotPercentage.toFixed(2)
          }
        </div>
      </StyledHeader>
    );
  };
  const ctJsx = round.ct.map((player)=>getRow(player));

  const tJsx = round.t.map((player)=>getRow(player));
  return (
    <>
      <StyledHeader>
        <div></div>
        <div>K</div>
        <div>D</div>
        <div>A</div>
        <div>+/-</div>
        <div>K/D</div>
        <div>ADR</div>
        <div>HS%</div>
      </StyledHeader>
      {ctJsx}
      {tJsx}
    </>
  );
};

export default RoundTable;
