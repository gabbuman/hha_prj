import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { DepartmentGraphCard } from './DptGraphCard';



export default function DepartmentGraphPage(departmentName: string) {
    const fields: string[] = [];
    const [field, setField] = useState('');
    const [filteredFields, setFilteredField] = useState(fields);
    const [minYear, setMinYear] = useState(2021);
    const [minMonth, setMinMonth] = useState(1);
    const [maxYear, setMaxYear] = useState(2021); // TODO: Use current year
    const [maxMonth, setMaxMonth] = useState(12);

    const handleYearChange = (yearChangeEvent: SelectChangeEvent<number>) => {

    }

    return (
        <div>
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

                    setField(keyword);
                }}
            />
            {filteredFields && filteredFields.length > 0 ? (
                filteredFields.map((field) => (
                    // TODO: correct width and height
                    <DepartmentGraphCard
                        department={departmentName}
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
        </div>
    )
}