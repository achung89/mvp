var Form = ({queryWord,input}) => (
  <div>
    <input onChange={(ev)=>{input = ev.target.value}} type = 'text'></input>
    <button onClick={()=>{queryWord(input)}}></button>
  </div>
);word