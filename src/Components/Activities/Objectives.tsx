import React from 'react'
import chr from '../../assets/pics/international-childrens-day.png'

const Objectives = () => {
    return (
        <section id='objectives'>
            <div className="container d-flex justify-content-center">
                <div className="obj-card text-center pt-2">
                    <h2 className="obj-head text-left mb-4 mt-4">Objectives</h2>
                    <div className="d-flex flex-row align-items-center icon mb-4 mt-4">
                        <img src="https://img.icons8.com/cotton/96/000000/steak-rare.png" width="30" />
                        <div>
                            <h4 className="mb-2 mt-4 obj-title"> Reproductive Health</h4>
                            <p className='p-text'>To create an awareness on Sexual and Reproductive Health issues.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center icon mb-4 mt-4">
                        <img src="https://img.icons8.com/fluent/96/000000/natural-food.png " width="30" />
                        <div>
                            <h4 className="mb-2 mt-4 obj-title">Children Rights</h4>
                            <p className='p-text'>Advocate for the fundamental children’s rights and provide support for the (OVC) at the community level
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center icon mb-4 mt-4">
                        <img src={chr} width="30" />
                        <div>
                            <h4 className="mb-2 mt-4 obj-title">Child Education</h4>
                            <p className='p-text'>To promote child Education/enrollment in Malindi especially the girl child
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center icon mb-4 mt-4" >
                        <img src="https://img.icons8.com/fluent/96/000000/cherry.png " width="30" />
                        <div>
                            <h4 className="mb-2 mt-4 obj-title">Fight against violence</h4>
                            <p className='p-text'>Creating awareness on human rights including sexual and gender based violence/abuse.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center icon mb-4 mt-4">
                        <img src="https://img.icons8.com/cotton/96/000000/toast--v1.png" width="30" />
                        <div>
                            <h4 className="mb-2 mt-4 obj-title">Inclusivity</h4>
                            <p className='p-text'>To advocate for a society whereby children and youth with disabilities have equal rights and opportunities for growth and development.

                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Objectives