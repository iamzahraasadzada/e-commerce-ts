import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { loginTypes } from "../../types/Login";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: loginTypes) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/admin", { replace: true });
    },
  });

  return { login, isPending };
}
