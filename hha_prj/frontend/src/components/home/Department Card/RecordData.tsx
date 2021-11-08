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

export const sampleData2: RecordDataSet = {
    recordType: "Bed Days",
    startDate: "JAN 2020",
    endDate: "JAN 2021",
    data: [
        {dateRecorded: "2020-01-24T07:00:00.000Z", value: 500},
        {dateRecorded: "2020-02-24T07:00:00.000Z", value: 478},
        {dateRecorded: "2020-03-24T07:00:00.000Z", value: 457},
        {dateRecorded: "2020-04-24T07:00:00.000Z", value: 481},
        {dateRecorded: "2020-05-24T07:00:00.000Z", value: 479},
        {dateRecorded: "2020-06-24T07:00:00.000Z", value: 480},
        {dateRecorded: "2020-07-24T07:00:00.000Z", value: 492},
        {dateRecorded: "2020-08-24T07:00:00.000Z", value: 499},
        {dateRecorded: "2020-09-24T07:00:00.000Z", value: 502},
        {dateRecorded: "2020-10-24T07:00:00.000Z", value: 505},
        {dateRecorded: "2020-11-24T07:00:00.000Z", value: 510},
        {dateRecorded: "2020-12-24T07:00:00.000Z", value: 500},
        {dateRecorded: "2021-01-24T07:00:00.000Z", value: 496},
        {dateRecorded: "2021-02-24T07:00:00.000Z", value: 491},
        {dateRecorded: "2021-03-24T07:00:00.000Z", value: 483},
        {dateRecorded: "2021-04-24T07:00:00.000Z", value: 481},
        {dateRecorded: "2021-05-24T07:00:00.000Z", value: 480},
        {dateRecorded: "2021-06-24T07:00:00.000Z", value: 488},
        {dateRecorded: "2021-07-24T07:00:00.000Z", value: 492},
        {dateRecorded: "2021-08-24T07:00:00.000Z", value: 497},
        {dateRecorded: "2021-09-24T07:00:00.000Z", value: 501},
        {dateRecorded: "2021-10-24T07:00:00.000Z", value: 503},
        {dateRecorded: "2021-11-24T07:00:00.000Z", value: 506},
        {dateRecorded: "2021-12-24T07:00:00.000Z", value: 502},
    ]
}