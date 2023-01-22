export const commands = new Set(["about", "education", "clear", "help", "sudo", "whoami", "contact"])

export function GetEducation() {
  return (
    <div>
      I am currently studying a M.Sc in Computer Science at <a href="https://www.chalmers.se/en/" id="link">Chalmers University of Technology</a>.
      Graduating in June, 2023! 🧑‍🎓💻
    </div>
  )
}

export function WrongCommand(cmd) {
  return (
    <div>
      {cmd.substr(0,4) === "sudo" ? <></> :  <div> command not found. type <span id="highlight">help</span> to display all available commands.</div>}
    </div>
  )
}

export function Contact() {
  return (
    <div>
        You can reach me on <a href="mailto:saga@sagak.se" id="link">my email</a>, <a href="https://www.linkedin.com/in/saga-kortesaari/" id="link">LinkedIn</a>, or check out my <a href="https://github.com/sagakortesaari" id="link">Github</a>!
    </div>
  )
}

export function GetAbout() {
  return (
    <div>
      <div>
        Hey there! My name is Saga. I am a student, tech-nerd & a very creative person. Currently finishing up my M.Sc in Computer Science, graduating in June 2023. 
      </div>
      <br />
      <div>
        I like security & programming. 
      </div>
      <div>
        You can reach me on <a href="mailto:saga@sagak.se" id="link">my email</a>, <a href="https://www.linkedin.com/in/saga-kortesaari/" id="link">LinkedIn</a>, or check out my <a href="https://github.com/sagakortesaari" id="link">Github</a>!
      </div>
    </div>
  )
}

export function sudo() {
  return (
    <div>Permission denied</div>
  )
}

export function whoami() {
  return (
    <div>guest</div>
  )
}

export function GetCommands() {
  return (
  <>
    <div>
      Available commands: {[...commands].join(', ')}
    </div>
    <br />
    <div>
      type one of the above commands, e.g. <span id="highlight">about</span>.
    </div>
  </>
  );
}