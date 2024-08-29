import React, { useState } from 'react';
import "./compiler.css";
import Dashboard from './Dashboard';

export default function Compiler() {
    const [code1, setCode1] = useState("");
    const [output, setOutput] = useState("");

    const compiler = () => {
        try {
            // Use eval to execute the JS code entered by the user
            const result = eval(code1);
            setOutput(result);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    }

    return (
        <div>
            <Dashboard />
            <h1 className='chead'>COMPILER</h1>
            <div className="cmpiler">
                <h2>Code</h2>
                <textarea 
                    onKeyUp={compiler} 
                    placeholder='Write code here' 
                    value={code1} 
                    id='compiler' 
                    onChange={(e) => setCode1(e.target.value)}
                ></textarea>
            </div>
            <div className="output">
                <h2>Output</h2>
                <div id='output'>
                    {output}
                </div>
            </div>
        </div>
    );
}
