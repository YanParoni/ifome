import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function IngredientCard({ name, index, idItem, comidasOuBebidas }) {
  const typeMoD = comidasOuBebidas === 'comidas'
    ? `https://www.themealdb.com/images/ingredients/${name}-Small.png`
    : `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
  return (
    <Link
      to={ `/${comidasOuBebidas}/${idItem}` }
      data-testid={ `${index}-ingredient-card` }
    >
      <img
        src={ typeMoD }
        alt={ name }
        data-testid={ `${index}-card-img` }
        width="30px"
      />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </Link>
  );
}

export default IngredientCard;

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  idItem: PropTypes.string.isRequired,
  comidasOuBebidas: PropTypes.string.isRequired,
};
