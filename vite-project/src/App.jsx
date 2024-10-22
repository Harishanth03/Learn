import { ArraySample } from "./components/ArraySample";
import { ChildComponent } from "./components/ChildComponent";
import { Student } from "./components/Student";

const items = [
  {id: 1 , name: "item 1"},
  {id: 2 , name: "item 2"},
  {id: 3 , name: "item 3"}
]

function App() {
  return (
    <>
      {/* <div>Harishanth</div>
      <LearnComponent/>
      <HeaderCom />
      <MapMethod/> */}
      {/* <Student  />
      <ChildComponent>
        <p>This is harishanth</p>
        <p>This is Here</p>
      </ChildComponent> */}
      <ArraySample  items = {items}/>

    </>
  );
}

export default App;
