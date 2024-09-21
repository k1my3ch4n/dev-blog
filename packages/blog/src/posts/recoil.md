## Recoil

[공식 문서](https://recoiljs.org/ko/)

Recoil 은 페이스북에서 만들어진 리액트를 위한 상태 관리 라이브러리로 , 2020년 만들어졌지만 아직 정식 출시 라이브러리는 아닙니다. 물론 실험적이라고는 하지만 생각보다 많이 쓰여지고 있긴 하고 , recoil 이 제시한 atom , recoilValue 등은 여러 상태관리 라이브러리에 큰 영향을 미쳤습니다.

## 사용 경험

이전 프로젝트를 리팩토링을 하게 되면서 Container/view pattern으로 리팩토링하게 되었습니다. 해당 pattern 으로 리팩토링한 목적은 UI 가 점점 복잡해지게 되면서 모듈화에 대한 필요성을 느끼게 되었고 , Container 와 View 를 분리하는 것에 대한 필요성이 느껴졌습니다. 그래서 Container/view pattern 을 채택하게 되면서 Container 에는 비즈니스 로직을 , View 에서는 뷰 로직만을 나누게 되면서 서로 독립되게 구성했습니다.

다만 위 패턴에는 단점이 하나 존재했는데 , 맨 위 비즈니스 로직에서 만들어진 상태 , 혹은 props 가 View 까지 많은 단계를 거쳐서 오게 되는 이른바 `Props drilling` 이 일어나게 되었습니다. 해당 문제를 해결하기 위해서 상태관리 라이브러리를 도입하게 되었습니다. 상태관리를 위해서 recoil 과 redux 사이에서 고민했는데 , 여러 방면으로 고민한 결과 recoil 을 도입하게 되었습니다.

1. recoil 이 react 위에서 만들어진 라이브러리다 보니 , 문법 등이 익숙해서 도입이 쉬웠습니다. 특히 hook 과 비슷한 방법으로 사용할 수 있어서 더욱 좋았습니다.
2. redux 에서는 비동기 로직 사용과 불변성 관리를 위해서 다른 라이브러리 또는 미들웨어를 사용해야하는 단점이 있었습니다. recoil 은 그런 것 필요 없이 내부에서 처리할 수 있어서 더 좋겠다는 생각이 들었습니다.
3. recoil 이 정식 라이브러리가 아닌 단점이 존재했지만 , 도전적인 팀원들의 의견은 새로운 것을 도입해보자는 쪽에 많이 기울어 있었습니다. 아무래도 이 것은 스타트업이었기에 가능한 부분이었던 것 같습니다. 새로운 기술에 도전적인 분위기가 있어서 시도해보았습니다.

물론 당시에는 recoil 에 대한 정보가 많이 부족한 부분이 있어서 에러 등에서는 어려움을 겪었으나 , recoil 의 방식 자체가 react 와 친화적이었어서 적용하는데에는 크게 어려움이 없었습니다.

직접 적용해 보았을 때는 recoil 특성 상 상태 저장과 꺼내서 사용하는 부분이 굉장히 편리했습니다. 또한 저장된 상태의 일부만 가져오고 설정하는 `selector` 와 특정 parameter 로 가져오는 `selectorFamily` 등이 필요한 정보만 가져올 수 있게 도와주는 부분이 편리하게 느껴졌습니다. 또한 비동기 상태 업데이트도 `selector` 내부에서 진행할 수 있는 것도 편리하게 느껴졌습니다. 무엇보다 변경한 Container/View 패턴에서 치명적인 props drilling 을 없애주고 , 필요한 곳에서 상태를 가져다 쓰는 것이 편리했습니다.

## Recoil 기본 개념

Recoil 에서는 상태를 저장할 때 , `atom` 을 사용합니다. `atom` 은 상태의 단위이고 , 업데이트와 구독이 가능합니다. 동일한 `atom` 이 여러 컴포넌트에서 사용된다면 , 모든 컴포넌트는 이 상태를 공유합니다. 이 `atom` 이 업데이트 되면 , 각각 구독된 컴포넌트는 새로운 값을 반영해서 리렌더링 합니다.

### RecoilRoot

가장 먼저 `RecoilRoot` 를 확인해야 합니다. `RecoilRoot` 는 최상위 컴포넌트에서 선언되며 ( root ) , Context 의 store 를 생성합니다. 이 store 에는 접근할 수 있는 함수들이 있는데 , 이 함수들로 상태값에 접근 또는 변경이 가능합니다. 그 후 값의 변경이 발생하면 , `RecoilRoot` 하위 컴포넌트에 이를 알리는 역할을 합니다.

```jsx
// App.tsx

function App() {
  return <RecoilRoot>{/* root component */}</RecoilRoot>;
}
```

### atom

`atom` 은 상태를 나타내는 Recoil 의 최소 단위입니다.

```js
// atom
import { atom } from 'recoil';

const stateAtom =
  atom <
  type >
  {
    key: 'stateAtom',
    defalut: undefined,
  };
```

`atom` 에서는 상태를 선언합니다. key는 unique 한 값이고, 식별자가 되는 값입니다. default 의 경우 초기값을 나타냅니다.

### useRecoilValue

atom 의 값을 읽어오는 훅입니다. 상태 값만 필요한 경우, 즉 상태를 업데이트 할 일이 없는 경우에 사용합니다.

```js
const state = useRecoilValue(stateAtom);
```

</br>

### useRecoilState

`useRecoilValue` 가 그냥 값만 가져온다면 , `useRecoilState` 는 `useState` 처럼 값과 setter 를 함께 가져옵니다.

```js
const [state, setState] = useRecoilState(stateAtom);
```

</br>

### useSetRecoilState

`useRecoilValue` 가 값만 가져온다면 , `useSetRecoilState` 는 setter 함수만 가져옵니다. atom의 값을 변경만 할 때 사용합니다.

```js
const setState = useSetRecoilValue(stateAtom);
```

</br>

### useResetRecoilState

atom 의 특정 상태 값을 초기값으로 재설정하는 함수입니다.

```js
const resetState = useResetRecoilState(stateAtom);
```

</br>

### Selector

`Selector` 는 atom 또는 다른 Selector 를 입력받은 후 , 원하는 특정 데이터만을 반환하거나 상태를 업데이트 할 수 있는 함수입니다.

```js
const todoListState = atom({
  key: 'todoList',
  default: [
    { id: '1', isDone: true, content: 'content' },
    { id: '2', isDone: false, content: 'content' },
    { id: '3', isDone: true, content: 'content' },
  ],
});

const completedTodoListSelector = selector({
  key: 'completedTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const completedTodoList = todoList.map((todo) => todo.isDone);
    return completedTodoList;
  },
});
```

위 `completedTodoListSelector` 는 읽기 전용 selector 로 , todoList 중 완료된 데이터만을 반환합니다. 위처럼 `get` 을 사용하면 원하는 특정 데이터만을 반환 가능하며 , 읽기 전용으로 사용될 경우에는 `useRecoilValue` 만 사용 가능합니다.

```js
const todoListState = atom({
  key: 'todoList',
  default: [
    { id: '1', isDone: true, content: 'content' },
    { id: '2', isDone: false, content: 'content' },
    { id: '3', isDone: true, content: 'content' },
  ],
});

const completedTodoListSelector = selector({
  key: 'completedTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const completedTodoList = todoList.map((todo) => todo.isDone);
    return completedTodoList;
  },
  set: ({ set, get }, newTodo) => {
    const todoList = get(todoListState);
    const lastIndex = todoList[todoList.length - 1].id;

    set(todoListState, {
      ...newTodo,
      id: lastIndex + 1,
    });
  },
});
```

위 경우에는 set 이 추가된 쓰기가 가능한 selector 입니다. set 의 경우 콜백 객체와 새로운 값을 parameter 로 받습니다. set 의 atom 의 상태를 업데이트 역할을 합니다. 위 경우 , `completedTodoListSelector` 는 todoList를 업데이트하는 역할을 합니다. 또한 `useRecoilValue` 뿐 아니라 `useSetRecoilValue` `useRecoilState` 등의 훅도 사용 가능합니다.

</br>

### Loadable

Loadable 의 경우 비동기 상태를 관리하는데 사용됩니다. Loadable 은 비동기 상태를 추적하고 각 상태에 따라 성공 / 실패 / 로딩 등의 상태를 처리하도록 도와줍니다. loadable 객체는 아래 3가지 상태를 가질 수 있습니다.

1. `hasValue` : 비동기 요청이 성공적으로 이루어져서 값이 존재하는 상태
2. `hasError` : 비동기 요청에 실패해서 에러가 발생한 상태
3. `loading` : 비동기 요청이 진행중인 상태

```js
const todoListState = atom({
  key: 'todoList',
  default: [
    { id: '1', isDone: true, content: 'content' },
    { id: '2', isDone: false, content: 'content' },
    { id: '3', isDone: true, content: 'content' },
  ],
});

const fetchTodoListSelector = selector({
  key: 'fetchTodoList',
  get: async () => {
    const response = await fetch('/data');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  },
});

const MyComponent = () => {
  const loadable = useRecoilValueLoadable(fetchTodoListSelector);

  if (loadable.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (loadable.state === 'hasError') {
    return <div>Error: {loadable.contents.message}</div>;
  }

  if (loadable.state === 'hasValue') {
    return <div>Data: {JSON.stringify(loadable.contents)}</div>;
  }
};
```

위처럼 `fetchTodoListSelector` 는 비동기적으로 데이터를 받아와서 그 json 을 반환합니다. 위 경우 `useRecoilValueLoadable` 를 통해서 데이터를 받아오고 , 그 데이터의 state 상태에 따라서 아래처럼 분기가 가능합니다. 외부 라이브러리나 미들웨어 필요 없이 loadable 을 통해서 비동기 통신도 쉽게 처리할 수 있는 것이 recoil 의 큰 장점이라고 할 수 있습니다.

## 후기

상태관리 라이브러리인 recoil 에 대해 정리해 보았는데 , 제가 느낀 recoil 의 가장 큰 장점은 react 를 사용한다면 사용하기에 매우 익숙하다는 점인 것 같습니다. 특히 자주 사용되는 `useRecoilState` 의 경우 많이 사용되는 `useState` 와 매우 흡사하게 동작하기 때문에 진입 장벽이 낮다는 생각이 듭니다. 또한 원하는 데이터만을 가져오고 수정할 수 있는 selector 와 비동기 통신을 도와주는 loadable 이 매우 편리하다고 느꼈습니다. 물론 정식으로 릴리즈되지 않은 것은 큰 리스크이기 때문에 recoil에서 영감을 받은 jotai , zustand 등이 대체제로 존재합니다. 다음 기회에는 3가지를 비교하는 글을 작성하면 좋을 것 같다는 생각이 드네요.
