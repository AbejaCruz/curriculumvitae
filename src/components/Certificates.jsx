import React from 'react';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            {props.data.map((cer, index) => (
                <div className="Certificates-item" key={`Certificates-${index}`}>
                    <h3>{cer.name}{cer.institution}</h3>
                    <span>{cer.date}</span>
                    <p>{cer.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Certificates;