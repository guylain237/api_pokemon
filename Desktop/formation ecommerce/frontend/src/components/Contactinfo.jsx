import React from 'react'

function Contactinfo() {
    return (
        <div className='contactInfo container'>
        <div className='row'>

            <div className='col-12 col-md-4 contact-Box'>
                <div className='box-image'>
                    <div className='info-image'>
                        <i className='fasfa-phone-alt'></i>

                    </div>
                    <h5>appellez nous au 237</h5>
                    <p>698060160</p>
                </div>
            </div>

            <div className='col-12 col-md-4 contact-Box'>
                <div className='box-info'> <div className='info-image'>
                    <i className='fas fa-map-market-alt'></i>
                </div>
                <h5>siege social</h5>
                <p>pk 21</p>
            </div>
            </div>
        
        <div className='col-12 col-md-4 contact-Box'>
            <div className='box-info'>
                <div className='info-image'>
                    <i className='fas fa-fax'></i>
                </div>
                <h5>fax</h5>
                <p>0215436987</p>
            </div>
        </div>
        
        </div>
        </div>
    )
}

export default Contactinfo
