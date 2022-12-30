import {useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getData')
            .then((res) => {
                console.log("call counter");
                console.log(res.data);
                setData(res.data);
            })
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
                    <div className="table_cont">
                        <table className="text-light">
                            <thead>
                            <th>id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            </thead>
                            <tbody>
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {value.name}
                                            </td>
                                            <td>
                                                {value.category}
                                            </td>
                                            <td>
                                                {value.rating}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}