import React, { useState } from 'react';
import "../../styles/whats_my_size.css";

const WhatsMySize = () => {
    const [myGender, setMyGender] = useState();
    const [myHeightFt, setMyHeightFt] = useState();
    const [myHeightIn, setMyHeightIn] = useState();
    const [myHeightCm, setMyHeightCm] = useState();
    const [myWeight, setMyWeight] = useState();
    const [system, setSytem] = useState(0);  // 0 for Imperial, 1 for metric

    const updateMyGender = (e) => setMySize(e.target.value)
    const updateMyHeightFt = (e) => setMySize(e.target.value)
    const updateMyHeightIn = (e) => setMySize(e.target.value)
    const updateMyHeightCm = (e) => setMySize(e.target.value)
    const updateMySystem = (e) => setSytem(e.target.value)

    return(
        <div>
            <button type="button" className="whats-my-size-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZZNSAJBFIDfbEGHNIuOQUH0Q5CQRJZkouAxAiuE9NSxwFtCEpGePHXpYFej9Fgnu0QpKEEa9GNgP56EroHuXpTYbd+EouDP7qa3Pth9M8vMfLzHzO4CyEQQBC9ecuYQvI33aqzA8Pti19RqwnshT+NEn6bZqg8Mz++8cdwNdplJVb8FGOFKigD5zOVoHBoebjxIAB1PmOsxlcpMJTzwhyCDzHOaxvklY8uxhJADKhFT04EMkok4jTaHU8JoYv6VyOQ8FAY2n6eZ6I2ts1EkKYiCYCBA2y6PR9Ic2RLkJHBcyUaKSJEEs9nacNC2y7PbUtQ12NPjBQXgVkaZyWqlGak1/fCYSkGpWKwZ91Uq+hRLkKfUPRXp5uaoaHl9jZYxk07XSMi4uk+AP4IH8+wyUjmgmOVdPAEX4RCcRiIDbZGUsTkdsO12w8joaPXjYFslZWYNC7Bit8OMXg9TWu1mXUn0Jd3w3YSlsExrQSofbIEo2sJy6Ui5qulYJljuVaej0u+GDnDk90NS3MJl/svVlDrlUkfLX7B2I/7VxLIca2HEhg86RDeBPYxMluNiPAiLaIU2gWsJ32B4Zdlb7P8A/Iy2jlV/XfwAAAAASUVORK5CYII="/>
                <span>What's My Size?</span>
            </button>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZZNSAJBFIDfbEGHNIuOQUH0Q5CQRJZkouAxAiuE9NSxwFtCEpGePHXpYFej9Fgnu0QpKEEa9GNgP56EroHuXpTYbd+EouDP7qa3Pth9M8vMfLzHzO4CyEQQBC9ecuYQvI33aqzA8Pti19RqwnshT+NEn6bZqg8Mz++8cdwNdplJVb8FGOFKigD5zOVoHBoebjxIAB1PmOsxlcpMJTzwhyCDzHOaxvklY8uxhJADKhFT04EMkok4jTaHU8JoYv6VyOQ8FAY2n6eZ6I2ts1EkKYiCYCBA2y6PR9Ic2RLkJHBcyUaKSJEEs9nacNC2y7PbUtQ12NPjBQXgVkaZyWqlGak1/fCYSkGpWKwZ91Uq+hRLkKfUPRXp5uaoaHl9jZYxk07XSMi4uk+AP4IH8+wyUjmgmOVdPAEX4RCcRiIDbZGUsTkdsO12w8joaPXjYFslZWYNC7Bit8OMXg9TWu1mXUn0Jd3w3YSlsExrQSofbIEo2sJy6Ui5qulYJljuVaej0u+GDnDk90NS3MJl/svVlDrlUkfLX7B2I/7VxLIca2HEhg86RDeBPYxMluNiPAiLaIU2gWsJ32B4Zdlb7P8A/Iy2jlV/XfwAAAAASUVORK5CYII="/>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="gender-options">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={myGender}
                                />
                                <div>Women</div>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={myGender}
                                />
                                <div>Men</div>
                            </label>
                        </div>
                        <div className="measurements">
                            {system === 0 ?
                                <div>
                                    <p>Height</p>
                                    <input
                                        type="text"
                                        value={myHeightFt}
                                    />
                                    <input
                                        type="text"
                                        value={myHeightIn}
                                    />
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                checked={system == 0}
                                            />
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                checked={system == 1}
                                            />
                                        </label>
                                        
                                    </div>
                                </div>
                                :
                                <div>
                                    <p>Weight</p>
                                    <input
                                        type="text"
                                        value={myHeightCm}
                                    />
                                </div>
                            }
                            <label>Weight
                                <input
                                    type="text"
                                    value={myWeight}
                                />
                            </label>
                        </div>
                    </div>

                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Show Me My Size</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    )
}


// const WhatMySizeModalContent = () => {
//     return (
      
//     )
// }


export default WhatsMySize