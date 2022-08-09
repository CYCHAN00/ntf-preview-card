import classes from './Card.module.scss';
import React from 'react';
import { ReactComponent as EthIcon } from '../../assets/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from '../../assets/icon-clock.svg';
import { ReactComponent as ViewIcon } from '../../assets/icon-view.svg';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes['card__container']}>
        <figure className={classes['card__shape']}>
          <img
            src={require('../../assets/image-equilibrium.jpg')}
            alt='Img-Nft'
            className={classes['card__shape-img']}
          />
          <figcaption className={classes['card__shape-caption']}>
            <ViewIcon
              className={classes['card__shape-caption-icon']}
            ></ViewIcon>
          </figcaption>
        </figure>

        <h1 className={classes['card__title']}>Equilibrium #3429</h1>
        <p className={classes['card__details']}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={classes['card__price']}>
          <div className={classes['card__price--eth']}>
            <EthIcon className={classes['card__price--eth--icon']}></EthIcon>
            <span>0.041 ETH</span>
          </div>
          <div className={classes['card__price--time']}>
            <ClockIcon
              className={classes['card__price--time--icon']}
            ></ClockIcon>
            <span> 3 days left</span>
          </div>
        </div>
        <div className={classes['card__information']}>
          <img src={require('../../assets/image-avatar.png')} alt='creator' />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
