// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const useAxios = (configObj) => {
//   const { method, url, requestConfig = {} } = configObj;

//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios[method.toLowerCase()](url, {
//           ...requestConfig,
//         });
//         setResponse(res.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       // Cleanup function
//     };
//   }, []);

//   return [response, error, loading];
// };

// export default useAxios;
