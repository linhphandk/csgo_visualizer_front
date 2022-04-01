import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {addPlayerStats} from './App.helpers';
import {ITeam, IRoundResponse, IRound} from './App.interface';
import RoundTable from './components/RoundTable';
import Player from './models/Player';
import Round from './models/Round';

/**
 * @function
 * @param {PlayerActions[]} rounds
 * @param {ITeam} teams
 * @return {Round[]}
 */
function getPlayerStats(rounds: IRound[], teams: ITeam) {
  const cts:Player[] = [];
  const terrorists:Player[] = [];
  teams.CT.forEach((player)=>{
    cts.push(new Player(player));
  });

  teams.TERRORIST.forEach((player)=>{
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
        cts, terrorists,
    );

    ROUNDS.push(JSON.parse(JSON.stringify(newRound)));
  });

  return ROUNDS;
}


const App:FC = ()=>{
  const [playerStats, setPlayerStats] = useState<Round[]>([]);

  useEffect(()=>{
    axios.get<IRoundResponse>('http://localhost:8001/').then((res)=>{
      const {rounds, teams} = res.data;
      const stats = getPlayerStats(rounds, teams);
      setPlayerStats(stats);
    });
  }, []);

  const roundsJsx = playerStats.map((stat)=>(
    <RoundTable
      key={stat.id}
      round={stat}
    />
  ));

  return (
    <div>
      {roundsJsx}
    </div>
  );
};

export default App;
