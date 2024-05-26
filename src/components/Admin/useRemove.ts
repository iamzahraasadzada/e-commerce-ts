import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProduct } from "../../services/apiProducts";

export function useRemove() {
  const queryClient = useQueryClient();
  const { mutate: remove, isPending } = useMutation({
    mutationFn: removeProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(["products"], data);
    },
  });

  return { remove, isPending };
}
