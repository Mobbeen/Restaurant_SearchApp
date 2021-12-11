import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/SearchScreen';
import resultsScreen from './src/resultDetailScreen';

const navigator = createStackNavigator({

  Search: SearchScreen,
  ResultScreen: resultsScreen,
},
{
  initialRouteName: 'Search' ,
  defaultNavigationOptions: {
    title:'Business Search'
  }
}
);

export default createAppContainer(navigator);