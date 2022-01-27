import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Content from './Content';



const TableInfo = () => {
  const [state, setState] = useState({
    datos: []
  })


/*   async function apiCall() {
    try {
      let infouser = localStorage.getItem('datos')
      let response = await fetch('http://localhost:3001/operations/datos/' + infouser);
      let data = await response.json();
      return data.data

    } catch (error) {
      console.log(error)
    }
  } */

  async function userMyApi(){
  try {
    let infouser = localStorage.getItem('datos')
    let response = await fetch('http://localhost:3001/operations/datos/' + infouser);
    let data = await response.json();
    console.log(data.data)
    let info = data.data.map(dato => {

      let item = {
        id: dato.id,
        quantity: dato.quantity,
        category: dato.category,
        categoryId: dato.categoryId,
        createdAt: dato.createdAt.slice(0, 10)
      }
      return item
    })
    setState({
      datos: [
        ...state.datos,
        ...info
      ]
    })
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  userMyApi()
}, [])


  
  

  return (
    <>
    
    <Table className="table" striped bordered hover variant="dark">
      <tbody>
        {<Content
          datos={state.datos}
        />}
      </tbody>
    </Table>
    </>
  );
}


export default TableInfo;