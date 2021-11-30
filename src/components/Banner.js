import React from 'react';
import github from '../assets/github.png';
import girl from '../assets/girl-removebg.png';
import dotPattern from '../assets/dot-pattern.png';
import dotPurple from '../assets/dot-purple.png';
import dotYellow from '../assets/dot-yellow.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const bannerVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
        },
    },
};
const bannerLeft = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
            when: 'beforeChildren',
        },
    },
};
const item = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            when: 'beforeChildren',
        },
    },
};
const button = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
        },
    },
};
const dots = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 1,
            when: 'beforeChildren',
        },
    },
};
const dotItem = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            delay: 1,
            duration: 0.5,
            type: 'spring',
            stiffness: 300,
        },
    },
};

const Banner = () => {
    return (
        <div className='banner'>
            <motion.div
                className='banner-inner'
                variants={bannerVariant}
                initial='hidden'
                animate='visible'
            >
                <motion.div className='banner-left' variants={bannerLeft}>
                    <motion.h3 variants={item} id='logo'>
                        Your Sudoku
                    </motion.h3>
                    <motion.div className='heading' variants={item}>
                        <h2>SOLVE yOUR daILY</h2>
                        <h2 className='sudoku'>sUDOKU!</h2>
                    </motion.div>
                    <motion.p variants={item}>
                        There are about <span>10^21</span> possible solutions to
                        Sudoku . That’s far more than you can imagine.
                    </motion.p>
                    <motion.div variants={button}>
                        {' '}
                        <Link
                            to='action'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                        >
                            Explore Them
                        </Link>
                    </motion.div>
                </motion.div>
                <div className='banner-right'>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img id='github' src={github} alt='' />
                    </a>

                    <motion.div
                        className='girl-bg'
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            type: 'spring',
                            stiffness: 300,
                        }}
                    >
                        <img id='girl' src={girl} alt='' />
                    </motion.div>
                    <motion.div variants={dots}>
                        <motion.img
                            variants={dotItem}
                            id='dots'
                            // src={dotPattern}
                            alt=''
                        />
                        <motion.img
                            variants={dotItem}
                            className='purple-dots'
                            // src={dotPurple}
                            alt=''
                        />
                        <motion.img
                            variants={dotItem}
                            className='yellow-dots'
                            // src={dotYellow}
                            alt=''
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
