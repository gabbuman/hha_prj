import React from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'
import { RecordDataSet } from './RecordData';

const GraphContainer = styled.div `
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-gap: 0;
    position: relative;
    margin: 15px;
`

const GraphTitle = styled.h2 `
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    top: 0;
    z-index: 1;
    margin: 14px 0 0 14px; 
`

const GraphSubTitle = styled.h3 `
    font-size: 12px;
    font-weight: 500;
    color: grey;
    position: absolute;
    top: 36px;
    z-index: 1;
    margin: 0 0 0 14px;
`

export interface GraphProps {
    width: number;
    height: number;
    recordDataSet: RecordDataSet;
}

export const DptGraphCard = (props: GraphProps) => {
    return (
        <GraphContainer>
            <GraphTitle>{props.recordDataSet.recordType}</GraphTitle>
            <GraphSubTitle>From {props.recordDataSet.startDate} to {props.recordDataSet.endDate}</GraphSubTitle>
            <DptGraph width={props.width} height={props.height} recordsToRender={props.recordDataSet.data}/>
        </GraphContainer>
    )
};


