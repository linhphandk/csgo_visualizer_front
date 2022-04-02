import React, {FC} from 'react';
import {IBanner} from './Banner.interface';
import {StyledBanner} from './Banner.styled';
import {StyledScore} from './RoundTable.styled';

const Banner:FC<IBanner> = ({ctName, tName, ctScore, tScore})=>(
  <StyledBanner>
    <h2>{ctName}</h2>
    <StyledScore>{ctScore} - {tScore}</StyledScore>
    <h2>{tName}</h2>
  </StyledBanner>
);

export default Banner;
