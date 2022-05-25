const initialState = {
    searchJob: [
        {
            title: 'Fashion Designer',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'
        },
        {
            title: 'Marketing Expert',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'
        },
        {
            title: 'Shoemaker And Designer',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'
        },
        {
            title: 'Bar Owner',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'
        },
        {
            title: 'Video Editor',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'
        }
    ],
    gig: null,
    filterBy: {
        txt: '',
        priceMin: 0,
        priceMax: Infinity,
        deliveryDate: 3,
        category: ''
    },
    gigs: []
}

export function jobsReducer(state = initialState, action) {
    let gigs

    switch (action.type) {
        case 'SET_JOB_NAME':
            return { ...state, searchJob: action.jobs }
        case 'SET_GIGS':
            return { ...state, gigs: action.gigs }
        case 'ADD_GIG':
            gigs = [action.gig, ...state.gigs]
            return { ...state, gigs }
        case 'REMOVE_GIG':
            gigs = state.gigs.filter(gig => gig._id !== action.gigId)
            return { ...state, gigs }
        case 'UPDATE_GIG':
            gigs = state.gigs.map(currgig =>
                (currgig._id === action.gig._id) ? action.gig : currgig)
            return { ...state, gigs }
        case 'SET_FILTERBY':
            return { ...state, filterBy: action.filterBy }
        case 'GET_BY_ID':
            return { ...state, gig: action.gig }
        case 'GET_SELECTED':
            return { ...state, selectedOption: action.selectedOption }
        default:
            return state
    }
}