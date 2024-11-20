


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import './Join.css';

// const Join = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
//           .then((result) => {
//               console.log('Email sent:', result.text);
//           }, (error) => {
//               console.log('Email sending failed:', error.text);
//           });
//     };

//     return (
//         <div className="Join" id="join-us">
//             <div className="left-j">
//                 <hr />
//                 <div>
//                     <span className="stroke-text">READY TO</span>
//                     <span>LEVEL UP</span>
//                 </div>
//                 <div>
//                     <span>YOUR BODY</span>
//                     <span className="stroke-text">WITH US?</span>
//                 </div>
//             </div>
//             <div className="right-j">
//                 <form 
//                     ref={form} 
//                     className="email-container" 
//                     onSubmit={sendEmail}
//                 >
//                     <input 
//                         type="text" 
//                         name="user_name" 
//                         placeholder="Enter your full name"
//                         className="input-text"
//                     />
//                     <input 
//                         type="email" 
//                         name="user_email" 
//                         placeholder="Enter your email address"
//                         className="input-text"
//                     />
//                     <input 
//                         type="tel" 
//                         name="user_phone" 
//                         placeholder="Enter your phone number"
//                         className="input-text"
//                     />
//                     <select name="user_goal" className="input-select">
//                         <option value="" disabled selected>Choose your fitness goal</option>
//                         <option value="weight_loss">Weight Loss</option>
//                         <option value="muscle_gain">Muscle Gain</option>
//                         <option value="stamina">Increase Stamina</option>
//                         <option value="flexibility">Improve Flexibility</option>
//                     </select>
//                     <button type="submit" className="btn btn-j">Join Now</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Join;





// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// import './Join.css';

// const Join = () => {
//     const [showForm, setShowForm] = useState(false); 
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
//           .then((result) => {
//               console.log('Email sent:', result.text);
//           }, (error) => {
//               console.log('Email sending failed:', error.text);
//           });
//     };

//     return (
//         <div className="Join" id="join-us">
//             <div className="left-j">
//                 <hr />
//                 <div>
//                     <span className="stroke-text">READY TO</span>
//                     <span>LEVEL UP</span>
//                 </div>
//                 <div>
//                     <span>YOUR BODY</span>
//                     <span className="stroke-text">WITH US?</span>
//                 </div>
//             </div>
//             <div className="right-j">
//                 {!showForm ? ( 
//                     <button 
//                         className="btn btn-j" 
//                         onClick={() => setShowForm(true)} 
//                     >
//                         Join Now
//                     </button>
//                 ) : (
//                     <form 
//                         ref={form} 
//                         className="email-container" 
//                         onSubmit={sendEmail}
//                     >
//                         <input 
//                             type="text" 
//                             name="user_name" 
//                             placeholder="Enter your full name"
//                             className="input-text"
//                         />
//                         <input 
//                             type="email" 
//                             name="user_email" 
//                             placeholder="Enter your email address"
//                             className="input-text"
//                         />
//                         <input 
//                             type="tel" 
//                             name="user_phone" 
//                             placeholder="Enter your phone number"
//                             className="input-text"
//                         />
//                         <select name="user_goal" className="input-select">
//                             <option value="" disabled selected>Choose your fitness goal</option>
//                             <option value="weight_loss">Weight Loss</option>
//                             <option value="muscle_gain">Muscle Gain</option>
//                             <option value="stamina">Increase Stamina</option>
//                             <option value="flexibility">Improve Flexibility</option>
//                         </select>
//                         <button type="submit" className="btn btn-j">Submit</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Join;



import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Join.css';

const Join = () => {
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
          .then((result) => {
              console.log('Email sent:', result.text);
          }, (error) => {
              console.log('Email sending failed:', error.text);
          });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                {!showForm ? (
                    <button 
                        className="btn btn-j" 
                        onClick={() => setShowForm(true)}
                    >
                        Join Now
                    </button>
                ) : (
                    <div className="form-box">
                        <form 
                            ref={form} 
                            className="email-container" 
                            onSubmit={sendEmail}
                        >
                            <input 
                                type="text" 
                                name="user_name" 
                                placeholder="Enter your full name"
                                className="input-text"
                            />
                            <input 
                                type="email" 
                                name="user_email" 
                                placeholder="Enter your email address"
                                className="input-text"
                            />
                            <input 
                                type="tel" 
                                name="user_phone" 
                                placeholder="Enter your phone number"
                                className="input-text"
                            />
                            <select name="user_goal" className="input-select">
                                <option value="" disabled selected>Choose your fitness goal</option>
                                <option value="weight_loss">Weight Loss</option>
                                <option value="muscle_gain">Muscle Gain</option>
                                <option value="stamina">Increase Stamina</option>
                                <option value="flexibility">Improve Flexibility</option>
                            </select>
                            <button type="submit" className="btn btn-j">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Join;


