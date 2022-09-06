import Card from "./Card";
import React from "react";

const CardList = ({robot}) => {
    const cardnumber = robot.map((user,i) => {
        return <Card key = {robot[i].id} id = {robot[i].id} name = {robot[i].name} email = {robot[i].email} />;
    });
    return (
        <div>
            {cardnumber}
        </div>
    );
}

export default CardList;