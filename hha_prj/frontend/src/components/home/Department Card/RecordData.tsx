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
        {dateRecorded: "2020-01-24T07:00:00.000Z", value: 5},
        {dateRecorded: "2020-02-24T07:00:00.000Z", value: 7},
        {dateRecorded: "2020-03-24T07:00:00.000Z", value: 6},
        {dateRecorded: "2020-04-24T07:00:00.000Z", value: 11},
        {dateRecorded: "2020-05-24T07:00:00.000Z", value: 13},
        {dateRecorded: "2020-06-24T07:00:00.000Z", value: 18},
        {dateRecorded: "2020-07-24T07:00:00.000Z", value: 20},
        {dateRecorded: "2020-08-24T07:00:00.000Z", value: 21},
        {dateRecorded: "2020-09-24T07:00:00.000Z", value: 17},
        {dateRecorded: "2020-10-24T07:00:00.000Z", value: 12},
        {dateRecorded: "2020-11-24T07:00:00.000Z", value: 15},
        {dateRecorded: "2020-12-24T07:00:00.000Z", value: 18},
        {dateRecorded: "2021-01-24T07:00:00.000Z", value: 22},
        {dateRecorded: "2021-02-24T07:00:00.000Z", value: 27},
        {dateRecorded: "2021-03-24T07:00:00.000Z", value: 30},
        {dateRecorded: "2021-04-24T07:00:00.000Z", value: 27},
        {dateRecorded: "2021-05-24T07:00:00.000Z", value: 24},
        {dateRecorded: "2021-06-24T07:00:00.000Z", value: 19},
        {dateRecorded: "2021-07-24T07:00:00.000Z", value: 18},
        {dateRecorded: "2021-08-24T07:00:00.000Z", value: 13},
        {dateRecorded: "2021-09-24T07:00:00.000Z", value: 10},
        {dateRecorded: "2021-10-24T07:00:00.000Z", value: 6},
        {dateRecorded: "2021-11-24T07:00:00.000Z", value: 8},
        {dateRecorded: "2021-12-24T07:00:00.000Z", value: 11},
    ]
}