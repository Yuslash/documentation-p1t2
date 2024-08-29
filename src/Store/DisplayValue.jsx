import { useSelector } from "react-redux";

const DisplayValue = () =>
{
    const name = useSelector((state) => state.name)
    const title = useSelector((state) => state.title)
    const content = useSelector((state) => state.content)

    console.log(name);

    return <div className=" absolute top-0 left-0 p-2 gap-1 flex flex-col w-screen h-screen bg-cyan-300 text-white">
                <div className="top-box p-7 bg-orange-500">top box</div>
                
                    <div className="body-box gap-2 justify-left flex w-full h-full">
                    
                        <div className="left-box bg-purple-500 p-6">
                            <h1>user list</h1>
                            <button className="mt-5 p-4 bg-lime-400">Sibikrishna</button>
                        </div>


                        <div className="center-box py-5 px-8 max-w-7xl bg-red-400">
                            <h1>user contents</h1>
                            <div>{content}</div>
                        </div>
                
                
                        <div className="right-box p-7 bg-green-400">
                            <h1>user accounts</h1>
                        </div>
                    
                    </div>
            </div>
}


export default DisplayValue