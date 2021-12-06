import React, { Component } from 'react'
import styled from 'styled-components'
import { DptGraphCard } from '../home/Department Card/DptGraphCard'
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
interface dpthomeState{
    min_month: number,
    min_year: number,
    max_month: number,
    max_year: number
}

const initialState: dpthomeState = {
    min_month: (new Date()).getMonth(), 
    min_year: ((new Date()).getFullYear() -1),
    max_month: (new Date()).getMonth(),
    max_year: (new Date()).getFullYear()
}
class DepartmentHome extends Component<dptHomeProps, dpthomeState> {

    constructor(props: dptHomeProps){
        super(props);
        this.state = initialState;
    }
    render(){
            return (
                <ParentSize>
                    {({width, height}) => 
                        <PageContainer>
                            <Link to={{ pathname: "/vernavbar", state: {dptName: this.props.dptName, value: 2}}} >
                            <DptGraphCard 
                                department= {this.props.dptName}
                                field='Bed days'
                                minMonth={this.state.min_month}
                                minYear={this.state.min_year}
                                maxMonth={this.state.max_month}
                                maxYear={this.state.max_year}
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