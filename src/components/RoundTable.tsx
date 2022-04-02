import React, {FC, useState} from 'react';
import Player from '../models/Player';
import Arrow, {DIRECTION} from './Arrow';
import {IRoundTableProps} from './RoundTable.interface';
import {
  StyledCell,
  StyledHeader,
  StyledHR,
  StyledRoundLine,
  StyledRoundScore,
  StyledRoundTitle,
  StyledScore,
  StyledStatsWrapper,
  StyledTable,
  StyledTeamName,
} from './RoundTable.styled';

const ColumnInfo = ()=>(
  <>
    <StyledHeader>
      <StyledCell></StyledCell>
      <StyledCell>K</StyledCell>
      <StyledCell>D</StyledCell>
      <StyledCell>A</StyledCell>
      <StyledCell>+/-</StyledCell>
      <StyledCell>K/D</StyledCell>
      <StyledCell>ADR</StyledCell>
      <StyledCell>HS%</StyledCell>
    </StyledHeader>
    <StyledHR />
  </>
);

const RoundTable:FC<IRoundTableProps> = ({round, ct, terrorist})=>{
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRoundLineClick:React.MouseEventHandler<HTMLDivElement> = ()=>{
    setIsOpen(!isOpen);
  };

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
        <h5>{player.name}</h5>
        <StyledCell>{player.kills}</StyledCell>
        <StyledCell>{player.deaths}</StyledCell>
        <StyledCell>{player.assists}</StyledCell>
        <StyledCell>{player.kills - player.deaths}</StyledCell>

        <StyledCell>{killDeathRatio}</StyledCell>
        <StyledCell>{averageDamagePerRound}</StyledCell>
        <StyledCell>
          {
            isNaN(headshotPercentage) +'  %'?'-':headshotPercentage.toFixed(2)
          }
        </StyledCell>
      </StyledHeader>
    );
  };
  const ctJsx = round.ct.map((player)=>getRow(player));

  const tJsx = round.t.map((player)=>getRow(player));
  return (
    <StyledTable>
      <StyledRoundLine onClick={handleRoundLineClick}>
        <div><StyledRoundTitle>ROUND {round.number}</StyledRoundTitle></div>
        <Arrow direction={isOpen?DIRECTION.DOWN:DIRECTION.UP} />
      </StyledRoundLine>
      <StyledStatsWrapper isOpen={isOpen}>
        <br />
        <ColumnInfo />
        {ctJsx}
        <StyledRoundScore>
          <StyledTeamName>{ct.name}</StyledTeamName>

          <StyledScore>
            {round.number<16?
                round.result.ct+' - '+round.result.t:
                round.result.t+' - '+round.result.ct
            }
          </StyledScore>
          <StyledTeamName>{terrorist.name}</StyledTeamName>

        </StyledRoundScore>
        <ColumnInfo />

        {tJsx}
      </StyledStatsWrapper>
    </StyledTable>
  );
};

export default RoundTable;
