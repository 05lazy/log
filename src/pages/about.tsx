import { Title } from "@/components/Title";
import { WithTitle } from "@/components/about/WithTitle";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default () => {
  return (
    <>
      <Header />
      <div className='max-w-[632px] px-4 m-auto mb-40 flex flex-col gap-6'>
        <Title>About</Title>
        <div className='flex flex-col gap-16 mt-8'>
          저는 주로 프론트엔드 개발을 합니다. 하지만 디자인, 백엔드 등도
          즐겨합니다. 새로운 것을 거리낌없이 받아드립니다. 투명하고 도전적인
          팀을 선호하고 항상 컴포트존에서 머물지 않으려고 합니다.
          <WithTitle title='Work Expreience'>
            <div className='text-xl'>아우름플래닛</div>
            <div>2022-05 ~ 현재</div>
          </WithTitle>
          <WithTitle className='flex flex-col gap-10' title='Project'>
            <div>
              <p className='text-xl'>DMS</p>
              <div className='text-gray-400 mb-3'>2022</div>
              <div>
                Domitory Management System, 전국 기숙사 통합 기숙사 관리
                시스템입니다. 기존의 목표는 교내 기숙사 관리였지만 제가 시스템을
                템플릿화해서 원하는 기능만 선택해 사용하게 하자는 의견을 내서
                전국 기숙사 관리로 비전을 변경시켰습니다.
              </div>
              <ul className='list-disc list-inside mt-3'>
                <li>React에서 Pages폴더 인식 라우팅 개발</li>
                <li>ESLint plugin 개발</li>
                <li>디자인 시스템 npm 배포 및 개발</li>
                <li>어드민 서비스 개발</li>
              </ul>
            </div>
            <div>
              <p className='text-xl'>Entry</p>
              <div className='text-gray-400 mb-3'>2022</div>
              <div>
                교내 이력서관리 서비스, 기존에 한글파일로 작성되어 기업으로
                보내졌던 이력서를 웹사이트로 제작할 수 있고 선생님이 피드백을
                주고 기업에서 확인할 수 있는 기능들을 포함한 웹사이트를
                만들었습니다.
              </div>
              <ul className='list-disc list-inside mt-3'>
                <li>yarn workspace로 모노레포 도입</li>
                <li>유저 서비스 개발</li>
              </ul>
            </div>
          </WithTitle>
        </div>
      </div>
      <Footer />
    </>
  );
};
