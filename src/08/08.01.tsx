import React from 'react';

export type User = {
    [key: string]: { id: number, name: string }
}
export const users: User = {
    '101': {id: 101, name: 'dima'},
    '1024': {id: 1024, name: 'sascha'},
    '103': {id: 103, name: 'bita'},
    '1048': {id: 1048, name: 'roma'},
}
const usersArray = [
    {id: 101, name: 'dima'},
    {id: 1024, name: 'sascha'},
    {id: 103, name: 'bita'},
    {id: 1048, name: 'roma'},
]


let user = {id: 1234, name: 'Sergey'}
users[user.id] = user
console.log(users)


users[1024].name = 'gora'