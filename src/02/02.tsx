type LocalCitiType = {
    title: string
    countryTitle: string
}
type AdressType = {
    streetTtitle: string
    city: LocalCitiType

}
type TechType = {
    id: number
    title: string
}
type StedentType = {
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechType>
}


export const student: StedentType = {
    name: "dima",
    age: 3,
    isActive: false,
    adress: {
        streetTtitle: "surhanova 2",
        city: {
            title: "minsk",
            countryTitle: "belarus",
            }
            },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "React "
        },
        {
            id: 3,
            title: "CSS"
        }
    ]
}
console.log(student.technologies[0].title)