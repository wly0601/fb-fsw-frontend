import { Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Category = (props) => {
  const { btnText, btnColor } = props;

  return (
    <div align="left">
      <Button variant="secondary" style={{ backgroundColor: "#7126B5" }}><Search /> Semua</Button>
      <Button variant="secondary" className="mx-2"><Search /> Hobi</Button>
      <Button variant="secondary" className="mx-2"><Search /> Kendaraan</Button>
      <Button variant="secondary" className="mx-2"><Search /> Baju</Button>
      <Button variant="secondary" className="mx-2"><Search /> Elektronik</Button>
      <Button variant="secondary" className="mx-2"><Search /> Kesehatan</Button>
    </div>
  )
}

export default Category;