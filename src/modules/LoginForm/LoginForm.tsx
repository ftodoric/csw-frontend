import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IconLoader, IconPassword, IconUser } from '@components/Icons'
import { useLogin } from '@hooks'
import { LoginFormInputs, loginFormSchema } from '@types'

import {
  InputContainer,
  AlternativeLink,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
  SubmitButton,
  ErrorContainer,
} from './styles'

export const LoginForm = () => {
  const loginUser = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: zodResolver(loginFormSchema) })
  const onSubmit = (data: LoginFormInputs) => {
    loginUser.mutate(data)
  }

  return (
    <StyledContainer>
      <StyledTitle>Login</StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <IconUser width="18px" height="18px" />
          <StyledInput
            type="text"
            placeholder="Username"
            {...register('username')}
          />
        </InputContainer>
        {errors.username && (
          <ErrorContainer>{errors.username.message}</ErrorContainer>
        )}

        <InputContainer style={{ marginTop: 20 }}>
          <IconPassword width="18px" height="18px" />
          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </InputContainer>
        {errors.password && (
          <ErrorContainer>{errors.password.message}</ErrorContainer>
        )}

        <SubmitButton type="submit" value="Login" />
      </StyledForm>

      {loginUser.isError && <ErrorContainer>Wrong credentials.</ErrorContainer>}

      <AlternativeLink>
        <Link href="/signup">or Sign Up</Link>
      </AlternativeLink>

      {loginUser.isLoading && (
        <div style={{ marginTop: '20px' }}>
          <IconLoader width="20px" fill="firebrick" />
        </div>
      )}
    </StyledContainer>
  )
}
