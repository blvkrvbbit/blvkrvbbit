import { ReactNode } from 'react';
import './scroll-snap-section.styles.css';

type Props = {
  title: string;
  children: ReactNode;
};

const ScrollSnapSection = ({ title, children }: Props) => {
  return (
    <section id={title} className={`${title} pt-24 pb-20`}>
      <h2 className='text-3xl mb-4 font-bold'>{title}</h2>
      {children}
    </section>
  );
};

export default ScrollSnapSection;
