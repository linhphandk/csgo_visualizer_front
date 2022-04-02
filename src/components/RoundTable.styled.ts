import styled from '@emotion/styled';

export const StyledRoundLine = styled.div`
    position: relative;
    cursor: pointer;
`;
export const StyledCell = styled.div`
    text-align:right;
`;
export const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    min-width: 700px;
    width:66%;
`;

export const StyledTable = styled.div`
    margin-bottom:2rem;
`;

export const StyledRoundTitle = styled.h3`
    text-align:center;
    margin-bottom: 1rem;
`;

export const StyledHR = styled.hr`
    border-color:#4173ff;
`;
interface IStyledStatsWrapper{
    isOpen: boolean
}
export const StyledStatsWrapper = styled('div')<IStyledStatsWrapper>`
    overflow:hidden;
    max-height: ${(props)=>props.isOpen? '500px':'0px'};
    transition: max-height 1s;
`;

export const StyledRoundScore = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`;

export const StyledTeamName = styled.h3`
    display: flex;
    align-items: center;
`;

export const StyledScore = styled.h2`
    margin: 20px
`;
