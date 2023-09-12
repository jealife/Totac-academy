import { useState } from "react";
import { firebaseConfig } from "../../cofig";
import axios from "axios";

const url = 'https://cat-fact.herokuapp.com';
const Dashboard = () => {
    const [facts, setFacts] = useState([]);
    console.log(facts);
    return (
        <div className="flex min-h-screen justify-center items-center flex-col w-full">
            <div className="flex min-h-screen justify-center items-center flex-col max-w-4xl gap-10">
                <button onClick={fetchFacts}>Rechercher</button>
                <div className="grid grid-cols-4 gap-3">
                    {facts.map(fact => (
                        <div className=" bg-white shadow-2xl rounded-md p-3">
                            <p>{fact.text}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );

    /**
     * Récupérer des données avec Axios et les placer dans le state des facts.
     */
    function fetchFacts() {
        axios.get(`${url}/facts`).then(response => {
            const facts = response.data;
            setFacts(facts);
        });
    }
};

export default Dashboard;