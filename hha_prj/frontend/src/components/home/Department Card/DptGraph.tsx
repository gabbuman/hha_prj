
// Citation:
// Parts of the code in this file is adapted from sample code of the Airbnb visx library: https://airbnb.io/visx/gallery

import React, { useMemo, useCallback } from 'react';
import { AreaClosed, Line, Bar } from '@visx/shape';
import { curveLinear } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import { LinePath } from '@visx/shape';
import styled from 'styled-components'
import { RecordData } from './RecordData';

interface ContainerSizingProps {
    width: number;
    height: number;
}

const GraphContainer = styled.div<ContainerSizingProps> `
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    
    &:hover {
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.18);
    }
`

type TooltipData = RecordData;
let records: RecordData[];

export const background = '#fefefe';
export const background2 = '#ffffff';
export const accentColor = '#6A91C7';
export const accentColorDark = '#6A91C7';

const tooltipStyles = {
    ...defaultStyles,
    background,
    border: '1px solid white',
    color: '#6A91C7',
};

const tooltipBottomStyles = {
    ...defaultStyles,
    color: '#6A91C7',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
    minWidth: 80,
    textAlign: 'center' as 'center',
    transform: 'translateX(-62%)',
};

const formatDate = timeFormat("%b, '%y");
const getDate = (record: RecordData) => { 
    let date = new Date(record.date);
    date.setUTCDate(2);
    return date;
};
const getRecordValue = (record: RecordData) => record.answer;
const bisectDate = bisector<RecordData, Date>((record) => new Date(record.date)).left;

export type AreaProps = {
    width: number;
    height: number;
    recordsToRender: RecordData[];
    margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip<AreaProps, TooltipData>(
    ({
        width,
        height,
        recordsToRender,
        margin = { top: 0, right: 0, bottom: 0, left: 0 },
        showTooltip,
        hideTooltip,
        tooltipData,
        tooltipTop = 0,
        tooltipLeft = 0,
    }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
        if (width < 10) return null;
        records = recordsToRender;

        // bounds
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // scales
        const dateScale = useMemo(
            () => scaleTime({
                range: [margin.left, innerWidth + margin.left],
                domain: extent(records, getDate) as [Date, Date],
            }),
            [innerWidth, margin.left],
        );
        
        const recordsValueScale = useMemo(
            () => scaleLinear({
                range: [innerHeight + margin.top, margin.top],
                domain: [0, (max(records, getRecordValue) || 0) + innerHeight / 10],
                nice: true,
            }),
            [margin.top, innerHeight],
        );

        // tooltip handler
        const handleTooltip = useCallback(
            (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
                const { x } = localPoint(event) || { x: 0 };
                const x0 = dateScale.invert(x);
                const index = bisectDate(records, x0, 1);
                const d0 = records[index - 1];
                const d1 = records[index];
                let d = d0;
                if (d1 && getDate(d1)) {
                    d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
                }
                showTooltip({
                    tooltipData: d,
                    tooltipLeft: x,
                    tooltipTop: recordsValueScale(getRecordValue(d)),
                });
            },
            [showTooltip, recordsValueScale, dateScale],
        );

        return (
            <GraphContainer width={width} height={height}>
                <svg width={width} height={height}>
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="url(#area-background-gradient)"
                        rx={14}
                    />
                    <LinearGradient id="area-background-gradient" from={background} to={background2} />
                    <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.1} />
                    <LinearGradient id="stroke-gradient" from={'#1753A7'} to={background} toOpacity={0.0} />
                    <clipPath id="background-rect">
                        <rect
                            x={0}
                            y={0}
                            width={width}
                            height={height}
                            rx={14}
                        />
                    </clipPath>
                    <GridRows
                        left={margin.left}
                        scale={recordsValueScale}
                        width={innerWidth}
                        strokeDasharray="1,3"
                        stroke={accentColor}
                        strokeOpacity={0.05}
                        pointerEvents="none"
                    />
                    <GridColumns
                        top={margin.top}
                        scale={dateScale}
                        height={innerHeight}
                        strokeDasharray="1,3"
                        stroke={accentColor}
                        strokeOpacity={0.3}
                        pointerEvents="none"
                    />

                    <AreaClosed<RecordData>
                        data={records}
                        x={(data) => dateScale(getDate(data)) ?? 0}
                        y={(data) => recordsValueScale(getRecordValue(data)) ?? 0}
                        yScale={recordsValueScale}
                        fill="url(#area-gradient)"
                        curve={curveLinear}
                        clipPath="url(#background-rect)"
                    />
                    <LinePath<RecordData>
                        data={records}
                        curve={curveLinear}
                        x={(data) => dateScale(getDate(data)) ?? 0}
                        y={(data) => recordsValueScale(getRecordValue(data)) ?? 0}
                        stroke="#678ec5"
                        strokeWidth={2.0}
                    />
                    <Bar
                        x={margin.left}
                        y={margin.top}
                        width={innerWidth}
                        height={innerHeight}
                        fill="transparent"
                        rx={14}
                        onTouchStart={handleTooltip}
                        onTouchMove={handleTooltip}
                        onMouseMove={handleTooltip}
                        onMouseLeave={() => hideTooltip()}
                    />
                    {tooltipData && (
                        <g>
                            <Line
                                from={{ x: tooltipLeft, y: margin.top }}
                                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                                stroke={accentColorDark}
                                strokeWidth={2}
                                pointerEvents="none"
                                strokeDasharray="5,2"
                            />
                            <circle
                                cx={tooltipLeft}
                                cy={tooltipTop + 1}
                                r={4}
                                fill="black"
                                fillOpacity={0.1}
                                stroke="black"
                                strokeOpacity={0.1}
                                strokeWidth={2}
                                pointerEvents="none"
                            />
                            <circle
                                cx={tooltipLeft}
                                cy={tooltipTop}
                                r={4}
                                fill={accentColorDark}
                                stroke="white"
                                strokeWidth={2}
                                pointerEvents="none"
                            />
                        </g>
                    )}
                </svg>
            {tooltipData && (
                <div>
                    <TooltipWithBounds
                        key={Math.random()}
                        top={tooltipTop - 12}
                        left={tooltipLeft + 12}
                        style={tooltipStyles}
                    >
                    {`${getRecordValue(tooltipData)}`}
                    </TooltipWithBounds>
                    <Tooltip
                        top={innerHeight + margin.top +11}
                        left={tooltipLeft}
                        style={tooltipBottomStyles}
                    >
                        {formatDate(getDate(tooltipData))}
                    </Tooltip>
                </div>
            )}
            </GraphContainer>
        );
    },
);