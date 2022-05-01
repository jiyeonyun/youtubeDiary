## youtubeDiary 📝
* https://jiyeonyun.github.io/youtubeDiary/
<br>↑ 배포사이트
<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git hub-181717?style=flat-square&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/>
<img src="https://img.shields.io/badge/FireBase-FFCA28?style=flat-square&logo=FireBase&logoColor=white"/>
<br>

 *** 
 
 매번 유튜브에서 유용한 내용이 있으면 캡쳐를 해두고 다시는 안봐서 기록하는 어플을 만들어보았습니다.<br>
 앞으로 추가할 내용은 날짜별 저장된 영상구분 카테고리별 구분을 업데이트 할 예정입니다.<br>
 firebase를 이용해 로그인기능을 사용하였고, firebase의 데이터 베이스를 이용해 데이터를 저장하였습니다.<br>
 유튜브 api를 사용하여 유튜브 정보르 받아 왔습니다.

## 상세 페이지

### 메인화면
<br><br><br>
<img width="488" alt="스크린샷 2022-04-25 오후 6 45 38" src="https://user-images.githubusercontent.com/94913420/165065842-cefc7ff3-8b87-438e-bef5-a9fc1cc1ba6b.png">

<br><br>
실행시 화면입니다.<br>
firebase인증을 사용하여 깃허브 또는 구글로 로그인 할 수 있습니다.

<br><br><br>
### 상세 기능
<br><br><br>
<img width="487" alt="스크린샷 2022-04-25 오후 6 46 05" src="https://user-images.githubusercontent.com/94913420/165065863-621ec086-b559-4678-8fae-29ccced34ae9.png"><br>
구글이나 깃허브에서 받아온 유저 정보로 유저의 프로필과 이름을 보여줍니다.<br>
로그아웃버튼과 북마크 버튼을 배치하여 로그아웃을 할수있고, 북마크페이지로 이동 가능합니다.<br>
유튜브 api를 사용해 현재 한국의 인기 영상을 배치했습니다.
<br><br><br>

<img width="469" alt="스크린샷 2022-04-25 오후 6 46 15" src="https://user-images.githubusercontent.com/94913420/165065880-77da929e-c505-407a-8708-c96aeea1b0ee.png">
<br>
<img width="483" alt="스크린샷 2022-04-25 오후 6 46 50" src="https://user-images.githubusercontent.com/94913420/165065896-9549c590-280e-4bce-bc4c-bfb6e6a5ceba.png">
<br><br>
우측 하단의 북마크 버튼을 누르면 firebase데이터 베이스로 데이터를 전달시킵니다.<br>
데이터를 사용할때는 redux를 이용하였습니다<br>
코멘트를 적어 저장할 수있고, 코멘트 없이 저장할수도 있습니다.<br><br><br>
<img width="482" alt="스크린샷 2022-04-25 오후 6 47 19" src="https://user-images.githubusercontent.com/94913420/165065905-4693db21-3e70-4b66-b01c-0df078cc050f.png">
<br>
<img width="460" alt="스크린샷 2022-04-25 오후 6 47 26" src="https://user-images.githubusercontent.com/94913420/165065912-243df580-409f-464a-98d4-09a2f5c59baa.png">
<br><br>
북마크 페이지 입니다. 저장한 영상들이 있습니다.
댓글표시를 누르면 아까 적었던 코멘트와 함께 뜹니다. <br><br><br>
<img width="485" alt="스크린샷 2022-04-25 오후 6 47 52" src="https://user-images.githubusercontent.com/94913420/165065924-5d962628-486f-4952-96e3-3776ac0ae849.png">
<br><br>
전부 선택하면 북마크가 비어있다고 알려줍니다.
<br><br>

<img width="482" alt="스크린샷 2022-04-25 오후 6 48 11" src="https://user-images.githubusercontent.com/94913420/165065941-150571d8-8ce7-4f05-be9d-8ff0121d39da.png">
<br>
<img width="484" alt="스크린샷 2022-04-25 오후 6 48 28" src="https://user-images.githubusercontent.com/94913420/165065950-96ffe037-fd24-49c3-97b7-02bf7ed8b97e.png">
<br><br>

검색기능을 사용해서 영상을 저장할 수 도 있습니다.<br>
영상을 클릭하며 영상이 플레이됩니다.<br><br><br>

<img width="490" alt="스크린샷 2022-04-25 오후 6 48 46" src="https://user-images.githubusercontent.com/94913420/165065963-b0202fe2-9719-418a-a6fe-aefce72b4fbc.png">
<img width="479" alt="스크린샷 2022-04-25 오후 6 48 56" src="https://user-images.githubusercontent.com/94913420/165065980-0246e1ab-dcda-4b8f-b626-55514727433b.png">
<br><br>

-------------------------------------------------------------------------
<br><br>
22.05.01 영상하단 북마크기능 추가
<br><br>
<img width="475" alt="스크린샷 2022-05-01 오후 8 55 16" src="https://user-images.githubusercontent.com/94913420/166144683-26a0ef7a-a468-41ad-854f-c57d59127a9a.png">
<br><br>

<img width="480" alt="스크린샷 2022-05-01 오후 8 53 46" src="https://user-images.githubusercontent.com/94913420/166144684-bd4eada2-f648-431f-9934-9521e25f868b.png">
<br><br>

+추가할기능 1.카테고리별로 나누기 ~~2.영상하단에서도 메모가능하게 만들기~~ 3. 저장된 날짜별로 나누기

