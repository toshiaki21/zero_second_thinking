let nextbtn = document.querySelector('#nexttheme');
console.log(nextbtn);

nextbtn.addEventListener('click',function(){
  // theme削除
  let inputtheme = document.querySelector('#theme');
  const theme = inputtheme.value;
  console.log(theme);

  inputtheme.value = ''

  let input = document.querySelector('#input');
  input.value = ''

  let list = document.querySelector('.todo-list');
  list.textContent = ''

})

//１、ボタン要素を取得
let btn = document.querySelector('#btn');
console.log(btn);

//２、ボタンにクリックイベントを追加する (3-15は全てこのイベント内)
btn.addEventListener('click' ,function(){

  //３、ユーザーが入力した内容 (value) を取得し、定数に代入
  let input = document.querySelector('#input');
  const text = input.value;
  console.log(text);

  //４、<li>要素を作成 「かっこの中はタグ名」
  let list = document.createElement('li');
  console.log(list);

  //５、<li>にクラス（list）を追加
  list.classList.add('list');
  console.log(list);

  //６、<li>にユーザーが入力した内容(3)を入れる
  list.textContent = text;

  //７、<ul>要素を取得 (todo-list)
  let listparent = document.querySelector('.todo-list');
  console.log(listparent);

  //８、4-6で作成した<li>を、7で取得した<ul>の子要素に入れる
  listparent.appendChild(list);

  //９、inputの中に入力された文字を消去する（値を''にする）
  input.value = ''

  //１０、Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
  let btndelete = document.createElement('div');
  console.log(btndelete);

  //１１、 Deleteボタンのコンテンツ (文字) を指定
  btndelete.textContent = '削除';
  console.log(btndelete);

  //１２、Deleteボタンにクラス (delete) を追加
  btndelete.classList.add('delete');

  //１３、 10-12で作成したDeleteボタンを、4-6で作成した<li>の子要素に入れる
  list.appendChild(btndelete);

  //１４、 Deleteボタンにクリックイベントを追加 (15)
  btndelete.addEventListener('click',function(){

  //１５、 クリックした要素 (this) を親ごと削除
  // thisはaddEventlistnerの前のbtndelete
  this.parentElement.remove();
  // list.remove();
  // どっちでも可
  // 複数あればthis
})
})


