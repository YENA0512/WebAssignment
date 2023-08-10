# [신입사원 프로젝트]

## 폴더 구성

```markdown
└─ week4
├─ css
│ ├─ common.css
│ ├─ register.css
│ └─ style.css
├─ index.html
├─ js
│ ├─ register.js
│ └─ scripts.js
└─ register.html
```

## 1. TodoList

- addTodo()
  - 추가 버튼을 눌렀을 때 일정을 추가하는 함수
  - button onclick 이벤트 호출하면 <li> 태그 요소가 생성되면서 작성한 글이 포함된 리스트가 목록에 추가된다.
  - 만약 추가된 일정을 누르면 글에 줄이 그어지는 효과가 생긴다.
- deleteList()
  - X 버튼을 눌렀을 때 일정을 삭제하는 함수
  - 버튼을 클릭했을 때 해당하는 모든 일정 요소가 삭제된다.
- allClearList()
  - 모든 일정을 한번에 삭제하는 함수
  - confirm 창으로 정말 삭제하겠습니까?를 물은 후, 확인하면 모든 목록이 한번에 삭제된다.

## 2. 회원가입

- clickSubmit()
  - 가입하기 버튼을 누르면 회원가입 진행함수를 실행하는 액션함수
- validateEmail(email)
  - email형식이 올바른지 확인
  - true/false 반환
- handlesubmit()
  - 회원가입 값을 올바르게 입력했는지 확인하고 가입 진행하는 함수
  - 모든 값이 빠짐없이 입력되었는지, 비밀번호가 4글자-20자 이내로 입력되었는지, 이메일 형식이 맞는지, 비밀번호와 비밀번호 확인이 일치하는지, 입력한 이메일이 배열에 저장되어있는지 판단하여 모두 올바르게 작성되었으면 정상적으로 회원가입 진행한다.
