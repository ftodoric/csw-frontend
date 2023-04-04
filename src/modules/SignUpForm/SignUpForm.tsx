import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs, registrationFormSchema } from "@types";
import { useSignUp } from "@hooks";
import {
  AlternativeLink,
  InputContainer,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
  SubmitButton,
} from "@modules/LoginForm/styles";
import Image from "next/image";
import Link from "next/link";

export const SignUpForm = () => {
  const signUpUser = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registrationFormSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    signUpUser.mutate(data);
  };

  return (
    <StyledContainer>
      <StyledTitle>Sign Up</StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "200px" }}>
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
              {...register("username")}
            />
          </InputContainer>
          {errors.username && (
            <div style={{ fontSize: 12, color: "#e34d4d", marginTop: 5 }}>
              {errors.username.message}
            </div>
          )}
        </div>

        <div style={{ width: "200px" }}>
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
              {...register("password", { required: true })}
            />
          </InputContainer>
          {errors.password && (
            <div style={{ fontSize: 12, color: "#e34d4d", marginTop: 5 }}>
              {errors.password.message}
            </div>
          )}
        </div>

        <div style={{ width: "200px" }}>
          <InputContainer style={{ marginTop: 20 }}>
            <Image
              src="/images/lock.svg"
              width={18}
              height={18}
              alt="passwordIcon"
            />
            <StyledInput
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
          </InputContainer>
          {errors.confirmPassword && (
            <div style={{ fontSize: 12, color: "#e34d4d", marginTop: 5 }}>
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <SubmitButton type="submit" style={{ marginTop: 20 }} value="Sign up" />
      </StyledForm>

      <AlternativeLink>
        <Link href="/">or Login</Link>
      </AlternativeLink>
    </StyledContainer>
  );
};
