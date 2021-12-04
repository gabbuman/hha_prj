import React, { Component } from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'
import { RecordDataSet, sampleData } from './RecordData';
import axios from 'axios';

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

interface CardSizeProps {
    width: number,
    height: number
}

const CardContainerForNoDataStates = styled.div<CardSizeProps> `
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    padding: repeat(4, auto);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.18);
    }
`

interface GraphCardProps {
    // Fetching Data
    department: string;
    field: string;
    minMonth: number | null;
    minYear: number | null;
    maxMonth: number;
    maxYear: number;

    // Rendering Card
    width: number;
    height: number;
}

interface GraphCardData {
    dataState: 'Loading' | 'No data' | 'Loaded';
    width: number;
    height: number;
    recordDataSet: RecordDataSet;
}

const graphApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/graph_data/'
})

export class DepartmentGraphCard extends Component<GraphCardProps, GraphCardData> {
    constructor(props: GraphCardProps) {
        super(props);

        // The default loading state
        this.state = {
            dataState: 'Loading',
            width: props.width, 
            height: props.height, 
            recordDataSet: {
                recordType: 'Loading...', 
                startDate: 'N/A',
                endDate: 'N/A',
                data: []
            }
        };
        
        graphApi.get('/', {params: {
            department: props.department,
            field: props.field,
            min_month: props.minMonth != null ? props.minMonth : props.maxMonth,
            min_year: props.maxMonth != null ? props.minYear : props.maxYear - 1,
            max_month: props.maxMonth,
            max_year: props.maxYear
        }}).then( (result: any) => {
            console.log('Responses:' + JSON.stringify(result));
            if (result.data.length == 0) {
                this.setState({
                    dataState: 'No data',
                    recordDataSet: {
                        recordType: 'No data recorded for ' + props.field, 
                        startDate: 'N/A',
                        endDate: 'N/A',
                        data: []
                    }
                })
            } else {
                this.setState({
                    dataState: 'Loaded',
                    recordDataSet: {
                        recordType: result.data.field,
                        startDate: result.data.responses[0].date,
                        endDate: result.data.responses[this.getLastIndex(result.data.responses)].date,
                        data: result.data.responses
                    }
                });
            }
        })

        // TODO: Show error
    }

    getLastIndex(array: any) {
        return array.length - 1 < 0 ? 0 : array.length - 1;
    }

    getComponent() {
        switch(this.state.dataState) {
            case 'Loading':
                return (
                    <CardContainerForNoDataStates width={this.state.width == 0 ? 600 : this.state.width} 
                                                  height={this.state.height == 0 ? 300 : this.state.height}>
                        <h1>{this.state.recordDataSet.recordType}</h1>
                    </CardContainerForNoDataStates>
                )
            case 'No data':
                return (
                    <CardContainerForNoDataStates width={this.state.width == 0 ? 600 : this.state.width} 
                                                  height={this.state.height == 0 ? 300 : this.state.height}>
                        <h1>{this.state.recordDataSet.recordType}</h1>
                    </CardContainerForNoDataStates>
                )
            default:
                return (
                    <GraphContainer>
                        <GraphTitle>{this.state.recordDataSet.recordType}</GraphTitle>
                        <GraphSubTitle>From {this.state.recordDataSet.startDate} to {this.state.recordDataSet.endDate}</GraphSubTitle>
                        <DptGraph width={this.state.width == 0 ? 600 : this.state.width} 
                                    height={this.state.height == 0 ? 300 : this.state.height} 
                                    recordsToRender={this.state.recordDataSet.data}/>
                    </GraphContainer>
                )
        }
    }

    render() {
        return (
            <div>
                {this.getComponent()}
            </div>
        )
    }
}
