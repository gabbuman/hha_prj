import React from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'

const DptGraphCard = styled.div `
    width: 300px;
    height: 300px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
