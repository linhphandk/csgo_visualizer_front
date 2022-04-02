import styled from '@emotion/styled';
import {DIRECTION} from './Arrow';
interface IStyledArrow{
    readonly direction: DIRECTION
}
export const StyledArrow = styled('img')<IStyledArrow>`
    height:100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(
        ${(props)=>props.direction == DIRECTION.DOWN? '0deg': '180deg'
});
`;
