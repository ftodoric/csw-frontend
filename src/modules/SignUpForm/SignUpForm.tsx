import { useForm } from "react-hook-form";
import {
  InputGroup,
  StyledContainer,
  StyledForm,
  StyledHint,
  StyledInput,
} from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs, registrationFormSchema } from "@types";
import { useRouter } from "next/router";
import { useAxios, useSignUp } from "@hooks";

export const SignUpForm = () => {
  const router = useRouter();
  const axios = useAxios();
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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <StyledInput placeholder="Username" {...register("username")} />
          <StyledHint>{errors.username?.message}</StyledHint>
        </InputGroup>

        <InputGroup>
          <StyledInput placeholder="Password" {...register("password")} />
          <StyledHint>{errors.password?.message}</StyledHint>
        </InputGroup>

        <InputGroup>
          <StyledInput
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          <StyledHint>{errors.confirmPassword?.message}</StyledHint>
        </InputGroup>

        <StyledInput type="submit" />
      </StyledForm>
    </StyledContainer>
  );
};
