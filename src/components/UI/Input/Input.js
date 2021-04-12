import React from 'react'
import './Input.css'

const input = props => {
    let inputElement
    const inputClasses = ['MyInputElement']

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid')
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange = {props.changed} />
            )
            break
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} onChange = {props.changed} >
                    {props.elementConfig.options.map(
                        option => (
                            <option key={option.value} value={option.value} >{option.displayValue}</option>
                        )
                    )}
                </select>
            )
            break
        case ('textarea'):
            inputElement = (
                <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange = {props.changed} />
            )
            break
        default:
            inputElement = (
                <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange = {props.changed} />
            )
    }

    return (
        <div className='MyInput'>
            <label className='MyLabel'>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default input