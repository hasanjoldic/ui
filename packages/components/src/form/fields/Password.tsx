import React from "react";

import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

import { RHFWrapper } from "./RHFWrapper";

type BaseProps = StandardTextFieldProps;

export const PasswordFieldBase: React.FC<BaseProps> = React.forwardRef(
  ({ variant = "outlined" as const, ...props }, ref) => {
    return <TextField {...props} ref={ref} type="password" variant={variant} />;
  }
);

type Props = BaseProps &
  Omit<React.ComponentProps<typeof RHFWrapper>, "children">;

export const PasswordField: React.FC<Props> = ({
  name,
  registerOptions,
  ...props
}) => (
  <RHFWrapper name={name} registerOptions={registerOptions}>
    <PasswordFieldBase {...props} />
  </RHFWrapper>
);
