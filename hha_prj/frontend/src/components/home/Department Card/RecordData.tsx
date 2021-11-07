interface RecordData {
    dateRecorded: string;
    value: number;
}

interface RecordDataSet {
    recordType: string;
    startDate: string;
    endDate: string;
    data: RecordData[];
}

export const sampleData: RecordDataSet = {
    recordType: "Beds Available",
    startDate: "JAN 2020",
    endDate: "JAN 2021",
    data: [
        {dateRecorded: "JAN 2020", value: 5},
        {dateRecorded: "FEB 2020", value: 7},
        {dateRecorded: "MAR 2020", value: 6},
        {dateRecorded: "APR 2020", value: 11},
        {dateRecorded: "MAY 2020", value: 13},
        {dateRecorded: "JUN 2020", value: 18},
        {dateRecorded: "JUL 2020", value: 20},
        {dateRecorded: "AUG 2020", value: 21},
        {dateRecorded: "SEP 2020", value: 17},
        {dateRecorded: "OCT 2020", value: 12},
        {dateRecorded: "NOV 2020", value: 15},
        {dateRecorded: "DEC 2020", value: 18},
        {dateRecorded: "JAN 2021", value: 22},
        {dateRecorded: "FEB 2021", value: 27},
        {dateRecorded: "MAR 2021", value: 30},
        {dateRecorded: "APR 2021", value: 22},
        {dateRecorded: "MAY 2021", value: 16},
        {dateRecorded: "JUN 2021", value: 11},
        {dateRecorded: "JUL 2021", value: 7},
        {dateRecorded: "AUG 2021", value: 5},
        {dateRecorded: "SEP 2021", value: 2},
        {dateRecorded: "OCT 2021", value: 5},
        {dateRecorded: "NOV 2021", value: 8},
        {dateRecorded: "DEC 2021", value: 11},
    ]
}