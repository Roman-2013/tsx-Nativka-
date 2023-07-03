import React from 'react';

function icreaseAge(u:UserType){
    u.age++
}

type UserType={
    name:string
    age:number
    address:{ title:string}
}

test ('big reference type test',()=>{
    var user={
        name:"dima",
        age:32,
        address:{
            title:'Minsk'
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(33)

})

test ('array referenc test',()=>{
    var user=[
        {
        name:"dima",
        age:32
    },
        {
            name:"dima",
            age:32
        }
    ]

    var admins=user

    admins.push({name:'roma',age:27})

    expect(user[2]).toEqual({name:'roma',age:27})

})


test ('vzlue type test',()=>{
    var userCount=100

    var adminsCount=userCount+1

    expect( userCount).toEqual(100)
})




test ('reference type test',()=>{
    var user={
        name:"dima",
        age:32,
        address:{
            title:'Minsk'
        }
    }

    let addr=user.address

    let user2:UserType={
        name:'natasha',
        age:39,
        address:user.address
    }

   user2.address.title='kanary'

    expect(user.address.title).toBe('kanary')
    expect(user.address).toBe(user2.address)

})



test ('reference type array test',()=>{

     let adress ={
         title:'minsk'
     }
    var user= {
            name: "dima",
            age: 32,
            address: adress
        }
var user2= {
        name: 'natasha',
        age: 39,
        address: adress
    }
    const userss=[user,user2,{name:'miha',age:4,adress:adress}]
    const admin=[user,user2]
    admin[0].name='Serhey'
    expect(user.name).toBe("Serhey")


})