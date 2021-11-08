import React from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'
import { sampleData } from './RecordData';

const GraphContainer = styled.div `
    width: 500px;
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

interface GraphProps {
    title: string;
    subtitle: string;
    width: number;
    height: number;
}

function DptGraphCard() {
    return (
        <GraphContainer>
            <GraphTitle>{sampleData.recordType}</GraphTitle>
            <GraphSubTitle>From {sampleData.startDate} to {sampleData.endDate}</GraphSubTitle>
            <DptGraph width={500} height={300} recordsToRender={sampleData.data}/>
        </GraphContainer>
    )
}

export default DptGraphCard
