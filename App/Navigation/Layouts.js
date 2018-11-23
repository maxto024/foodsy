import { AppState } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Images } from '../Themes'
// import { StorybookUIRoot } from '../../storybook'
import createStore from '../Redux'
import Colors from '../Themes/Colors'
import '../Config/ReactotronConfig'

import RestaurantsScreen from '../Containers/RestaurantsScreen'

// ignite-jhipster-navigation-import-needle

export const RESTAURANTS_SCREEN = 'nav.RestaurantsScreen'
// ignite-jhipster-navigation-declaration-needle

const store = createStore()

let lastAppState = 'active'
function handleAppStateChange (nextAppState) {
  if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {
  }
  lastAppState = nextAppState
}

// function refreshAccount() {
//   store.dispatch(AccountActions.accountRequest());
// }

export function registerScreensAndStartApp () {
  Navigation.registerComponentWithRedux(RESTAURANTS_SCREEN, () => RestaurantsScreen, Provider, store)
  // default register
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        topBar: {
          title: {
            color: Colors.snow
          }
        },
        backButton: {
          showTitle: false,
          icon: Images.chevronLeftIcon,
          color: Colors.snow,
          iconColor: Colors.snow
        },
        background: {
          color: Colors.primary
        }
      },
      sideMenu: {
        left: {
          enabled: false
        }
      }
    })

    Navigation.setRoot(goToRestaurants)
    AppState.addEventListener('change', handleAppStateChange)		// handle app state and deep links
		// Linking.addEventListener('url', handleOpenURL);
  })
}
export const goToRestaurants = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: RESTAURANTS_SCREEN,
            options: {
              topBar: {
                visible: false,
                drawBehind: true
              }
            }
          }
        }
      ]
    }
  }
}
