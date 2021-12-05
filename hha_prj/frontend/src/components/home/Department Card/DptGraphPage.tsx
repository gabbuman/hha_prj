import React, { useState } from 'react'

export default function DepartmentGraphPage(departmentName: string) {
    const fields: string[] = [];
    const [field, setField] = useState('');
    const [filteredFields, setFilteredField] = useState(fields);

    const filter = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const keyword = target.value;

        if (keyword != null) {
            const filterResult = fields.filter((field) => {
                return field.toLowerCase().startsWith(keyword.toLowerCase());
            })
            setFilteredField(filterResult);
        } else {
            setFilteredField(fields);
        }

        setField(keyword);
    }

    return (
        <div>
            {filteredFields && filteredFields.length > 0 ? (
                filteredFields.map((field) => (
                    <div></div>
                ))
            ) : (
                <h1>No results found.</h1>
            )}
        </div>
    )
}