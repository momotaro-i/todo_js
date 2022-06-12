import "./styles.css";
const incomplateArea = document.getElementById("js-incomplate-area");
const complateArea = document.getElementById("js-complate-area");

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("js-add-text").value;
  document.getElementById("js-add-text").value = "";
  addFromIncomplateList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplateList = (target) => {
  const deleteTarget = target.parentNode.parentNode;
  incomplateArea.remove(deleteTarget);
};

//未完了リストに追加
const addFromIncomplateList = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.className = "list-item";
  const p = document.createElement("p");

  //完了ボタン
  const complateBtn = document.createElement("button");
  complateBtn.innerText = "完了";
  complateBtn.addEventListener("click", () => {
    deleteFromIncomplateList(complateBtn);
    //完了リストに追加する要素
    const addTarget = complateBtn.parentNode;
    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //span以下を初期化
    addTarget.textContent = null;

    //要素の生成
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "list-item";
    const p = document.createElement("p");

    //完了リストに追加
    complateArea.appendChild(li);
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    p.innerText = text;
    addTarget.appendChild(backBtn);
  });

  //削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    //押された削除ボタンの親要素liを消す
    deleteFromIncomplateList(deleteBtn);
  });

  li.appendChild(span);
  span.appendChild(p);
  p.innerText = text;
  span.appendChild(complateBtn);
  span.appendChild(deleteBtn);

  //未完了リストの下にli追加
  incomplateArea.appendChild(li);

  //戻すボタン生成
  const backBtn = document.createElement("button");
  backBtn.innerText = "戻す";
  backBtn.addEventListener("click", () => {
    const deleteTarget = backBtn.parentNode.parentNode;
    complateArea.remove(deleteTarget);
    const text = backBtn.parentNode.firstElementChild.innerText;
    addFromIncomplateList(text);
  });
};

const addBtn = document.getElementById("js-add-button");
addBtn.addEventListener("click", () => onClickAdd());
