import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { DepartmentGraphCard } from './DptGraphCard';
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

interface GraphPageProps {
    departmentName: string
}

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
            console.log(result.data);
            setFields(result.data);
            setFilteredField(result.data);
        })
    }, []);

    const handleYearChange = (yearChangeEvent: SelectChangeEvent<number>) => {
        
    }

    return (
        <DepartmentGraphPageContainer numberOfGraphs={filteredFields.length}>
            <FormControl fullWidth>
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                    labelId="year-select-label"
                    id="year-select-label"
                    label="Year"
                    onChange={handleYearChange}>

                </Select>
            </FormControl>
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
                filteredFields.map((field) => (
                    // TODO: correct width and height
                    <DepartmentGraphCard
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
            ) : (
                <h1>No results found.</h1>
            )}
        </DepartmentGraphPageContainer>
    )
}