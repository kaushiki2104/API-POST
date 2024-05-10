// import React, { useState } from 'react';
// import axios from 'axios';

// const PostDataToAPI = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [responseData, setResponseData] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://chimpu.xyz/api/post.php', {
//         phonenumber: phoneNumber
//       });

//       // Extracting headers data from response
//       const headersData = response.headers;

//       // Extracting the specific header you're interested in
//       const customizedData = headersData['custom-header']; // Change 'custom-header' to the actual header key you expect to receive

//       // Setting the data received from headers to state
//       setResponseData(customizedData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {responseData && (
//         <div>
//           <h2>Data Received from API Headers:</h2>
//           <p>{responseData}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostDataToAPI;
   




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDataToAPI = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://chimpu.xyz/api/post.php', {
          phonenumber: phoneNumber
        });

        // Extracting headers data from response
        const headersData = response.headers;
        console.log("1--", headersData);
        


        // Extracting the specific header you're interested in
        const customizedData = headersData['custom-header']; // Change 'custom-header' to the actual header key you expect to receive
        console.log("2--",customizedData);

        // Setting the data received from headers to state
        setResponseData(customizedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch data when phoneNumber changes
    if (phoneNumber) {
      fetchData();
    }
  }, [phoneNumber]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </form>
      {responseData && (
        <div>
          <h2>Data Received from API Headers:</h2>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default PostDataToAPI;
