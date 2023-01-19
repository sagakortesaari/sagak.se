import React, { useState } from 'react';

const cat = `
  _                        
  \`*-.                    
  )  _\`-.                 
  .  : \`. .                
  : _   '  \\               
  ; *\` _.   \`*-._          
  \`-.-'           \`-.       
    ;       \`        \`.     
    :.       .         \\    
    . \  .   :   .-'     .   
    '  \`+.;  ;  '       :   
    :  '  |    ;        ;-. 
    ; '   : :\`-:      _.\`* ;
  .*' /  .*' ; .*\`- +'   \`*' 
  \`*-*   \`*-*  \`*-*'
`

const os = `
                          ____   _____ 
                         / __ \ / ____|
 ___  __ _  __ _  __ _  | |  | | (___  
/ __|/ _\` |/ _\` |/ _\` | | |  | |\\___ \\ 
\\__ \\ (_| | (_| | (_| | | |__| |____) |
|___/\\__,_|\\__, |\\__,_|  \\____/|_____/ 
            __/ |                      
           |___/                       
`

const prompt = "root@sagak.se $" 

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [cmd, setCmd] = useState('');

  const handleCommand = () => {
    setHistory([...history, cmd]);
    setCmd('');
  }

  return (
    <div className="terminal"> 
      <div className="ascii">
        <pre id="cat">{cat}</pre>
        <pre>{os}</pre>
      </div>
      <div className="introduction">
        <span id="highlight">welcome!</span> so excited you're here. type <span id="highlight">help</span> to start.
      </div>
      <div className="history">
        {history.map((cmd, i) => {
          return <div key={i}><span id="prompt">{prompt}</span>{cmd}</div>
        })}
      </div>
      <div className="cmd">
        <span id="prompt">{prompt}</span> 
        <form onSubmit={(e) => {e.preventDefault(); handleCommand();}}>
          <input type="text" value={cmd} onChange={e => setCmd(e.target.value)} className="prompt" autoFocus></input>
        </form>
      </div>
    </div>
  );
}