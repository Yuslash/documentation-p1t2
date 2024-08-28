import { useSelector } from "react-redux";

const DisplayValue = () =>
{
    const value = useSelector((state) => state.value)

    console.log(value);

    return <div>
        <h1>{value}</h1>
    </div>
}


export default DisplayValue