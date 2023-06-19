import {findAllByDisplayValue} from '@testing-library/react';

import React, {useState} from 'react';
import {ManType} from './7.destructuring.test';


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}


export const ManComponent: React.FC<PropsType> = ({man, title,...props}) => {

   const[message,setMessage]= useState<string>("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
            {props.car.model}
        </div>


    </div>

}