import {
    Table
} from "reactstrap";
import React from "react";

function ListItem(props) {
    const object = props.value;

    return <tr>
        <td>
            { object.url }
        </td>
        <td>
            { object.shortLink }
        </td>
        <td>
            { object.createdAt }
        </td>
        <td>
            <span>Ok</span>
        </td>
        </tr>;
}

function ItemList(props) {
    const links = props.links;
    const listItems = links.map((object) =>
        <ListItem key={object.id}   value={object} />
    );

    return (
        <React.Fragment>
            {listItems}
        </React.Fragment>
    );
}

export function ShortLink(props) {
    return (
        <Table borderless>
            <thead>
            <tr>
                <th>URL</th>
                <th>Firebase link</th>
                <th>CreateAt</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <ItemList links={props.links}/>
            </tbody>
        </Table>
    );
}