import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IconLoader, IconPassword, IconUser } from '@components/Icons'
import { useSignUp } from '@hooks'
import {
  AlternativeLink,
  ErrorContainer,
  InputContainer,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
  SubmitButton,
} from '@modules/LoginForm/styles'
import { RegisterFormInputs, registrationFormSchema } from '@types'

export const SignUpForm = () => {
  const signUpUser = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registrationFormSchema),
  })

  const onSubmit = async (data: RegisterFormInputs) => {
    signUpUser.mutate(data)
  }

  return (
    <StyledContainer>
      <StyledTitle>Sign Up</StyledTitle>

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

        <InputContainer style={{ marginTop: 20 }}>
          <IconPassword width="18px" height="18px" />
          <StyledInput
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
        </InputContainer>
        {errors.confirmPassword && (
          <ErrorContainer>{errors.confirmPassword.message}</ErrorContainer>
        )}

        <SubmitButton type="submit" value="Sign up" />
      </StyledForm>

      {signUpUser.isError && (
        <ErrorContainer>Username already exists.</ErrorContainer>
      )}

      <AlternativeLink>
        <Link href="/">Already have an account? Login</Link>
      </AlternativeLink>

      {signUpUser.isLoading && (
        <div style={{ marginTop: '20px' }}>
          <IconLoader width="20px" fill="firebrick" />
        </div>
      )}
    </StyledContainer>
  )
}
