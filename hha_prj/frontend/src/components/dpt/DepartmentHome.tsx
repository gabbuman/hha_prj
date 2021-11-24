import React from 'react'
import styled from 'styled-components'
import { DptGraphCard } from '../home/Department Card/DptGraphCard'
import { sampleData } from '../home/Department Card/RecordData';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import ActionCard from './ActionCard';

const PageContainer = styled.div `
    width: 100%;
    max-width: 700px;
    display: grid;
    grid-template-rows: 300px 1fr;
    grid-gap: 30px;
`

const ActionCardContainer = styled.div `
    width: 100% - 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin: 0 15px 0 15px;
`

const DepartmentHome: React.FC = () => {
    return (
        <ParentSize>
            {({width, height}) => 
                <PageContainer>
                    <DptGraphCard width={width - 30} 
                                        height={300} 
                                        recordDataSet={sampleData} />
                        
                    <ActionCardContainer>
                        <ActionCard backgroundImage={'/static/case-study-icon.svg'} 
                                    fromColor={'#254E9F'}
                                    toColor={'#6081BA'}
                                    title={'Case Study'}/>
                        <ActionCard backgroundImage={'/static/data-entry-icon.svg'} 
                                    fromColor={'#4AA08B'}
                                    toColor={'#6081BA'}
                                    title={'Data Entry'}/>
                        <ActionCard backgroundImage={'/static/bio-support-icon.svg'} 
                                    fromColor={'#49159F'}
                                    toColor={'#5F80BA'}
                                    title={'Biomechanical Support'}/>
                    </ActionCardContainer>
                </PageContainer>
            }
        </ParentSize>
    )
}

export default DepartmentHome