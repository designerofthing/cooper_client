import React from 'react';
import { Label, Select, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'; 

const InputFields = ({ onChangeHandler }) => {
    return (
        <>
        <Label style={{ padding: '12px', marginRight: '10px', color: '#565d47'}}>Distance</Label>
        <Input style={{ padding: '14px', marginRight: '10px' }}
          onChange={onChangeHandler}
          name="distance" 
          id="distance"  
        ></Input>
  
        <Dropdown text='Gender' style={{ color: '#565d47', marginRight: '15px'}} onChange={onChangeHandler} name="gender" id="gender">
          <DropdownMenu>
          <DropdownItem value="female">Female</DropdownItem>
          <DropdownItem value="male">Male</DropdownItem>
          </DropdownMenu>
        </Dropdown>
  
        <Label style={{ padding: '12px', margin: '10px' }} >Age</Label>
        <Input style={{ padding: '14px', marginRight: '10px' }}
          onChange={onChangeHandler}
          name="age"
          id="age"
        ></Input>
        </>
    );
};

export default InputFields;