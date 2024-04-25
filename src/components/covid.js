// import React, { useEffect, useState } from "react";
// import covid from "./covid.css";
// const Covid = () => {
//     const [data,setData] = useState([]);
//     const getCovidData = async () =>{
//         try{
//             const res = await fetch('https://data.covid19india.org/data.json');
//             const actualdata = await res.json();
//             setData(actualdata.statewise[0]);
//             console.log(actualdata.statewise[0]);
//         }catch(error){
//             console.log(error);
//         }
//     }
//     useEffect(() =>{
//         getCovidData();
//     },[]);
//     return(
//         <>
        
//         <section>
//         <h1>🔴 LIVE</h1>
//          <h2>COVID-19 Tracker APP using Real API</h2>
//          <ul>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                           INDIA
//                           {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//             <li className="card">
//                 <div className="card__main">
//                     <div className="card__inner">
//                         <p className="card__name">
//                             <span> OUR </span> COUNTRY
//                         </p>
//                         <p className="card__total card__small">
//                             INDIA
//                             {data.recovered}
//                         </p>
//                     </div>
//                 </div>
//             </li>
//          </ul>
//         </section>
//         </>
//     )
// }
// export default Covid;



import React, { useEffect, useState } from "react";
import "./covid.css"; // Import CSS file correctly

const Covid = () => {
    const [data, setData] = useState({}); // Change initial state to object instead of array

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            setData(actualdata.statewise[0]);
            console.log(actualdata.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            {/* <section>
                <h1>🔴 LIVE</h1>
                <h2>COVID-19 Tracker APP using Real API</h2>
                <ul>
                 
                    {[...Array(7)].map((_, index) => (
                        <li key={index} className="card">
                            <div className="card__main">
                                <div className="card__inner">
                                    <p className="card__name">
                                        <span>OUR</span> COUNTRY
                                    </p>
                                
                                    <p className="card__total card__small">
                                        INDIA {data.recovered}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section> */}
             <section>
                <h1>🔴 LIVE</h1>
                <h2>COVID-19 Tracker APP using Real API</h2>
                <ul>
                    {[...Array(7)].map((_, index) => (
                        <li key={index} className={`card card__color-${index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'yellow'}`}>
                            <div className="card__main">
                                <div className="card__inner">
                                    <p className="card__name">
                                        <span>OUR</span> COUNTRY
                                    </p>
                                    <p className="card__total card__small">
                                        INDIA {data.recovered}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
 
        </>
    )
}

export default Covid;
