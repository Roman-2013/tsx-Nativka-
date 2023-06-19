import React from 'react';
export type ManType={
    name:string
    age:number,
    lessons:Array<{title:string}>
    adress:{street:{title:string}}
}

let props:ManType
beforeEach(()=>{
    props={
        name:'Roma',
        age:27,
        lessons:[{title:'1'},{title:'2'}],
        adress:{
            street:{
                title:"judro 6"
            }
        }
    }
})
test('',()=>{


    const{lessons,age}=props
    const {title}=props.adress.street

expect(age).toBe(27)
expect( title).toBe('judro 6')
})


test('',()=>{
    const l1=props.lessons[0]
    const l2=props.lessons[1]

const [title1,title2]=props.lessons

    expect(title1.title).toBe('1')
    expect(title2.title).toBe('2')
})
