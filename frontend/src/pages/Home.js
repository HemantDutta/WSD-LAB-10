import {useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {

    const [data, setData] = useState([]);

    function fetchData(){
        axios.get('http://localhost:3000/server/getData')
            .then((res)=>{
                console.log(res.data);
                setData(res.data);
            })
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return (
        <>
            <div className="main-cont">
                <div className="top-sect d-flex justify-content-center align-items-center">
                    <div className="nav-title text-light text-uppercase font-weight-bolder">
                        <h2>Admin Dashboard</h2>
                    </div>
                </div>
                <div className="mid-sect w-75">

                </div>
            </div>
        </>
    )
}