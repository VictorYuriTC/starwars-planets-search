import React from 'react';
import PropTypes from 'prop-types';

function PlanetTableRowCard({ planet }) {
  return (
    <tr>
      <td>
        { planet.name }
      </td>
      <td>
        { planet.rotation_period }
      </td>
      <td>
        { planet.orbital_period }
      </td>
      <td>
        { planet.diameter }
      </td>
      <td>
        { planet.climate }
      </td>
      <td>
        { planet.gravity }
      </td>
      <td>
        { planet.terrain }
      </td>
      <td>
        { planet.surface_water }
      </td>
      <td>
        { planet.population }
      </td>
      <td>
        <a href={ planet.films }>{ planet.films }</a>
      </td>
      <td>
        { planet.created }
      </td>
      <td>
        { planet.edited }
      </td>
      <td>
        <a href={ planet.url }>{ planet.url }</a>
      </td>
    </tr>
  );
}

PlanetTableRowCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }),
}.isRequired;

export default PlanetTableRowCard;
