import React from 'react';
import styles from './Favorites.module.css';
import { useFavoritesItemsStore } from '../../store/shoppingStore';
import ProductItem from '../../components/productitem/ProductItem';
import SectionMarker from '../../components/sectionmarker/SectionMarker';
import { productsList } from '../../data/data';

export default function Favorites() {

  const { favoritesItems } = useFavoritesItemsStore();
  // console.log(favoritesItems);

  const favoriteCategories = [...new Set(favoritesItems.map((item) => item.category))];
  // console.log(favoriteCategories);

  const relatedCategory = productsList.filter((category) => favoriteCategories.includes(category.category));
  // console.log(relatedCategory);

  return (
    <div className={styles.favorites}>
      <h2 hidden>Избранное</h2>
      <div className={styles.favoritesList}>
          {favoritesItems.map((favorite) => (
              <ProductItem key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              image={favorite.image}
              price={favorite.price}
              oldPrice={favorite.oldPrice}
              reviewsCount={favorite.reviewsCount}
              rating={favorite.rating}
              style={{'display': 'block'}}
            />
          ))}
      </div>
      <SectionMarker title="Just For You" style={{'margin': '88px 0 68px'}}/>
      <div className={styles.favoritesRelatedItems}>
          {relatedCategory.map((product) => (
            <ProductItem key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            oldPrice={product.oldPrice}
            reviewsCount={product.reviewsCount}
            rating={product.rating}
            />
          ))}
      </div>
    </div>
  )
}


