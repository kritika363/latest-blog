import React from 'react';
import styles from './idea.module.css';
import Image from 'next/image';

const Idea = () => {
  return (
    <div className='idea mt-20 mb-40'>
       <div className="container">
          <h3 className='text-center text-4xl mb-3 font-700'>Let's turn your idea into<br/> a <span className='text-red-800'>scalable business!</span></h3>
          <p className='text-center'>we can transform your vision into a thriving enterprise.</p>
          <div className={styles.outer}>
              <div className={styles.inner}>
                <Image src='/login.png' alt='login' width={90} height={90}></Image>
                <h4>LOGIN FIRST</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
              <div className={styles.inner}>
              <Image src='/test.png' alt='test' width={90} height={90}></Image>
                <h4>FACE TESTING</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
              <div className={styles.inner}>
              <Image src='/data-analysis.png' alt='data analysis' width={90} height={90}></Image>
                <h4>DATA ANALYSIS</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
              <div className={styles.inner}>
              <Image src='/creative-process.png' alt='creative process' width={90} height={90}></Image>
                <h4>UNIQUE DESIGN</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
              <div className={styles.inner}>
              <Image src='/programming.png' alt='programming' width={90} height={90}></Image>
                <h4>VALIDATED CODE</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
              <div className={styles.inner}>
              <Image src='/graph.png' alt='graph' width={90} height={90}></Image>
                <h4>MULTI FUNCTIONAL</h4>
                <p>Lorem ipsum dolor uIL sit amet, consecte pellentesque et nonLIEM erat Maecenas cenasgue ut eget secte pellentesque</p>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Idea