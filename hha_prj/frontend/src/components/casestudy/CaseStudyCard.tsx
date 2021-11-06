import React, { Component } from 'react';
import styled from 'styled-components';
import { StringLiteralLike } from 'typescript';

export interface CSData {
    title: string;
    type: string;
    content: string;
    image: string;
    main_color: string;
}

type ColorProps = {
    main_color: string;
}

export const CSCardGroup = styled.div<ColorProps> `
    width: 350px;
    height: 225px;
    padding: 15px 15px 15px 15px;
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
const CardContent = styled.p`
    color: black;
    font-size: 12px;
`

const CSCard: React.FC<CSData> = ({title, type, content, image, main_color}: CSData) =>  {
    return (
        <a href="/CaseStudy" style={{ textDecoration: 'none' }}>
            <div className="DptCard">
                <CSCardGroup main_color={main_color}>
                    <CardBackground src={image} />
                    <CardTitle>{title}</CardTitle>
                    <CardContent>{content}</CardContent>
                </CSCardGroup> 
            </div>
        </a>
    )
}

export default CSCard