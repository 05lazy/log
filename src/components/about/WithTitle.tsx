interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const WithTitle = ({ children, title, className }: Props) => {
  return (
    <section>
      <h2 className='text-3xl mb-7'>{title}</h2>
      <div className={className}>{children}</div>
    </section>
  );
};
