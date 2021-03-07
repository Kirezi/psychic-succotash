import { observer } from 'mobx-react'
import React from 'react'
import { Trash } from 'react-feather'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background:none;
  cursor: pointer;
`
const ListItem = styled.li`
 display: flex;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 padding: 0.5rem 1rem;
 width:50%;
 margin:0.5rem 1rem;
 background-color: white;
 border-radius:5px
`

function CompletedItem({  item, onDelete }) {
    return (
        <ListItem>
               {item.name} <Button onClick={onDelete}> <Trash color="black" style={{ float: 'left'}}size={20} /></Button>
        </ListItem>

    )
}

export default styled(observer(CompletedItem))`
padding:1rem
`