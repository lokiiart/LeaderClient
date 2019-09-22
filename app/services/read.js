import {READ} from '../utils/request'
export async function fetchFinanceDemands(){
  return READ({
    url: '/api/FinanceDemands'
  })
}

export async function fetchProjectCoordinate(){
  return READ({
    url: '/api/ProjectCoordinate'
  })
}

export async function fetchParkStatus(
  params={
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1
  }
){
  return READ({
    url: '/api/ParkStatus/summary?EndYear='+params.year+'&EndMonth='+params.month
  })
}
