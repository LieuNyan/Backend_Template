# Backend_Template

Kubernetes 기반의 모노레포 백엔드 템플릿입니다.  
NestJS, Prisma, PostgreSQL을 중심으로 구성되었으며,  
**pnpm workspaces**를 사용하여 빠르고 확장 가능한 개발 환경을 제공합니다.

---

## 📌 Condition

1. **패키지 매니저: pnpm 필수**

   - 모노레포 구성 및 패키지 종속성 관리를 위해 pnpm을 사용합니다.

2. **Node.js 22 이상 권장**

   - 최신 런타임 기능(ES2022) 및 안정성을 위해 Node.js 22.x를 사용합니다.

3. **환경 변수 파일은 루트 디렉토리에 위치**

   - 모든 애플리케이션은 공통으로 루트 환경 변수를 공유합니다.
   - 사용 가능한 파일명: `.env.local`, `.env.development`, `.env.production`
   - dotenv-flow를 사용하여 NODE_ENV 값에 따라 자동으로 해당 파일이 적용됩니다.
   - 신규 애플리케이션 추가 시, `dotenv-flow`가 루트 env를 읽을 수 있도록 진입 파일(main.ts 등)에 설정이 필요합니다.
   - 개별 애플리케이션에 env 파일을 둘 경우, 루트 env를 기본값으로 삼고 dotenv-flow 규칙에 따라 해당 애플리케이션 내 env값이 우선적으로 오버라이드됩니다.
