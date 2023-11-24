// ★コンポーネント化したらコンポーネントだけに閉じておきたい（他に影響しない）
// 「input-area」として定義していたスタイルに関しては、ここだけで完結している

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  // 分割代入
  const { todoText, onChage, onClick, disabled } = props;

  return (
    // HTMLの場合は「class」
    // javascriptの場合、class構文の意味合いとなってしまう
    // reactのjsx上でクラスを付与する時は「className」
    // <div className="input-area">

    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        // onChange={onChangeTodoText}
        onChange={onChage}
      />
      {/* <button onClick={onClickAdd}>追加</button> */}
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
