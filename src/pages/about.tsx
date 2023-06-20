import { Title } from "@/components/Title";
import { WithTitle } from "@/components/about/WithTitle";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default () => {
  return (
    <main className='dark:text-gray-200'>
      <Header />
      <div className='max-w-[632px] px-4 m-auto mb-40 flex flex-col gap-6'>
        <Title>About</Title>
        <div className='flex flex-col gap-16 mt-8'>
          <div className=' text-xl leading-9'>
            안녕하세요. 👋 저는 웹 개발을 주로 하는 개발자 조상현입니다.
            <br /> 새로운 도전을 좋아하며, 그에 따라 많은 문제 상황을 접하고
            해결합니다.
            <br />
            Programming isn’t about what you know; it’s about what you can
            figure out.
          </div>
          <WithTitle title='Work Expreience'>
            <div className='text-xl'>아우름플래닛</div>
            <div>2023-07 ~ 현재</div>
          </WithTitle>
          <WithTitle className='flex flex-col gap-10' title='Project'>
            <div>
              <p className='text-xl'>DMS</p>
              <div className='text-gray-400 mb-3'>2022</div>
              <div>
                DMS는 전국의 모든 학교 통합 기숙사 관리 서비스입니다. 기존목표는
                교내 기숙사였지만 제가 시스템을 템플릿화해서 원하는 기능만
                선택하자는 의견을 내서 전국 기숙사 관리로 비전을 변경시켰습니다.
              </div>
              <ul className='list-disc list-inside mt-3'>
                <li>React에서 Pages폴더 인식 라우팅 개발</li>
                <li>ESLint plugin 개발</li>
                <li>디자인 시스템 npm 배포 및 개발</li>
                <li>어드민 서비스 개발</li>
              </ul>
            </div>
            <div>
              <p className='text-xl'>REPO</p>
              <div className='text-gray-400 mb-3'>2022</div>
              <div>
                한글 파일로 작성하던 레주메는 이제 그만! 직접 커스텀하며 자신의
                취향대로 레주메를 꾸미고 편하게 작성해보세요.
                대덕소프트웨어마이스터고등학교 학생들의 이력서 관리 서비스
                입니다.
              </div>
              <ul className='list-disc list-inside mt-3'>
                <li>yarn workspace로 모노레포 도입</li>
                <li>AWS docker로 CD 구성</li>
              </ul>
            </div>
          </WithTitle>
        </div>
      </div>
      <Footer />
    </main>
  );
};
