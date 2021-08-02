// import { useState } from "react";


// const useSignUp = () => {
//     const [data, setData] = useState();
//     const [error, setError] = useState();
//     const [isLoading, setIsLoading] = useState(false);
//     console.log("data de useSignUP:" , data );
//     const signUp = async (body) => {
//         const url = "http://localhost:3001/api/user/signup"
        
//         // setData(null)
//         // setIsLoading(true);
//         console.log("data : ", data);
//         console.log("setData : ", setData);
//         console.log("body :", body);
//         try {
//             const resp = await  fetch(url, {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({lastname, firstname, mail, password })
//                 //  body: JSON.stringify({
                    
//                 //         lastname: data.lastname,
//                 //         firstname: data.firstname,
//                 //         mail: data.mail,
//                 //         password: data.password,
//                 //         // terms: data.terms,
//                 //         // token,
//                 //     })
                    
//             });

//             const respData = await resp.json();

//             setData(respData);
            
//         } catch (e) {
//             setData([]);
//             setError(e);
//         }

//         setIsLoading(false);

//         return data;
//     };

//     return { data, error, isLoading, signUp };
    
// };

// export default useSignUp;