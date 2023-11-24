// 自分で追加した
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import "./styles.css";

// named exportに変更（アロー関数を使用）
// ⇒index.jsで読み込んでいる部分を対応させる
export const Todo = () => {
  const [todoText, setTodoText] = useState([""]);
  // 分割代入
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // イベントが発行されると引数が渡ってくる）
  // 今回、引数（変数）名は「event」としている。「event」や「e」とすることが多い。
  // event.target.value：入力されたテキストの内容
  // setTodoTextでテキストに入力された値を更新する
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // テキストボックスが空の場合は何もしない
    // ★1回目は空のTODOが追加されてしまう
    if (todoText === "") return;

    // 配列の結合を使用する
    // 新しい配列「newTodos」に「incompleteTodos」をコピーして、「todoText」を追加（結合）
    const newTodos = [...incompleteTodos, todoText];
    // incompleteTodosを更新する
    setIncompleteTodos(newTodos);
    // テキストボックスを空にする
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // 差を判断する必要があるため、新しい配列等を用意してset関数に渡してあげる必要がある
    const newTodos = [...incompleteTodos];
    // splice関数：「index」の要素から「1」個削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了リストから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    // 完了リストから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了リストに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // 更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompletedTodos = incompleteTodos.length >= 5;

  return (
    // return以降ひとつのタグでまとまっている必要があるため、フラグメントを書いておく
    <>
      {/* 関数も渡せる。子コンポーネントは受け身。親で定義した関数を渡してあげるほうがシンプル */}
      <InputTodo
        todoText={todoText}
        onChage={onChangeTodoText}
        onClick={onClickAdd}
        // disabled={incompleteTodos.length >= 5}
        disabled={isMaxLimitIncompletedTodos}
      />
      {/* {incompleteTodos.length >= 5 && ( */}
      {isMaxLimitIncompletedTodos && (
        <p style={{ color: "red" }}>登録できるTODOは5個まで</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
