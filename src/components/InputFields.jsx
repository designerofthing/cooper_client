import React from 'react';
import { Label, Input, Form } from 'semantic-ui-react'; 

const InputFields = ({ onChangeHandler, handleDropdown }) => {
    return (
        <>
        <Label style={{ padding: '12px', marginRight: '10px', color: '#565d47'}}>Distance</Label>
        <Input style={{ padding: '14px', marginRight: '10px' }}
          onChange={onChangeHandler}
          name="distance" 
          id="distance"  
        ></Input>
  
        <Form.Select 
          options={[
                    { key: 'female', text: 'Female', value:"female" },
                    { key: 'male', text: 'Male', value:"male" }
                  ]}
          placeholder='Gender' 
          style={{ 
                  color: '#565d47', 
                  marginRight: '15px',
                  width: '40px'
                }} 
                onChange={handleDropdown}                        
                name="gender" 
                id="gender"
                />
       
  
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