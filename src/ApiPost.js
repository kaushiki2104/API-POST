


// import React, { useState } from 'react';

// function ApiPost() {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [responseData, setResponseData] = useState(null);

//     const handlePhoneNumberChange = (event) => {
//         setPhoneNumber(event.target.value);
//     };

//     const handleSubmit = () => {
//         // Make POST request to the API endpoint
//         fetch('https://chimpu.xyz/api/post.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ "phonenumber": phoneNumber })
//         })
//         .then(response => {
//             // Extract headers from the response and convert to JSON
//             const headers = {};
//             for (const [key, value] of response.headers.entries()) {
//                 headers[key] = value;
//             }
//             console.log("--12",headers)
//             setResponseData(headers);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={phoneNumber} 
//                 onChange={handlePhoneNumberChange} 
//                 placeholder="Enter phone number" 
//             />
//             <button onClick={handleSubmit}>Submit</button>
//             {responseData && (
//                 <div>
//                     <h2>Headers Received from API:</h2>
//                     <ul>
//                         {Object.entries(responseData).map(([key, value]) => (
//                             <li key={key}>
//                                 <strong>{key}:</strong> {value}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ApiPost;


import React, { useState } from 'react';

function ApiPost() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [responseData, setResponseData] = useState([]);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = () => {
        // Make POST request to the API endpoint
        fetch('https://chimpu.xyz/api/post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "phonenumber": phoneNumber })
        })
        .then(response => {
            // Extract headers from the response and convert to array of objects
            const headers = [];
            response.headers.forEach((value, name) => {
                headers.push({ name, value });
            });
            setResponseData(headers);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <input 
                type="text" 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
                placeholder="Enter phone number" 
            />
            <button onClick={handleSubmit}>Submit</button>
            {responseData.length > 0 && (
                <div>
                    <h2>Headers Received from API:</h2>
                    <ul>
                        {responseData.map((header, index) => (
                            <li key={index}>
                                <strong>{header.name}:</strong> {header.value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ApiPost;
