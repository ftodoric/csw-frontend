import { useLogin } from '@hooks'
import { LoginFormInputs, loginFormSchema } from '@types'
import { useForm } from 'react-hook-form'
import {
  InputContainer,
  AlternativeLink,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
  SubmitButton,
} from './styles'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

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
        <div style={{ width: '200px' }}>
          <InputContainer>
            <Image
              src="/images/person.svg"
              width={18}
              height={18}
              alt="usernameIcon"
            />
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
            <Image
              src="/images/lock.svg"
              width={18}
              height={18}
              alt="passwordIcon"
            />
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

        <SubmitButton type="submit" style={{ marginTop: 20 }} value="Login" />
      </StyledForm>

      <AlternativeLink>
        <Link href="/signup">or Sign Up</Link>
      </AlternativeLink>
    </StyledContainer>
  )
}
