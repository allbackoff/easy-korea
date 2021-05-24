import React from 'react'



function Forum() {
    return (
        <div>
            <div className="container">
                <div className="row allign-items-start">
                    <div className="col-md-2" style={{ marginTop: "20px", marginBottom: "10px" }}    >
                        <img src='/images/airport.png' style={{  borderRadius: "20px 20px 0 0", maxHeight: "350px" }}></img>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                        <p>Questions</p>
                    </div>
                    <div className="col-md-2" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                        <p>ANswers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum