import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {addPlayerStats} from './App.helpers';
import {ITeam, IRoundResponse, IRound, TEAM_SIDES} from './App.interface';
import {StyledPage} from './App.styled';
import RoundTable from './components/RoundTable';
import Player from './models/Player';
import Round from './models/Round';

/**
 * @function
 * @param {IRound[]} rounds
 * @param {ITeam} ct
 * @param {ITeam} terrorist
 * @return {Round[]}
 */
function getPlayerStats(rounds: IRound[], ct: ITeam, terrorist:ITeam) {
  const cts:Player[] = [];
  const terrorists:Player[] = [];
  ct.members.forEach((player)=>{
    cts.push(new Player(player));
  });

  terrorist.members.forEach((player)=>{
    terrorists.push(new Player(player));
  });

  const ROUNDS:Round[] = [];

  rounds.forEach((round)=>{
    round.actions.forEach((action)=>{
      [...cts, ...terrorists].forEach((player)=>{
        addPlayerStats(action, player);
      });
    });
    const newRound = new Round(
        ROUNDS.length+1,
        round._id.$oid,
        round.result,
        cts,
        terrorists,
    );

    ROUNDS.push(JSON.parse(JSON.stringify(newRound)));
  });

  return ROUNDS;
}


const App:FC = ()=>{
  const [playerStats, setPlayerStats] = useState<Round[]>([]);
  const [ct, setCt] = useState<ITeam|undefined>(undefined);
  const [terrorist, setTerrorist] = useState<ITeam|undefined>(undefined);

  useEffect(()=>{
    axios.get<IRoundResponse>('http://localhost:8001/').then((res)=>{
      const {rounds, teams} = res.data;
      const ct = teams[0].start_side==TEAM_SIDES.CT? teams[0]:teams[1];
      setCt(ct);

      const terrorist = teams[0].start_side==TEAM_SIDES.TERRORIST?
      teams[0]:teams[1];
      setTerrorist(terrorist);
      const stats = getPlayerStats(rounds, ct, terrorist);
      setPlayerStats(stats);
    });
  }, []);

  const roundsJsx = ct && terrorist?playerStats.map((stat)=>(
    <RoundTable
      key={stat.id}
      round={stat}
      ct={ct}
      terrorist={terrorist}
    />
  )):<></>;

  return (
    <StyledPage>
      {roundsJsx}
    </StyledPage>
  );
};

export default App;
