import React from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'

const DptGraphCard = styled.div `
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

class SampleGraph extends React.Component {
    // TODO: Use props to update titles
    render() {
        return (
            <DptGraphCard>
                <GraphTitle>Beds Available</GraphTitle>
                <GraphSubTitle>From JAN 2020 to JAN 2021</GraphSubTitle>
                <DptGraph width={500} height={300} />
            </DptGraphCard>
        );
    }
}

export default SampleGraph
