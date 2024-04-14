import React, { useState } from "react";
import '../Style/Card.css'

function Card({ selected, onClick, title, list }: {
    itemId: string;
    selected: boolean;
    onClick: Function;
    title: string;
    list: Array<{ name: string }>;
}) {

    const [showAll, setShowAll] = useState(false); // State to toggle showing all parks

    //*****Button to Expend the Park List*****//
    // const toggleShowAll = () => {
    //     setShowAll(!showAll);
    // };
    return (
        <div
            onClick={() => onClick()}
            role="button"
            className={`Card ${selected ? "Selected" : ""}`}
            tabIndex={0}
        >
            <div>
                <div style={{
                        margin: "30px 20px 20px 20px"
                }}>
                    <h2>{title}</h2>
                    <p>Number of parks: {list.length}</p>
                    {selected && (
                        <ul>
                            {list.slice(0, 5).map((park, index) => (
                                <React.Fragment key={index}>

                                    <li>
                                        {/*{park.name}*/}
                                        <a href={park.url} target='_blank'>{park.name}</a>
                                    </li>
                                    {index === 4 && <li>more</li>}
                                </React.Fragment>
                                ))}
                        </ul>
                    )}

                    {/*****Button to Expend the Park List*****/}
                    {/*{list.length > 5 && selected && (*/}
                    {/*    <button*/}
                    {/*        onClick={toggleShowAll}*/}
                    {/*        className={"Button"}*/}
                    {/*    >*/}
                    {/*        {showAll ? "Read Less" : "Read More"}*/}
                    {/*    </button>)*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    );
}

export default Card;
