import React from 'react';
import Select from 'react-select';
import Button from '../UI/Button';
import style from './style.module.sass';

export default function AddDeal({addNewDeal}) {

    const day_options = [
        { value: 1, label: 'Monday'},
        { value: 2, label: 'Tuesday'},
        { value: 3, label: 'Wednesday'},
        { value: 4, label: 'Thursday'},
        { value: 5, label: 'Friday'},
        { value: 6, label: 'Saturday'},
        { value: 7, label: 'Sunday'}
    ];
    
    const importance_options = [
        { value: 0, label: 'NotImportant'},
        { value: 1, label: 'Important'}
    
    ];

    const submit = event => {
        event.preventDefault();
        const {day, importance, descr} = event.target;
        addNewDeal(descr.value, importance.value, day.value );
        descr.value = '';
    };

    return (
        <form className={style.container} onSubmit={submit}>
            <div className={style.input_container} >
                <Select placeholder='Day' name='day' options={day_options}/>
                <Select placeholder='Importance' name="importance" options={importance_options}/>
                <input placeholder='description' className={style.descr} type="text" name='descr'/>
            </div> 
            <Button>Add+</Button>
        </form>
    )
}
