import { useSelector } from "react-redux";

const DisplayValue = () =>
{
    const value = useSelector((state) => state.value)

    console.log(value);
}

export default DisplayValue