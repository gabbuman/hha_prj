export interface RecordData {
    date: string;
    answer: number;
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
        {date: "2020-01-24T07:00:00.000Z", answer: 5},
        {date: "2020-02-24T07:00:00.000Z", answer: 7},
        {date: "2020-03-24T07:00:00.000Z", answer: 6},
        {date: "2020-04-24T07:00:00.000Z", answer: 11},
        {date: "2020-05-24T07:00:00.000Z", answer: 13},
        {date: "2020-06-24T07:00:00.000Z", answer: 18},
        {date: "2020-07-24T07:00:00.000Z", answer: 20},
        {date: "2020-08-24T07:00:00.000Z", answer: 21},
        {date: "2020-09-24T07:00:00.000Z", answer: 17},
        {date: "2020-10-24T07:00:00.000Z", answer: 12},
        {date: "2020-11-24T07:00:00.000Z", answer: 15},
        {date: "2020-12-24T07:00:00.000Z", answer: 18},
        {date: "2021-01-24T07:00:00.000Z", answer: 22},
        {date: "2021-02-24T07:00:00.000Z", answer: 27},
        {date: "2021-03-24T07:00:00.000Z", answer: 30},
        {date: "2021-04-24T07:00:00.000Z", answer: 27},
        {date: "2021-05-24T07:00:00.000Z", answer: 24},
        {date: "2021-06-24T07:00:00.000Z", answer: 19},
        {date: "2021-07-24T07:00:00.000Z", answer: 18},
        {date: "2021-08-24T07:00:00.000Z", answer: 13},
        {date: "2021-09-24T07:00:00.000Z", answer: 10},
        {date: "2021-10-24T07:00:00.000Z", answer: 6},
        {date: "2021-11-24T07:00:00.000Z", answer: 8},
        {date: "2021-12-24T07:00:00.000Z", answer: 11},
    ]
}

export const sampleData2: RecordDataSet = {
    recordType: "Bed Days",
    startDate: "JAN 2020",
    endDate: "JAN 2021",
    data: [
        {date: "2020-01-24T07:00:00.000Z", answer: 500},
        {date: "2020-02-24T07:00:00.000Z", answer: 478},
        {date: "2020-03-24T07:00:00.000Z", answer: 457},
        {date: "2020-04-24T07:00:00.000Z", answer: 481},
        {date: "2020-05-24T07:00:00.000Z", answer: 479},
        {date: "2020-06-24T07:00:00.000Z", answer: 480},
        {date: "2020-07-24T07:00:00.000Z", answer: 492},
        {date: "2020-08-24T07:00:00.000Z", answer: 499},
        {date: "2020-09-24T07:00:00.000Z", answer: 502},
        {date: "2020-10-24T07:00:00.000Z", answer: 505},
        {date: "2020-11-24T07:00:00.000Z", answer: 510},
        {date: "2020-12-24T07:00:00.000Z", answer: 500},
        {date: "2021-01-24T07:00:00.000Z", answer: 496},
        {date: "2021-02-24T07:00:00.000Z", answer: 491},
        {date: "2021-03-24T07:00:00.000Z", answer: 483},
        {date: "2021-04-24T07:00:00.000Z", answer: 481},
        {date: "2021-05-24T07:00:00.000Z", answer: 480},
        {date: "2021-06-24T07:00:00.000Z", answer: 488},
        {date: "2021-07-24T07:00:00.000Z", answer: 492},
        {date: "2021-08-24T07:00:00.000Z", answer: 497},
        {date: "2021-09-24T07:00:00.000Z", answer: 501},
        {date: "2021-10-24T07:00:00.000Z", answer: 503},
        {date: "2021-11-24T07:00:00.000Z", answer: 506},
        {date: "2021-12-24T07:00:00.000Z", answer: 502},
    ]
}