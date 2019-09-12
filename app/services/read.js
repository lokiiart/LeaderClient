import {READ} from '../utils/request'
export async function fetchFinanceDemands(){
    return READ({
        url: '/api/FinanceDemands'
    })
}

export async function fetchParkStatus(){
    return READ({
        url: '/api/ParkStatus/summary?EndYear=2019&EndMonth=9'
    })
}
