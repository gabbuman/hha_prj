import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { TextField, MenuItem } from '@mui/material';
import React, { useState, useEffect, ReactElement } from 'react'
import { DptGraphCard } from './DptGraphCard';
import styled from 'styled-components'
import axios from 'axios'

interface NumberOfGraphsProp {
    numberOfGraphs: number
}
const DepartmentGraphPageContainer = styled.div<NumberOfGraphsProp> `
    display: grid;
    grid-template-rows: repeat(${props => props.numberOfGraphs + 2}, auto);
    grid-gap: 10px;
    justify-items: center;
    padding: 14px;
`

const TimeRangeContainer = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    align-items: center;
`

interface GraphPageProps {
    departmentName: string
}

let graphCardDictionary = new Map();

export default function DepartmentGraphPage(props: GraphPageProps) {
    const [fields, setFields] = useState<string[]>([]);
    const [keyword, setKeyword] = useState(''); // TODO: evaluate this field
    const [filteredFields, setFilteredField] = useState(fields);
    const [minYear, setMinYear] = useState(2020);
    const [minMonth, setMinMonth] = useState(1);
    const [maxYear, setMaxYear] = useState(2021); // TODO: Use current year
    const [maxMonth, setMaxMonth] = useState(12);

    useEffect(() => {
        const questionsApi = axios.create({
            baseURL: "http://127.0.0.1:8000/api/questions_by_date_range/" // TODO: Update this 
        })
        questionsApi.get('/', {params: {
            department: props.departmentName,
            min_month: minMonth,
            min_year: minYear,
            max_month: maxMonth,
            max_year: maxYear
        }}).then((result: any) => {
            graphCardDictionary.clear();
            console.log("Questions: " + result.data);
            result.data.forEach((field: string) => {
                graphCardDictionary.set(field, (
                    <DptGraphCard
                        key={field + minMonth + minYear + maxMonth + maxYear}
                        department={props.departmentName}
                        field={field}
                        minMonth={minMonth}
                        minYear={minYear}
                        maxMonth={maxMonth}
                        maxYear={maxYear}
                        width={600}
                        height={300}
                    />
                ))
            })

            setFields(result.data);
            setFilteredField(result.data);
        })
    }, [minMonth, minYear, maxMonth, maxYear]);

    const handleMinYearChange = (yearChangeEvent: SelectChangeEvent<number>) => {
        setMinYear(yearChangeEvent.target.value as number);
    }

    const handleMinMonthChange = (monthChangeEvent: SelectChangeEvent<number>) => {
        setMinMonth(monthChangeEvent.target.value as number);
    }

    const handleMaxYearChange = (yearChangeEvent: SelectChangeEvent<number>) => {
        setMaxYear(yearChangeEvent.target.value as number);
    }

    const handleMaxMonthChange = (monthChangeEvent: SelectChangeEvent<number>) => {
        setMaxMonth(monthChangeEvent.target.value as number);
    }

    // For future developers: 
    // * For the year selection, create an API to see what years are available. 
    //     Month selection is similar to it.
    // * Should prevent the user from selecting smaller max value than min values.
    return (
        <DepartmentGraphPageContainer numberOfGraphs={filteredFields.length}>
            <TimeRangeContainer>
                <FormControl fullWidth>
                    <InputLabel id="min-year-select-label">Min Year</InputLabel>
                    <Select
                        labelId="min-year-select-label"
                        id="min-year-select-label"
                        label="Min Year"
                        defaultValue={2020}
                        onChange={handleMinYearChange}>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="min-month-select-label">Min Month</InputLabel>
                    <Select
                        labelId="min-month-select-label"
                        id="min-month-select-label"
                        label="Min Month"
                        defaultValue={1}
                        onChange={handleMinMonthChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="max-year-select-label">Max Year</InputLabel>
                    <Select
                        labelId="max-year-select-label"
                        id="max-year-select-label"
                        label="Max Year"
                        defaultValue={2021}
                        onChange={handleMaxYearChange}>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="max-month-select-label">Max Month</InputLabel>
                    <Select
                        labelId="max-month-select-label"
                        id="max-month-select-label"
                        label="Max Month"
                        defaultValue={12}
                        onChange={handleMaxMonthChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                    </Select>
                </FormControl>
            </TimeRangeContainer>
            <TextField
                fullWidth
                id="filter-text-field"
                label="Search"
                onChange={(event) => {
                    const keyword = event.target.value;

                    if (keyword != null) {
                        const filterResult = fields.filter((field) => {
                            return field.toLowerCase().startsWith(keyword.toLowerCase());
                        })
                        setFilteredField(filterResult);
                    } else {
                        setFilteredField(fields);
                    }

                    setKeyword(keyword);
                }}
            />
            {filteredFields && filteredFields.length > 0 ? (
                filteredFields.map((field) => {
                    return graphCardDictionary.get(field);
                })
            ) : (
                <h1>No results found.</h1>
            )}
        </DepartmentGraphPageContainer>
    )
}