const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    // <div className="incomplete-area">
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 配列をループしながら（map liタグを表示させる */}
        {/* {incompleteTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            // mapやfilter 配列をループして一覧表示していく場合、keyの指定が必要
            // dom 差分のみ反映していくため
            // ループしていく各要素の中で一意になる項目を指定する必要がある
            // mapの第2引数indexは並び替えにより順番が変わる等→一意に判断できないため微妙
            // todoも重複する可能性があるため微妙
            <li key={todo}>
              <div className="list-row">
                {/* jsの内容をタグの中で表示する時は{} */}
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>

                {/* 読み込まれた瞬間に関数が実行されてしまう */}
                {/* <button onClick={onClickDelete(index)}>削除</button> */}
                {/* 関数の処理の中身として処理を実行してあげる */}
                {/* 関数に引数を渡してあげる時は対応が必要 */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
        {/* アロー関数 完結に記載することが可能 */}
        {/* {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))} */}
        {/* <li>
            <div className="list-row">
              <p className="todo-item">TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li> */}
      </ul>
    </div>
  );
};
