import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import PasswordField from "../../../../components/form-controls/PasswordField/index.";

const LoginForm = (props) => {
  const schema = yup.object({});

  LoginForm.propTypes = {
    onSubmit: PropTypes.func,
  };

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className='px-5 py-10 text-center '>
      <Avatar className='mx-auto'>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography>Sign in</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='identifier' label='User' form={form} />
        <PasswordField name='password' label='Password' form={form} />
      </form>
      <Button type='submit' fullWidth variant='contained' onClick={form.handleSubmit(handleSubmit)}>
        Sign in
      </Button>
    </div>
  );
};

export default LoginForm;
