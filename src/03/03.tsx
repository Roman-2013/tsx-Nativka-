import {StedentType} from '../02/02';

export const sum=(a:number,b:number)=>{
    return a+b
}
export const addSkill=(student:StedentType, skill:string)=>{
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}

export const makeStudentActive=(s:StedentType)=>{
    s.isActive=true
}

export const doesStudentLiveIN=(g:StedentType,cityName:string)=>{
    return g.adress.city.title===cityName
}