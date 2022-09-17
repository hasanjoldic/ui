import React from "react";

import { RegisterOptions, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  registerOptions?: RegisterOptions;

  children: React.ReactElement;
}

export const RHFWrapper: React.FC<Props> = ({
  name,
  registerOptions,
  children,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  const errorMessage = error?.message;

  const child = React.Children.only(children);

  return React.cloneElement(child, {
    ...register(name, registerOptions),
    required: !!registerOptions?.required,
    error: !!error,
    helperText: errorMessage,
  });
};
