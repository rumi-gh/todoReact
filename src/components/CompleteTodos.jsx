const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
  };

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    // <div className="complete-area">
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {/* {completeTodos.map((todo, index) => ( */}
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
        {/* <li>
            <div className="list-row">
              <p className="todo-item">TODOでした</p>
              <button>戻す</button>
            </div>
          </li> */}
      </ul>
    </div>
  );
};
