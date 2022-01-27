import React from "react";
import Info from './Info';

const Content = ({ datos }) => {
    return (
        <>
                {
                    datos.map((dato) => <Info id={dato.id} quantity={dato.quantity} category={dato.category.name} categoryId={dato.categoryId} createdAt={dato.createdAt}/>)
                }
        </>
    );
}

export default Content;