import { useLogin } from "@hooks";
import { LoginFormInputs } from "@types";
import { useForm } from "react-hook-form";
import { StyledContainer, StyledForm, StyledTitle } from "./styles";

export const LoginForm = () => {
  const loginUser = useLogin();

  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit = (data: LoginFormInputs) => {
    loginUser.mutate(data);
  };

  return (
    <StyledContainer>
      <StyledTitle>Dobrodošli u igru!</StyledTitle>
      <div>Loginajte se kako biste mogli igrati.</div>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Korisničko ime</label>
        <input type="text" {...register("username")} />

        <label>Lozinka</label>
        <input type="password" {...register("password", { required: true })} />

        <input type="submit" />
      </StyledForm>
    </StyledContainer>
  );
};
