import {
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";

function InputField(props) {
  const {
    error,
    errorMsg,
    handleBlur,
    handleChange,
    value,
    label,
    name,
    placeholder,
    inputprops,
  } = props;
  return (
    <Stack spacing={1}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        fullWidth
        id={name}
        type="text"
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        error={Boolean(error)}
        inputProps={inputprops}
      />
      {error && (
        <FormHelperText error id={`helper-text-${name}`}>
          {errorMsg}
        </FormHelperText>
      )}
    </Stack>
  );
}

export default InputField;
