// import React from 'react';
// import useAxios from '../../hooks/UseAxios';
// import axios from '../../api/axios';

// export default function LocalisationApi() {
//   // const url = '/api/v1/ipinfo/';

//   const [response, error, loading] = useAxios({
//     axiosInstance: axios,
//     method: 'get',
//     url: '/',
//     requestConfig: {
//       headers: {
//         'Content-Language': 'en-US',
//       },
//     },
//   });
// console.log('response est la :',response.response);
//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       {!loading && error && <p className="errMsg">{error}</p>}
//       {!loading && !error && response && <p>{response?.response}</p>}
//       {!loading && !error && !response && (
//         <p>Pas de connexion ou ton mobile ne prend pas en charge ce service</p>
//       )}
//     </>
//   );
// }
