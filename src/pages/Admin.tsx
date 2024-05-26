import AddForm from "../components/Admin/AddForm";
import Header from "../components/Admin/Header";
import Products from "../components/Admin/Products";

export default function Admin() {
  return (
    <div>
      <Header />
      <AddForm />
      <Products />
    </div>
  );
}
