import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { primaryColor } from '@colors'
import { IconLoader, IconPassword, IconUser } from '@components/Icons'
import { useSignUp } from '@hooks'
import * as S from '@modules/LoginForm/styles'
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
    <S.StyledContainer>
      <S.StyledTitle>Sign Up</S.StyledTitle>

      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.InputIcon>
            <IconUser width="18px" height="18px" />
          </S.InputIcon>
          <S.StyledInput type="text" placeholder="Username" {...register('username')} />
        </S.InputContainer>
        {errors.username && <S.ErrorContainer>{errors.username.message}</S.ErrorContainer>}

        <S.InputContainer style={{ marginTop: 20 }}>
          <S.InputIcon>
            <IconPassword width="18px" height="18px" />
          </S.InputIcon>
          <S.StyledInput type="password" placeholder="Password" {...register('password', { required: true })} />
        </S.InputContainer>
        {errors.password && <S.ErrorContainer>{errors.password.message}</S.ErrorContainer>}

        <S.InputContainer style={{ marginTop: 20 }}>
          <S.InputIcon>
            <IconPassword width="18px" height="18px" />
          </S.InputIcon>
          <S.StyledInput type="password" placeholder="Confirm password" {...register('confirmPassword')} />
        </S.InputContainer>
        {errors.confirmPassword && <S.ErrorContainer>{errors.confirmPassword.message}</S.ErrorContainer>}

        <S.SubmitButton type="submit" value="Sign up" />
      </S.StyledForm>

      {signUpUser.isError && <S.ErrorContainer style={{ marginTop: 10 }}>Username already exists.</S.ErrorContainer>}

      <S.AlternativeLink>
        <Link href="/">Already have an account? Login</Link>
      </S.AlternativeLink>

      {signUpUser.isLoading && (
        <div style={{ marginTop: '20px' }}>
          <IconLoader width="20px" fill={primaryColor} />
        </div>
      )}
    </S.StyledContainer>
  )
}
