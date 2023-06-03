type StreetType = {
    title: string
}
type AdressType = {
    number: number
    street: StreetType
}
type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AdressType

}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citixensNumber: number
}

type titletype={
    title:string
}
type adressType={
    street:titletype
}
export type GovernmentBuildingsType={
    type:"HOSPITAL"|'FIRE-STATION'
    budget:number
    staffCount:number
    address:adressType
}