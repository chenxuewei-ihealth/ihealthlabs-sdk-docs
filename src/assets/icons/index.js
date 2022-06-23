
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import { Android, Apple } from '@styled-icons/boxicons-logos';

const AndroidIcon = ({ className, ...props }) => {
  return <Android className={clsx('text-[#3ddb85]', className)} {...props} />;
};

const AppleIcon = ({ className, ...props }) => {
  return <Apple className={clsx('text-text', className)} {...props} />;
};

AppleIcon.propTypes = AndroidIcon.propTypes = {
  className: PropTypes.string,
};

export { ReactIcon } from './ReactIcon';
export { KotlinIcon } from './KotlinIcon';

export { AndroidIcon, AppleIcon };
