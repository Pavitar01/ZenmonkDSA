import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  projectId: '<YOUR_PROJECT_ID>',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthComponent = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      setUser(firebase.auth().currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;


// import React, { useState } from 'react';

// const ListMapComponent = () => {
//   const [colors, setColors] = useState([
//     'red',
//     'blue',
//     'green',
//     'yellow',
//     'orange',
//   ]);

//   const handleColorChange = (index) => {
//     setColors((prevColors) => {
//       const updatedColors = [...prevColors];
//       updatedColors[index] = getRandomColor();
//       return updatedColors;
//     });
//   };

//   const getRandomColor = () => {
//     const colorValues = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += colorValues[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div>
//       {colors.map((color, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundColor: color,
//             width: '200px',
//             height: '50px',
//             margin: '10px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: 'pointer',
//           }}
//           onClick={() => handleColorChange(index)}
//         >
//           <button>Change Color</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ListMapComponent;