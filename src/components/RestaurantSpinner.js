import React from 'react';
import Constants from '../Constants';

export default class RestaurantSpinner extends React.Component {
    constructor(props) {
        console.log("Init component");
        super(props);
        this.state = { 
            restaurantData: null,
            filters: null
        }
        this.getRestaurants();
    }

    getRestaurants = () => {
        console.log("Entering getRestaurants");
        var restaurantJSON = localStorage.getItem(Constants.RESTAURANT_DATA_KEY);

        console.log(restaurantJSON);

        if (restaurantJSON == null) {
            console.log(Constants.RESTAURANT_DATA_KEY + " is empty");
            restaurantJSON = {};
            localStorage.setItem(Constants.RESTAURANT_DATA_KEY, JSON.stringify(restaurantJSON));
        } 
        else 
        {
            console.log(Constants.RESTAURANT_DATA_KEY + " is not empty");
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