import React, { Component } from 'react'
import styled from 'styled-components'
import { DepartmentGraphCard } from '../home/Department Card/DptGraphCard'
import { sampleData } from '../home/Department Card/RecordData';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import ActionCard from './ActionCard';
import { Link } from 'react-router-dom';

const PageContainer = styled.div `
    display: grid;
    grid-template-rows: 300px 1fr;
    grid-gap: 30px;
    justify-items: center;
`

const ActionCardContainer = styled.div `
    max-width: 730px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-left: 15px;
    margin-right: 15px;
`
interface dptHomeProps{
    dptName: string
}
class DepartmentHome extends Component<dptHomeProps> {

    render(){
            return (
                <ParentSize>
                    {({width, height}) => 
                        <PageContainer>
                            <Link to={{ pathname: "/vernavbar", state: {dptName: this.props.dptName, value: 2}}} >
                            <DepartmentGraphCard 
                                department= {this.props.dptName}
                                field='Bed days'
                                minMonth={(new Date()).getMonth() -12 }
                                minYear={(new Date()).getFullYear() -1}
                                maxMonth={(new Date()).getMonth()}
                                maxYear={(new Date()).getFullYear()}
                                width={width} 
                                height={height}/>
                                </Link>
                            <ActionCardContainer>
                            <Link to={{ pathname: "/vernavbar", state: {dptName: this.props.dptName, value: 5}}} >
                                <ActionCard backgroundImage={'/static/case-study-icon.svg'} 
                                            fromColor={'#254E9F'}
                                            toColor={'#6081BA'}
                                            title={'Case Study'}/>
                                            </Link>
                            <Link to={{ pathname: "/vernavbar", state: {dptName: this.props.dptName, value: 1}}} >
                                <ActionCard backgroundImage={'/static/data-entry-icon.svg'} 
                                            fromColor={'#4AA08B'}
                                            toColor={'#6081BA'}
                                            title={'Monthly Record'}/>
                                            </Link>
                            <Link to={{ pathname: "/vernavbar", state: {dptName: this.props.dptName, value: 6}}} >
                                <ActionCard backgroundImage={'/static/bio-support-icon.svg'} 
                                            fromColor={'#49159F'}
                                            toColor={'#5F80BA'}
                                            title={'Biomechanical Support'}/>
                            </Link>
                            </ActionCardContainer>
                        </PageContainer>
                    }
                </ParentSize>
            )
        }
}

export default DepartmentHome