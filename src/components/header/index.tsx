import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { LightSwitch } from "./LightSwitch";

export const Header = () => {
  return (
    <div className='max-w-[632px] m-auto z-10'>
      <header className='fixed backdrop-blur px-4 right-0 left-0 z-10'>
        <div className='h-16 max-w-[632px] m-auto flex items-center justify-between'>
          <Logo />
          <div className='flex gap-6'>
            <Navigation />
            <LightSwitch />
          </div>
        </div>
      </header>
      <div className='pt-16' />
    </div>
  );
};
