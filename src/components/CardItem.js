import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={{
        pathname: '/card-details',
        state: {
          src: props.src,
          text: props.text,
          text2: props.text2,
          label: props.label
        }
      }}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Food_Donation'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
