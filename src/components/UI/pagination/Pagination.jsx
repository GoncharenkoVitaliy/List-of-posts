import React from 'react';
import styles from './Pagination.module.css';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={styles.pages__wrapper}>
        {pagesArray.map(p => 
          <span
            key={p}
            className={`${styles.page} ${page === p ? styles.page__current : ''}`}
            onClick={() => changePage(p)}
          >{p}</span>
        )}
      </div>
    );
};

export default Pagination;