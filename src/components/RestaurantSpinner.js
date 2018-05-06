import React from 'react';
import Constants from '../Constants';

export default class ResturantSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            restaurantData: null,
            filters: null
        }
        this.getResturants();
    }

    getResturants = (e) => {
        var restaurantJSON = localStorage.getItem(Constants.RESTAURANT_DATA_KEY);

        if (restaurantJSON == null) {
            restaurantJSON = {};
            localStorage.setItem(Constants.RESTAURANT_DATA_KEY, JSON.stringify(restaurantJSON));
        } 
        else 
        {
            restaurantJSON = JSON.parse(restaurantJSON);
        }
        this.setState({ restaurantData: restaurantJSON });
        return restaurantJSON;
    }

    toRestaurantJSONString = (e) => {
        return JSON.stringify(this.state.restaurantData);
    }

    render() {
        return (
          <div className="RestaurantSpinner">
            <span>{this.toRestaurantJSONString()}</span>
          </div>
        );
      }
}