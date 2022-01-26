import React from "react";
import { Table } from "react-bootstrap";

const TableInfo = () => {
    return (
        <Table className="table" striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td><i className="fas fa-plus"></i></td>
                    <td>$5000</td>
                    <td>Ingreso</td>
                    <td className="icons"><i className="fas fa-edit"></i><i className="fas fa-trash-alt"></i></td>
                </tr>
                <tr>
                    <td><i className="fas fa-minus"></i></td>
                    <td>$3000</td>
                    <td>Egreso</td>
                    <td className="icons"><i className="fas fa-edit"></i><i className="fas fa-trash-alt"></i></td>
                </tr>
                <tr>
                    <td><i className="fas fa-plus"></i></td>
                    <td>$4000</td>
                    <td>Ingreso</td>
                    <td className="icons"><i className="fas fa-edit"></i><i className="fas fa-trash-alt"></i></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableInfo;