import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
    }

    return (
        <Button onClick={handleClick}>Rechercher</Button>
    );
}

export function Search(props) {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>

                <ActionLink/>
            </Form>
        );
}