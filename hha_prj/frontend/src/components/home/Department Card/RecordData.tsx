export interface RecordData {
    dateRecorded: string;
    value: number;
}

export interface RecordDataSet {
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
        {dateRecorded: "Jan, '20", value: 5},
        {dateRecorded: "Feb, '20", value: 7},
        {dateRecorded: "Mar, '20", value: 6},
        {dateRecorded: "Apr, '20", value: 11},
        {dateRecorded: "May, '20", value: 13},
        {dateRecorded: "Jun, '20", value: 18},
        {dateRecorded: "Jul, '20", value: 20},
        {dateRecorded: "Aug, '20", value: 21},
        {dateRecorded: "Sep, '20", value: 17},
        {dateRecorded: "Oct, '20", value: 12},
        {dateRecorded: "Nov, '20", value: 15},
        {dateRecorded: "Dec, '20", value: 18},
        {dateRecorded: "Jan, '21", value: 22},
        {dateRecorded: "Feb, '21", value: 27},
        {dateRecorded: "Mar, '21", value: 30},
        {dateRecorded: "Apr, '21", value: 22},
        {dateRecorded: "May, '21", value: 16},
        {dateRecorded: "Jun, '21", value: 11},
        {dateRecorded: "Jul, '21", value: 7},
        {dateRecorded: "Aug, '21", value: 5},
        {dateRecorded: "Sep, '21", value: 2},
        {dateRecorded: "Oct, '21", value: 5},
        {dateRecorded: "Nov, '21", value: 8},
        {dateRecorded: "Dec, '21", value: 11},
    ]
}