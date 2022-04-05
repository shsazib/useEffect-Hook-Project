import React, { useState, useEffect } from 'react';
import './Style.css';

const UseEffAPI = () =>{

    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        const response = await fetch("https://api.github.com/users")
        console.log(response);
        setUsers(await response.json());
    }

    useEffect(() =>{
        getUsers();
    }, []);

    return(
        <>
            <h2 className='mt-2 text-center '>List of GitHub Users</h2>
            <div className=''>
                <div className='row p-5'>


                    {
                        users.map((cElm) =>{
                            return(
                                <>
                                <div className='col-12 col-md-6 col-xl-4 mt-1'>
                        <div className='card p-4'>
                            <div className='d-flex'>
                                <div className='image '><img src={cElm.avatar_url} alt='img' className='rounded' width="155" /></div>
                                <div className='ml-3 detels'>
                                    <h4 className='mb-0 '>{cElm.login}</h4><span className='id'>{cElm.id}</span>
                                    <div className='p-2'>
                                        <div className='d-flex'> <span className='articles'>Articles</span> <span className="number1">: 25</span> </div>
                                        <div className='d-flex'> <span className='followers'>Followers</span> <span className="number1">: 250</span> </div>
                                        <div className='d-flex'> <span className="rating">Rating</span> <span className="number1">: 125</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                </>
                            )
                        })
                    }

                    
                </div>
            </div>
        </>
    )
}

export default UseEffAPI;