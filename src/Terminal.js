import React, { useState, useRef, useEffect } from 'react';
import { GetEducation, GetCommands, GetAbout, WrongCommand, commands, whoami, sudo, Contact } from './utils/commands';

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
                              _     
                             | |    
  ___  __ _  __ _  __ _   ___| |__  
 / __|/ _\` |/ _\` |/ _\` | / __| '_ \\ 
 \\__ \\ (_| | (_| | (_| |_\\__ \\ | | |
 |___/\\__,_|\\__, |\\__,_(_)___/_| |_|
             __/ |                  
            |___/                                        
`

const prompt = "guest@sagak.se $" 

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [cmd, setCmd] = useState('');
  const promptRef = useRef(null)

  const handleCommand = () => {
    setHistory([...history, cmd]);
    setCmd('');
  }

  const scrollToBottom = () => {
    promptRef.current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  }, [history]);

  return (
    <div className="terminal"> 
      <div className="ascii">
        <pre id="cat">{cat}</pre>
        <pre id="sh">{os}</pre>
      </div>
      <div className="introduction">
        ⭐ <span id="highlight">welcome!</span> so excited you're here. type <span id="highlight">help</span> to display all available commands.
      </div>
      <div className="history">
        {history.map((cmd, i) => {
          return (
            <div key={i}>
              <div className="newcommand"><span id="prompt">{prompt}</span>{cmd}</div>
              {cmd == "help" && GetCommands()}
              {cmd == "clear" && setHistory([])}
              {cmd == "education" && GetEducation()}
              {cmd == "about" && GetAbout()}
              {cmd == "whoami" && whoami()}
              {cmd == "contact" && Contact()}
              {cmd.substr(0,4) == "sudo" && sudo()}
              {!commands.has(cmd) && WrongCommand(cmd)}
            </div>
          )
        })}
      </div>
      <div className="cmd">
        <span id="prompt">{prompt}</span> 
        <form onSubmit={(e) => {e.preventDefault(); handleCommand();}}>
          <input type="text" value={cmd} onChange={e => setCmd(e.target.value)} className="prompt" autoFocus></input>
        </form>
        <div ref={promptRef} />
      </div>
    </div>
  );
}