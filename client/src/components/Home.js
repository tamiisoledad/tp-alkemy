import React, { useEffect } from 'react';
import { useState } from 'react';
import Data from './Data';
import TableInfo from './TableInfo';

const Home = () => {
    const [state, setState] = useState({
        userInfo: [{ name: "", id: ""}]
    })

    async function apiCall() {
        try {
            let infoUser = localStorage.getItem('user');
            let response = await fetch('http://localhost:3001/users/'+infoUser);
            let data = await response.json();
            localStorage.setItem('datos', data.data.id)
            return data.data

        } catch (error) {
            console.log(error)
        }
    }

    async function userData() {
         let user = await apiCall(); 
        setState({
            userInfo: [
                ...state.userInfo,
                {
                    name: user.name,
                    id: user.id
                }
            ]
        })
    }

    useEffect(()=>{
        userData()
    }, [])

    return (
        <div className="home" >
            <Data
                userInfo={state.userInfo}
            />
            <TableInfo />

        </div>

    )
}

export default Home;