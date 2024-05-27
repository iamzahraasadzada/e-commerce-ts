import { useForm } from "react-hook-form";
import styled from "styled-components";
import { adedProductTypes } from "../../types/Products";
import { useAdd } from "./useAdd";
import MiniSpiner from "../../ui/MiniSpiner";
import toast from "react-hot-toast";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 5rem;
`;

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 3rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: 50rem;
  @media (max-width: 470px) {
    width: 40rem;
  }
  @media (max-width: 470px) {
    width: 30rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  gap: 1rem;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2;
`;

const Label = styled.label``;

const Input = styled.input`
  border: none;
  offset: none !important;
  outline: none !important;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AddButton = styled.button`
  font-size: 1.2rem;
  width: 50%;
  margin: 0 auto;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101010;
  border: 1px solid #101010;
  color: #fff;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #2a2a2a;
    border: 1px solid #2a2a2a;
    text-decoration: none;
  }
`;

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
`;

const Row = styled.div``;

export default function AddForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<adedProductTypes>();
  const { add, isPending } = useAdd();

  function onSubmit(d: adedProductTypes) {
    const { name, brand, price, img } = d;
    const IsName =
      name
        .trim()
        .split(" ")
        .filter((str) => str === "").length > 0
        ? false
        : true;
    const IsBrand =
      brand
        .trim()
        .split(" ")
        .filter((str) => str === "").length > 0
        ? false
        : true;
    const IsImg =
      img
        .trim()
        .split(" ")
        .filter((str) => str === "").length > 0
        ? false
        : true;
    const IsPrice =
      String(price)
        .split("")
        .filter((str) => str === "0").length > 0
        ? false
        : true;

    if (IsName && IsBrand && IsPrice && IsImg) {
      add({
        name: d.name.trim(),
        brand: d.brand.trim(),
        price: Number(d.price),
        img: d.img.trim(),
      });
      reset();
    } else {
      toast.error("Please enter the corresponding value", {
        position: "top-right",
        style: {
          fontSize: "12px",
        },
      });
    }
  }

  return (
    <FormContainer>
      <StyledAddForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormRow>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              {...register("name", { required: "Name must be entered" })}
              id="name"
              disabled={isPending}
            />
          </FormRow>
          {errors.name?.type === "required" && (
            <StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
          )}
        </Row>
        <Row>
          <FormRow>
            <Label htmlFor="brand">Brand</Label>
            <Input
              type="text"
              {...register("brand", { required: "Brand must be entered" })}
              id="brand"
              disabled={isPending}
            />
          </FormRow>
          {errors.brand?.type === "required" && (
            <StyledErrorMessage>{errors.brand?.message}</StyledErrorMessage>
          )}
        </Row>
        <Row>
          <FormRow>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              {...register("price", {
                required: "Price must be entered",
                valueAsNumber: true,
                validate: (value) =>
                  !isNaN(value) || "Please enter a valid number",
              })}
              id="price"
              step="any"
              disabled={isPending}
            />
          </FormRow>
          {errors.price?.type === "required" && (
            <StyledErrorMessage>{errors.price?.message}</StyledErrorMessage>
          )}
        </Row>
        <Row>
          <FormRow>
            <Label htmlFor="img">İmage</Label>
            <Input
              type="text"
              {...register("img", { required: "Image URL must be entered" })}
              id="img"
              disabled={isPending}
            />
          </FormRow>
          {errors.img?.type === "required" && (
            <StyledErrorMessage>{errors.img?.message}</StyledErrorMessage>
          )}
        </Row>
        <AddButton type="submit">
          {isPending ? <MiniSpiner /> : "Add Product"}
        </AddButton>
      </StyledAddForm>
    </FormContainer>
  );
}
