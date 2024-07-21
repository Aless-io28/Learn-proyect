import List from "./components/List";
import Button from "./components/Button/Index";
import { useState } from "react";
import Follow from "./components/Follow/Follow";
import Tictactoe from "./components/Tictactoe/Tictactoe";
import Mouse from "./components/Mouse/Mouse";

function App() {
  // const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [list, setList] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
  // const list: string[] = [];
  const addList = () => {
    setList([...list, "Minion"]);
  };

  const deleteList = () => {
    setList(list.slice(0, list.length - 1));
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const handleSelect = (element: string) => {
    console.log(element);
  };

  const handleSelect2 = (element: string) => {
    console.log("Mostrando: ", element);
  };

  const contenido = list.length != 0 && (
    <List data={list} onSelect={handleSelect2}></List>
  );

  return (
    <>
      <div style={{ width: "400px" }}>
        <Button onClick={addList}>Agregar</Button>
        <Button onClick={deleteList}>Eliminar</Button>
        {list.length ? <List data={list} onSelect={handleSelect}></List> : ""}
        <Button isLoading={isLoading} onClick={handleClick}>
          Hola mundo
        </Button>
      </div>

      <div
        style={{
          width: "550px",
          margin: "30px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Follow userName="david04">David Guillermo</Follow>
        <Follow userName="juancis">Juan Paredes</Follow>
        <Follow userName="peperos">Pepe Guti</Follow>
      </div>

      <div>
        <Tictactoe></Tictactoe>
      </div>

      <Mouse></Mouse>
    </>
  );
}

export default App;
