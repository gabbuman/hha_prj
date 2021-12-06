import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface dptData {
    name: string;
    main_color: string;
    bg_img: string;
}

type DptCardProps = {
    departmentData: dptData[];
}

type ColorProps = {
    main_color: string;
}

type txtColorProp = {
    txt_color:string;
}

type ProgressProps = {
    description: string;
    percentage: number;
    color: string;
}

export const DptCardGroup = styled.div<ColorProps> `
    width: 350px;
    height: 225px;
    padding: 30px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 10px 20px ${props => props.main_color}77;
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 20px 40px ${props => props.main_color}88;
    }
    &:hover img {
        transform: translateY(-10px);
    }
`

const CardBackground = styled.img `
    position: absolute;
    top: 0;
    height: 105%;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const CardTitle = styled.h3 `
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin: 0 0 0 0;
    width: 250px;
`

const BarContainer = styled.div<ColorProps> `
    width: 200px;
    margin: 0 auto 0 0;

    progress {
        appearance: none;

        ::-webkit-progress-bar {
            height: 8px;
            border-radius: 4px;
            background-color: #00000010;
        }

        ::-webkit-progress-value {
            height: 8px;
            border-radius: 4px;
            background-color: ${props => props.main_color};
        }
    }
`

const CardBody = styled.div<txtColorProp>`
    font-size: 12px;
    font-weight: 400;
    color: ${txtColorProp => txtColorProp.txt_color};
    text-transform: Capitalize;
    margin: 0 auto 15px 0;
`

class DptCard extends Component<dptData> {
    constructor(props: dptData){
        super(props);
    }

    render(){
    return (
        <Link to={{ pathname: "/dptpage", state: this.props.name}} >
            <div className="DptCard">
                <DptCardGroup main_color={this.props.main_color}>
                    <CardBackground src={this.props.bg_img} />
                    <CardTitle>{this.props.name}</CardTitle>
                </DptCardGroup> 
            </div>
    </Link>
    )
    }
}

export default DptCard




