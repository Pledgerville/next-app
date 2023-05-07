import { motion, MotionProps } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type MotionBoxProps = BoxProps & MotionProps;

export const MotionBox: React.FC<MotionBoxProps> = motion(Box);