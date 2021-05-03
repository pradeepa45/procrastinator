import React from 'react'
import { List, Checkbox } from 'semantic-ui-react'

function ListItem(props) {
    return (
        <List.Item >
            <h2>
                <Checkbox id={props.title} defaultChecked={props.completed} />
                {" " + props.title}
            </h2>
        </List.Item>
    )
}

export default ListItem;