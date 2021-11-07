import React from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'

const DptGraphCard = styled.div `
    width: 300px;
    height: 300px;
`

class SampleGraph extends React.Component {
    render() {
        return (
            <DptGraphCard>
                <DptGraph width={300} height={300} />
            </DptGraphCard>
        );
    }
}

export default SampleGraph
