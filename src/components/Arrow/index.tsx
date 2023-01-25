import { FC } from 'react';

import { IArrowProps } from '@components/Arrow/types';

const Arrow: FC<IArrowProps> = ({ direction }) => <div className={`arrow arrow--${direction}`} />;

export default Arrow;
