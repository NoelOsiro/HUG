import React from 'react';
import './facts.css';
import { Listfacts } from './listFacts';

const Facts = () => {

    const facts = Listfacts.map((item, index) => {
        return (
            <div className="fact_item col-sm-3" key={item.number}>
                <img className="fact_icon" src={item.icon} alt={item.alt} />
                <div className="facts_text">
                    <div className="fact_number">{item.number}</div>
                    <div className="fact_desc">{item.desc}</div>
                </div>
            </div>
        );
    });
    return (
        <section id="fun_facts" className="fun_facts">
            <div className="container">
                <div>
                    <div className="facts row">
                        {facts}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts