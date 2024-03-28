import { ReactNode } from 'react';
import './scroll-snap.styles.css';

type Props = {
  children: ReactNode;
};

const ScrollSnap = ({ children }: Props) => {
  return <div className='scroll-snap'>{children}</div>;
};

export default ScrollSnap;
