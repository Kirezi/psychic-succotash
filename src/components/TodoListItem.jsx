import { observer } from 'mobx-react'
import styled from 'styled-components'

function TodoListItem({ className, name, onComplete, onChange }) {
    return (

                   <li className={className}>
                        <input onChange={onChange} value={name} />
                        <button onClick={onComplete}>Add?</button>
                    </li>

    )
}

export default styled(observer(TodoListItem))`
    color: red;
`
