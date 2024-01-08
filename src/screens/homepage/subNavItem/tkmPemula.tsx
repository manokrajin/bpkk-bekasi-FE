import React from "react";

export const TkmPemula = () => {

    let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ex efficitur, fermentum nisl vitae, porta erat. Cras scelerisque nibh enim, eu posuere augue accumsan in. Suspendisse fermentum magna quis iaculis facilisis. Suspendisse potenti. Vivamus sit amet lectus congue, auctor elit quis, facilisis mi. "

    return(
        <div className="flex text-white">
            <div className="w-1/2">
                image
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="title">TKM Pemula</div>
                <div className="desc">{loremText}</div>
                <a href="#">Lihat Selengkapnya</a>
            </div>
        </div>
    )
}