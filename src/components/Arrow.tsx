import React, {FC} from 'react';

import ArrowDown from '../assets/angle-arrow-down.svg';
import {StyledArrow} from './Arrow.styled';

export enum DIRECTION{
    DOWN,
    UP
}
interface IArrowProps{
    direction: DIRECTION
}
const Arrow:FC<IArrowProps> = (props)=>(
  <StyledArrow
    src={ArrowDown}
    direction={props.direction} />
);

Arrow.defaultProps = {
  direction: DIRECTION.UP,
};

export default Arrow;
