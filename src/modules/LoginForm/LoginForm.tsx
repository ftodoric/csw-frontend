import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { primaryColor } from '@colors'
import { IconLoader, IconPassword, IconUser } from '@components/Icons'
import { useLogin } from '@hooks'
import { LoginFormInputs, loginFormSchema } from '@types'

import * as S from './styles'

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
    <S.StyledContainer>
      <S.StyledTitle>Login</S.StyledTitle>

      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <IconUser width="18px" height="18px" />
          <S.StyledInput type="text" placeholder="Username" {...register('username')} />
        </S.InputContainer>
        {errors.username && <S.ErrorContainer>{errors.username.message}</S.ErrorContainer>}

        <S.InputContainer style={{ marginTop: 20 }}>
          <IconPassword width="18px" height="18px" />
          <S.StyledInput type="password" placeholder="Password" {...register('password', { required: true })} />
        </S.InputContainer>
        {errors.password && <S.ErrorContainer>{errors.password.message}</S.ErrorContainer>}

        <S.SubmitButton type="submit" value="Login" />
      </S.StyledForm>

      {loginUser.isError && <S.ErrorContainer style={{ marginTop: 10 }}>Wrong credentials.</S.ErrorContainer>}

      <S.AlternativeLink>
        <Link href="/signup">or Sign Up</Link>
      </S.AlternativeLink>

      {(loginUser.isLoading || loginUser.isSuccess) && (
        <div style={{ marginTop: '20px' }}>
          <IconLoader width="20px" fill={primaryColor} />
        </div>
      )}
    </S.StyledContainer>
  )
}
