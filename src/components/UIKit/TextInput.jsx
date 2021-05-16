import React from 'react';
import TextField from "@material-ui/core"

const TextField = (props) => {
    return (
        <TextField 
          fullWidth={props.fullWidth}
          label={props.label}
          margin="dense"
          multiline={props.required}
          required={props.required}
          rows={props.rows}
          value={props.value}
          type={props.type}
          onChange={props.onChange}
        />
    )
}

export default TextField;