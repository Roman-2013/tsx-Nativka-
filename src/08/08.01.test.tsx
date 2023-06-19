import React from 'react';
import {User} from './08.01';



let users: User


beforeEach(()=>{
    users={
        '101': {id: 101, name: 'dima'},
        '1024': {id: 1024, name: 'sascha'},
        '103': {id: 103, name: 'bita'},
        '1048': {id: 1048, name: 'roma'},
    }
}
)

test ('',()=>{
  users['101'].name='gora'

    expect(users['101'].name).toBe('gora')
})


test ('',()=>{
   delete users['101']

    expect(users['101']).toBeUndefined()
})