import React from 'react'

function CalltoActionSection() {
    return (
        <div className='subscribe-section bg-with-black'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='subscribe-head'>
                            <h2>avez vous besoin de plus de conseils ?</h2>
                            <p>creer un compte gratuit et obtiens le dernier conseil.</p>
                             <form className='form-section'>
                                <input placeholder='votre email' name='email' type='email'/>
                                <input value='oui , je veux.' name='souscris' type='submit'/>
                                
                             </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CalltoActionSection
