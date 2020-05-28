import {
    ADD_FEATURE,
    REMOVE_FEATURE
} from "../actions/index";

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const addFeatureReducer = (state = initialState, action) => {
    //console.log(state, action);
    //When state is undefiend, setup a default state e,g state = initialState
    switch (action.type) {

        case ADD_FEATURE:
            return {
                ...state, // Expand all of the state ... head down to the data
                car: { //taking the car and all the additional data
                    ...state.car, //grab the entire state from car data
                    features: [ // next step is target feature
                        ...state.car.features, // 
                       action.payload // this will add the assigned parameter from whatever action was taken
                    ]
                }
                
            };
        case REMOVE_FEATURE:
            return {
                ...state,// Expand all of the state ... head down to the data
                car: {//taking the car and all the additional data
                    ...state.car,//grab the entire state from car data
                    features: state.car.features.filter(item => item !== action.payload) // filter a new array from paylaod action
                }
                
            };
        default:
            return state;
    }
};
