import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IconLoader, IconPassword, IconUser } from '@components/Icons'
import { useSignUp } from '@hooks'
import {
  AlternativeLink,
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
        <div style={{ width: '200px' }}>
          <InputContainer>
            <IconUser width="18px" height="18px" />
            <StyledInput
              type="text"
              placeholder="Username"
              {...register('username')}
            />
          </InputContainer>
          {errors.username && (
            <div style={{ fontSize: 12, color: '#e34d4d', marginTop: 5 }}>
              {errors.username.message}
            </div>
          )}
        </div>

        <div style={{ width: '200px' }}>
          <InputContainer style={{ marginTop: 20 }}>
            <IconPassword width="18px" height="18px" />
            <StyledInput
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </InputContainer>
          {errors.password && (
            <div style={{ fontSize: 12, color: '#e34d4d', marginTop: 5 }}>
              {errors.password.message}
            </div>
          )}
        </div>

        <div style={{ width: '200px' }}>
          <InputContainer style={{ marginTop: 20 }}>
            <IconPassword width="18px" height="18px" />
            <StyledInput
              type="password"
              placeholder="Confirm password"
              {...register('confirmPassword')}
            />
          </InputContainer>
          {errors.confirmPassword && (
            <div style={{ fontSize: 12, color: '#e34d4d', marginTop: 5 }}>
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <SubmitButton type="submit" style={{ marginTop: 20 }} value="Sign up" />
      </StyledForm>

      <AlternativeLink>
        <Link href="/">or Login</Link>
      </AlternativeLink>

      {signUpUser.isLoading && (
        <div style={{ marginTop: '20px' }}>
          <IconLoader width="20px" fill="firebrick" />
        </div>
      )}
    </StyledContainer>
  )
}
