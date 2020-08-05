import '../../../node_modules/rc-pagination/assets/index.css';
import React from 'react';
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom'


const Paginate = ({total, paginate}) => {
    const itemRender = (current, type, element) => {
        if (type === 'page') {
          return <Link onClick={ () => paginate(current)} to={`#${current}`}>{current}</Link>;
        }
        return element;
      };
    return(
        <>
          <Pagination total={total} pageSize={40} itemRender={itemRender} />
        </>
      );
} 

export default Paginate;

