import { useForm } from "react-hook-form";
import styled from "styled-components";
import { adedProductTypes, productsTypes } from "../../types/Products";
import { useAdd } from "./useAdd";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 2.5rem;
`;

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 3rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: 40%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  border-bottom: 1px solid #f2f2f2;
  font-weight: 600;
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

export default function AddForm() {
  const { register, handleSubmit, reset } = useForm<adedProductTypes>();
  const { add, isPending } = useAdd();

  function onSubmit(d: adedProductTypes) {
    console.log(d);
    add({
      name: d.name,
      brand: d.brand,
      price: Number(d.price),
      img: d.img,
    });
    reset();
  }

  return (
    <FormContainer>
      <StyledAddForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="name">Name</Label>
          <Input type="text" {...register("name")} id="name" />
        </FormRow>
        <FormRow>
          <Label htmlFor="brand">Brand</Label>
          <Input type="text" {...register("brand")} id="brand" />
        </FormRow>
        <FormRow>
          <Label htmlFor="price">Price</Label>
          <Input type="number" {...register("price")} id="price" />
        </FormRow>
        <FormRow>
          <Label htmlFor="img">İmage URL</Label>
          <Input type="text" {...register("img")} id="img" />
        </FormRow>
        <AddButton type="submit">Add Product</AddButton>
      </StyledAddForm>
    </FormContainer>
  );
}
