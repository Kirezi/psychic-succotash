import { observer } from 'mobx-react';
import React, { useRef } from 'react';
import { Plus } from 'react-feather';
import styled from 'styled-components';
import './index.css';

function TodoListItem({ className, name, onComplete, onChange, FocusInput }) {

    const ref = useRef();

    const Input = styled.input`
            width:300px;
            padding:14px;
            display:inline-block;
            border-radius:5px;
            border:none;
            &:focus{
                 border:none;
                }
    `;

    const Button = styled.li`
    padding:11px;
    color:black;
    font-weight:500;
    display:inline-block;
    border: 2px solid #F5F5F5;
    border-radius:5px;
    margin-left:0.3rem;
    transition:all 0.2s ease-in;
    &:hover{
        background-color:#F5F5F5;
        color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,41,75,1) 0%, rgba(117,112,129,1) 0%, rgba(204,41,63,1) 0%, rgba(255,0,168,1) 100%);
    }
    `;

    return (

        <li className={className}>
            <Input autoFocus={FocusInput === "addItemSearch"} key={"add-item"} ref={ref} onChange={(e) => { onChange(e, ref) }} value={name} />
            <Button onClick={onComplete}><Plus size={15} /></Button>
        </li>

    )
}

export default styled(observer(TodoListItem))`
   width:100%;
`
