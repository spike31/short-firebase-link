import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";



export function Search(props) {
    const actionLink = (event) => {
        event.preventDefault();
        console.log(event);
    }

        return (
            <Form onSubmit={actionLink}>
                <FormGroup>
                    <Label for="textsearch">URL</Label>
                    <Input type="text" name="text" id="textsearch" placeholder="with a placeholder" />
                </FormGroup>

                <Button>Rechercher</Button>
            </Form>
        );
}