var List = ({list}) => (
  <div>
  {console.log(list)}
  {list.map((element)=>
    <div> {element.toLowerCase()} </div>
  )}

  </div>
);