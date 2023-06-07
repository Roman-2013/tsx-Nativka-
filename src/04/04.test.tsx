

import {expect} from '@jest/globals'
test (" should take old men older then 90",()=> {


    const ages = [18, 20, 22, 1, 100, 90, 14]

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test (" should take coyrses chipper 160",()=> {

    type CourseType={
        title:string
        price:number
    }
    const courses =[
        {title:"Css",price:110},
        {title:"JS",price:200},
        {title:"React",price:150}
    ]

    const chipPredicate = (courses:CourseType ) => {
        return courses.price < 160
    }

    const chipCourses=courses.filter(el => el.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('Css')
    expect(chipCourses[1].title).toBe('React')
})