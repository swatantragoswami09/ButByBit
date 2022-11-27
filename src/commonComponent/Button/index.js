import react from "react";
import Button from "@mui/material/Button";
import "./customButton.scss";

const CustomButton = ({ btnName, icon, width, onBtnClick }) => {
  return (
    <Button
      className="btnContainer"
      // style={{ width: `${width}rem`  , }}
      onClick={onBtnClick}
    >
      <div className='btnMain'  style={{width: `${width}`}}>{btnName}</div>
      {icon && <img src={icon} className="btnImage" />}
    </Button>
  );
};

export default CustomButton;
