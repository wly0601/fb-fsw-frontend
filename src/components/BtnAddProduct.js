import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

const BtnAddProduct = (props) => {
  const { btnText, btnColor } = props;

  return (
    <div className="fixed-bottom" align="center">
      <Button className="text-center" variant="secondary" style={{ backgroundColor: "#7126B5", height: "100%" }}><Plus /> Jual</Button>
    </div>
  )
}

export default BtnAddProduct;