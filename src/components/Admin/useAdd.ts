import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adedProductTypes } from "../../types/Products";
import { addProduct } from "../../services/apiProducts";

export function useAdd() {
  const queryClient = useQueryClient();
  const { mutate: add, isPending } = useMutation({
    mutationKey: ["products"],
    mutationFn: (data: adedProductTypes) => addProduct(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products"], data);
    },
  });

  return { add, isPending };
}
