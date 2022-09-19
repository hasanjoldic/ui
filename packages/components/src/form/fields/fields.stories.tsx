import React from "react";

import { Controller, FormProvider, useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { ComponentStory } from "@storybook/react";

import { ThemeProvider } from "@hasanjoldic/theme";

import { EmailField } from "./Email";
import { PasswordField } from "./Password";

export const Primary: ComponentStory<typeof ThemeProvider> = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(() =>
          console.log(methods.formState.errors)
        )}
      >
        <Box display="flex" flexDirection="column" rowGap={4}>
          <EmailField
            name="email"
            label="Email"
            registerOptions={{ required: "Field is required." }}
          />

          <PasswordField
            name="password"
            label="Password"
            registerOptions={{ required: "Field is required." }}
          />
        </Box>

        <Box mt={4}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Primary;
