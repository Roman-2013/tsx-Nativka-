import {ChangeEvent, MouseEvent, useState} from 'react';

export const User = () => {
    let [state, setState] = useState('')


    const deleteUser = () => {
        setState(' ')
        console.log('')
    }

    const saveUser = () => {
        console.log(state)
    }


    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.currentTarget.value)
    }

    const focusLost = () => {
        console.log('focus lost')
    }

    return (<div>
            <input value={state} tabIndex={1} onChange={onNameChanged}></input>
            <button disabled={true} name={'deleteBaton'} onClick={deleteUser}>delete</button>
            <button name={'saveButton'} onClick={saveUser}>save</button>
        </div>
    )
}