import React, { Component } from 'react';
import DptGraph from './DptGraph';
import styled from 'styled-components'
import { RecordDataSet, sampleData } from './RecordData';
import axios from 'axios';
import { Api } from '@mui/icons-material';

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
    dptName: string;
}

// export const DptGraphCard = (props: GraphProps) => {
//     return (
//         <GraphContainer>
//             <GraphTitle>{props.recordDataSet.recordType}</GraphTitle>
//             <GraphSubTitle>From {props.recordDataSet.startDate} to {props.recordDataSet.endDate}</GraphSubTitle>
//             <DptGraph width={props.width} height={props.height} recordsToRender={props.recordDataSet.data}/>
//         </GraphContainer>
//     )
// };

// New implementation

interface GraphCardProps {
    // Fetching Data
    department: string;
    field: string;
    minMonth: number;
    minYear: number;
    maxMonth: number;
    maxYear: number;

    // Rendering Card
    width: number;
    height: number;
}

interface GraphCardData {
    width: number;
    height: number;
    recordDataSet: RecordDataSet;
}

const graphApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/graph_data/'
})

// class DepartmentGraphCard extends Component<GraphCardProps, GraphCardData> {
//     constructor(props: GraphCardProps) {
export class DptGraphCard extends Component<GraphProps, GraphCardData> {
    constructor(props: GraphProps) {
        super(props);

        this.state = {
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
            department: 'Rehab',
            field: 'Bed days',
            min_month: 1,
            min_year: 2021,
            max_month: 12,
            max_year: 2022
        }}).then( (result: any) => {
            console.log(result.data);

            this.setState({
                recordDataSet: {
                    recordType: result.data.field,
                    startDate: result.data.responses[0].date,
                    endDate: result.data.responses[this.getLastIndex(result.data.responses)].date,
                    data: sampleData.data
                }
            });
        })

        // TODO: show error
    }

    getLastIndex(array: any) {
        return array.length - 1 < 0 ? 0 : array.length - 1;
    }

    getComponent() {
        switch(this.state.recordDataSet.recordType) {
            case 'Loading...':
                return (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            default:
                return (
                        <GraphContainer>
                            <GraphTitle>{this.state.recordDataSet.recordType}</GraphTitle>
                            <GraphSubTitle>From {this.state.recordDataSet.startDate} to {this.state.recordDataSet.endDate}</GraphSubTitle>
                            <DptGraph width={this.state.width == 0 ? 600 : this.state.width} 
                                      height={this.state.height} 
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
