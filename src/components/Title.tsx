interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return (
    <>
      <h1 className='text-5xl font-bold mt-20'>{children}</h1>
      <hr />
    </>
  );
};
