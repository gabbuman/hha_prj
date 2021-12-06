
export interface dptData {
    name: string;
    perc_of_data_entered: number;
    num_of_case_studies: number;
    bg_img: string;
    main_color: string;
}

export const dpts_Data: dptData[] = [

    {
        name: "Rehab",
        perc_of_data_entered: 80,
        num_of_case_studies: 15,
        bg_img: '/static/rehab-bg.png',
        main_color: "#ef8364"
    },
    {
        name: "Maternity",
        perc_of_data_entered: 80,
        num_of_case_studies: 15,
        bg_img: '/static/maternity-bg.png',
        main_color: "#b46fbc"
    },
    {
        name: "NICU / Pediatric",

        perc_of_data_entered: 80,
        num_of_case_studies: 15,
        bg_img: '/static/nicu-bg.png',
        main_color: "#0aa8d1"
    },
    {
        name: "Community Health",
        perc_of_data_entered: 80,
        num_of_case_studies: 15,
        bg_img: '/static/community-health-bg.png',
        main_color: "#ee594a" 
    }
]