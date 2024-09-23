## 애플리케이션 배포

실제로 프로젝트를 개발했다고 해도 , 사용자가 접근해서 사용하려면 실제 인터넷 망에 배포되어야 가능합니다. 자체적인 인프라가 있는 곳도 많지만 , 규모가 작다면 아마존 웹 서비스 ( Amazon Web Service ) 나 구글 클라우드 플랫폼 ( Google Cloud Platform ) , 마이크로 소프트 애저 ( Microsoft Azure ) 등 클라우드 서비스를 많이 활용합니다. 개인 프로젝트 , 소규모 프로젝트도 물론 위와 같은 방법을 사용할 수 있으나 보다 손쉽고 빠르면서 안정적인 방법으로 배포할 수 있는 여러 방법을 사용해 보려고 합니다.

사전 준비로는 Github 에 Deploy 라는 repo 를 만든 후 , 기본 React Vite 앱을 만들었습니다.

## Netlify

[공식 문서](https://www.netlify.com/)

Netlify 는 웹 애플리케이션을 배포하도록 도와주는 클라우드 컴퓨팅 서비스 입니다. 가장 널리 알려진 정적 웹 사이트 배포 서비스중 하나로 , 무료로도 어느 정도 활용이 가능해 손쉽게 배포가 가능합니다.

가장 먼저 Netlify 에 가입 후 팀을 생성합니다. 저는 간단하게 작업하기 위해서 github 연동으로 가입했습니다.

그 후 Team Overview 에 들어가면 아래와 같은 화면이 등장합니다. ![](https://velog.velcdn.com/images/k1my3ch4n/post/056d96ee-8a31-48c7-8327-c1f818026600/image.png)

이후 `Import an existing project` 를 클릭하면 배포할 웹 애플리케이션이 있는 저장소를 불러옵니다. 그 후 , 빌드 및 배포 관련 설정을 추가합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/e115a0d2-84e0-44be-80bf-e624e8cb8319/image.png)

- `Branch to deploy` : 머지가 일어나면 자동 배포하게 되는데 , 그 타깃이 되는 branch를 선택할 수 있습니다.
- `Base directory` : 배포 명령어를 실행할 기본 디렉터리입니다. 일반적인 경우 루트이기 때문에 `/` 를 지정하면 되지만 , 별도에 디렉터리에 존재한다면 해당 디렉터리를 지정하면 됩니다.
- `Build command` : 빌드 명령어 입니다. 기본 빌드 명령어인 `yarn run build` 를 사용했습니다.
- `Publish directory` : 실제 서비스에 필요한 정적 리소스가 위치한 디렉터리 입니다.

아래에 `Add environment variables` 로 환경변수를 지정할 수도 있습니다. 그 후 , 아래 `Deploy ${site-name}` 을 선택하면 바로 배포됩니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/bf0e99e8-568a-4440-baf0-38a9f948a94d/image.png)

[배포된 사이트](https://exquisite-speculoos-63c553.netlify.app/)

여기서 배포 정보에 대해 알고 싶다면 , `Production deploys` 를 클릭하면 아래와 같은 화면이 등장하는데 , 해당 화면에서 배포 로그 등 정보를 확인할 수 있습니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/fee8e5f5-874a-4b61-b5ec-1d4c3b0c619a/image.png)

추가적으로 Netlify 에는 여러 기능이 존재합니다.

- 알림 : 배포와 관련된 알림 ( 성공 , 실패 등 ) 을 추가할 수 있고 , 해당 알림을 원하는 방법으로 받을 수 있습니다. ( 일부는 유료 )
- 도메인 연결 : 외부에서 구매한 도메인을 해당 사이트로 연결할 수 있습니다 .

가격은 무료도 가능하지만 , 대역폭이 월 100GB , 빌드 소비시간이 300분 등으로 제한되는 부분이 있습니다. 또한 여러 사이트를 운영해도 한 번에 한 곳만 빌드가 가능합니다.

## Vercel

[공식 문서](https://vercel.com/)

Vercel 은 Nextjs , Turborepo , SWC 등을 만든 회사이면서 동시에 클라우드 플랫폼 서비스 입니다. Nextjs 를 뒤에 엎고 떠오르고 있습니다.

역시 일단 가입 후 로그인을 진행합니다. 역시 github 로 로그인을 진행했습니다. vercel 은 팀이 유료 서비스이므로 개인으로 진행하면 됩니다. 그 후 Netlify와 마찬가지로 github 저장소를 가져옵니다 .

![](https://velog.velcdn.com/images/k1my3ch4n/post/e8f70ad1-5260-4c56-845f-c17b607ae25f/image.png)

vercel 도 마찬가지로 디렉토리와 빌드 옵션 등을 선택할 수 있습니다. 하나의 다른 점이라면 루트 디렉토리를 보여줄 때 UI 로 설정할 수 있으며 , 그게 어떤 프로젝트인지도 예상해서 알려주는 장점이 있습니다. 심지어 프레임워크를 설정하면 일반적으로 사용되는 빌드 명령어 , 배포 위치 , 배포 명령어 등도 선택 가능해서 실수를 줄일 수 있습니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/89f05898-d464-4f06-8d31-741e12e5c9e0/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/c02cd937-fba8-44cc-b488-3f275672962c/image.png)

이제 Deploy 를 누르게 되면 배포가 진행됩니다.

[배포된 사이트](https://deploy-theta-tawny.vercel.app/)

netlify 와 마찬가지로 배포가 된 것을 볼 수 있습니다. 추가기능도 비슷한데 , 알림과 도메인 연결이 가능하고 추가로 다양한 템플릿을 지원해서 기본적인 웹사이트를 제공해줍니다. 무료 가격도 대역폭과 동시 빌드는 netlify 와 동일한데 , 배포가 하루 100개로 제한됩니다.

## Docker 를 이용한 배포

위 두 방법의 경우 , 간단한 웹 페이지를 배포하기에는 적당하지만 사용자한테 서비스하기 위한 웹 애플리케이션을 배포하기에는 그렇게 적절하지 못합니다. 간단히 배포가 가능한 대신 , 요금을 많이 지불해야 할 수도 있고 , 추가 기능에는 제약이 있기 때문입니다. 따라서 요즘에는 애플리케이션을 하나의 컨테이너로 만들어서 배포하는데 , 그게 바로 Docker 입니다. Docker 이미지가 실행 가능한 환경이 만들어지면 어디서든 배포가 가능하므로 , 특정 프로그램에 종속하지 않고 배포가 가능합니다.

Docker 에 대해서는 다른 게시글에서 자세하게 다룰 예정입니다. 이번에는 Docker Desktop 을 이용해서 간단하게 배포하는 것만 진행하도록 하겠습니다. 일단 Docker Desktop 을 다운로드 하고 , 로그인을 진행합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/74da3aa8-c33f-442b-a66f-26c8c1af067b/image.png)

### Docker Image 만들기

Docker Image 만들기 위해서는 Dockerfile 을 작성해야 합니다. Dockerfile 은 도커 이미지를 생성하고 빌드하는데 도움을 줍니다 . 배포할 파일의 루트에 아래와 같이 Dockerfile 을 작성합니다.

```Dockerfile
FROM node:20.11.0-alpine as build

WORKDIR /

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install

COPY . .

RUN yarn build
```

- `FROM node:20.11.0-alpine as build` : 이 도커 이미지가 어느 환경에서 실행될지를 결정합니다. `node 20.11.0` 버전이며 , 알파인 리눅스 위에서 빌드된다는 것을 의미합니다. 알파인 리눅스는 일반적인 리눅스보다 가볍고 깔끔하므로 특별한 이유가 없다면 알파인 리눅스를 사용하는것이 권장됩니다.
- `WORKDIR /` : 작업을 수행하는 디렉토리를 의미합니다.
- `COPY package.json ./package.json, COPY yarn.lock ./yarn.lock` : 의존성이 저장된 파일을 Copy 하는 명령어 입니다.
- `RUN yarn install` : `RUN` 명령어는 컨테이너에서 명령어를 실행할 수 있습니다. 의존성 다운로드를 실행합니다.
- `COPY . .` : 모든 리소스를 복사합니다.
- `RUN yarn build` : 빌드 명령어를 통해서 애플리케이션을 빌드합니다.

이제 터미널에서 아래 명령어를 통해서 도커를 실행하게 되면 , 이미지가 실행됩니다.

```shell
docker build . -t vite
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/a82f914d-44d4-4747-a3f2-fb0d1b4f27cb/image.png)

이제 이 애플리케이션이 빌드되었으니 , 실행할 차례입니다. 이를 위해서 NGINX 를 사용해서 서비스하도록 설정을 추가하겠습니다. 위에 만들어진 `Dockerfile` 아래에 nginx 설정을 추가하고 `nginx.conf` 파일을 추가합니다. `nginx.conf` 는 앱이 실행되는 디렉토리 루트에 `nginx` 폴더 추가 후 내부에 생성합니다.

```conf
# ./nginx/nginx.conf

server {
    listen 3000;
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
```

- `listen 3000` : 3000 에서 클라이언트 요청을 수신합니다.
- `access_log , error_log` : 각각 로그 파일이 저장될 장소를 지정합니다.
- `location` : 정적 파일들이 위치하는 디렉토리를 지정합니다.

```DockerFile
FROM nginx:1.23.2-alpine as start

COPY --from=build ./dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
```

- `FROM nginx:1.23.2-alpine as start` : 실행될 때 사용될 nginx 의 버전을 나타냅니다.
- `COPY --from=build ./dist /usr/share/nginx/html` : 빌드 단계에 실행된 빌드 파일 ( vite 의 경우 `./dist` 내부 파일 ) 을 원하는 경로로 복사해옵니다.
- `RUN rm /etc/nginx/conf.d/default.conf` : 기존 config 설정을 삭제합니다. 임의로 설정한 custom 설정과 충돌할 가능성이 있어서 삭제합니다.
- `COPY nginx/nginx.conf /etc/nginx/conf.d` : 커스텀 설정을 복사해서 가져옵니다.
- `EXPOSE 3000` : 사용할 포트를 엽니다.
- `CMD ["nginx", "-g", "daemon off;"]` : 컨테이너가 시작되었을 때 실행될 명령입니다. nginx 서버를 실행하고 , 백그라운드로 동작하게 합니다.

이후 위와 같이 도커를 실행하게 되면 , 마찬가지로 이미지가 생성됩니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/6206f31c-4a29-4f12-9ca4-966a73c9728b/image.png)

이제 실행하려면 추가 포트 설정을 해야합니다. 저희는 3000 포트를 사용하도록 설정했으므로 재생 버튼처럼 생긴 부분을 누르게 되면 아래와 같은 창이 등장하는데 , 해당 host port 를 3000으로 설정해줍니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/608fc660-882f-4786-b359-87895f7060cc/image.png)

이제 run을 누르고 , `localHost:3000` 으로 접근하게 되면 페이지가 등장합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/3a893d7e-df99-490d-ad8c-1c7dbe50bb11/image.png)

### Docker Hub 에 이미지 배포

Docker Hub 는 Docker 이미지를 클라우드에 업로드할 수 있게 설정해 주는 것으로 , 추후에 AWS , GCP 등을 사용해서 배포를 실행할 때 가져와서 실행하도록 도와줍니다.

가장 먼저 Docker Hub 에 들어가서 로그인을 진행합니다. 그 후 Repositories 탭에서 Create Repository로 새 repo를 생성합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/144dfb18-da66-4d9e-b2ce-f84004a78ce2/image.png)

이제 기존 도커 이미지의 태그를 docker hub 의 태그와 일치시켜야 합니다.

```bash
docker tag ${기존 태그} ${사용자명/저장소명:태그명}
```

위 명령어로 만들었던 이미지의 태그를 수정해 줍니다. 그 후 , `Push to Hub` 를 누르게 되면 Docker Hub 에 이미지가 올라가게 됩니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/c078ddca-2283-4056-9a4a-125a697a2391/image.png)

### GCP ( Google Cloud Platform ) 으로 배포 및 실행

[GCP](https://console.cloud.google.com/)

먼저 GCP 에 회원가입을 진행해야 합니다. 처음 회원가입을 하게 되면 300불의 크레딧을 제공받는데 , 이정도면 연습용으로 사용하기에는 충분합니다.

그 후 [안내페이지](https://cloud.google.com/sdk/docs/install?hl=ko) 를 따라서 `gcloud CLI` 를 설치합니다. `gcloud CLI` 를 설치하게 되면 터미널에서 gcloud 를 사용할 수 있습니다. ![](https://velog.velcdn.com/images/k1my3ch4n/post/153b5715-041a-4783-a607-2823869b7e3d/image.png)

이제 gcloud 에 로그인 해야합니다.

```bash
gcloud auth login
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/bfb1d894-f27d-4087-a4c4-a030ae877806/image.png)

다음으로 도커 이미지를 push합니다. gcloud 홈페이지에서 `Artifact Registry` 를 검색 후 접속합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/396bf2fc-f6bc-4542-aded-d5823d47b9d0/image.png)

create repository 를 이용해 repo를 생성합니다. format 은 docker , region 은 `northamerica-northeast1 (Montreal)` 을 선택합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/43800664-7a78-4e6f-b3d6-9e35b388f498/image.png)

해당 repo에 들어가면 해당 레포의 주소를 복사할 수 있습니다. 이제 이미지를 push 하기 위해서 gcloud 설정을 추가합니다.

```bash
gcloud auth configure-docker northamerica-northeast1-docker.pkg.dev
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/a1e7b535-23b8-4df1-8631-f5dd147864e2/image.png)

설정이 완료되었다면 , 아까처럼 이미지에 태그를 추가합니다. 이때 저장소명은 gcloud 의 저장소명입니다. 그 후 , push 합니다.

```bash
# 태그 변경
docker tag ${기존 태그} ${저장소명/태그명}

# push
docker push ${저장소명/태그명}
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/f7cead3a-03f3-4f50-a3ff-f19c7cc51585/image.png)

이제 gcloud console 을 확인하면 , 이미지가 추가된 것으로 보입니다. 이제 이 이미지를 실행시켜야 합니다. 검색창에 `cloud run` 을 검색 후 , `create service` 로 서비스를 생성합니다. 주요 설정은 아래와 같습니다.

- `Container image URL` : 빌드할 컨테이너 이미지를 선택합니다. select 에서 아까 업로드한 도커 이미지를 선택합니다.
- `Region` : 서비스 배포 지역을 선택합니다. 연습용이므로 저렴한 Tier1 을 선택합니다.
- `Container` : 배포할 이미지 컨테이너 설정을 추가합니다. 저희는 3000 포트를 열었으므로 3000으로 설정합니다.

이후 create 를 누르면 잠시 기다린 후 빌드 후 실행됩니다.

[배포된 사이트](https://k1my3ch4n-hn7pzlj2wq-an.a.run.app/)

다만 이 경우는 애플리케이션이 계속 변경될 때 마다 이미지를 새로 빌드해줘야해서 자동화가 되어있지 않다면 굉장히 귀찮을 수 있습니다. 이에 따라 gcloud 에서도 저장소의 dockerfile 을 이용해 배포하는 방법도 사용가능합니다.

### GCP 와 Github 저장소를 이용한 배포

마찬가지로 Cloud Run 에서 새 서비스를 생성합니다. 이때 `Github` 로 되어있는 부분을 선택하고 , 저장소를 연결 후 원하는 repo를 가져옵니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/576a599c-fa98-4dd9-9062-d1a90795e446/image.png)

이후 나머지 설정은 이전 설정과 같이 설정하면 끝입니다.

[배포된 페이지](https://deploy-hn7pzlj2wq-uc.a.run.app/)

이 방법은 빌드된 이미지를 푸시하는 것이 아니라 , 패키지가 변동됨에 따라서 이미지를 빌드하고 푸시하기 때문에 새로운 커밋 등 변경사항이 일어나도 자동으로 진행된다는 장점이 있습니다. github 에 코드가 적용되기만 하면 신경쓸 게 적어져서 실수도 적어진다는 매력적인 장점이 존재합니다.

## 후기

실제 서비스할 때에는 aws 로 배포하는 방법만 알고 있었는데 , Netlify , Vercel , Docker 등의 방법으로 배포해보니 개인적으로 진행하는 작은 프로젝트 등을 배포하기에 충분히 매력적으로 느껴졌습니다. 특히 Docker 로 배포하게 되면 용량도 적어지고 , 가격도 적어져서 훨씩 효율적으로 배포할 수 있다고 생각됩니다. 제 어필을 위한 포트폴리오나 이력서 등등도 위와 같은 방법으로 배포된 사이트로 만들면 좋을 것 같다는 생각이 들어서 작게나마 만들어봐야겠습니다.
