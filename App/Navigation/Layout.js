import { AppState, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Images } from '../Themes';
// import { StorybookUIRoot } from '../../storybook'
import createStore from '../Redux';
import Colors from '../Themes/Colors';
import '../Config/ReactotronConfig';


import LaunchScreen from '../Containers/LaunchScreen'

// ignite-jhipster-navigation-import-needle


export const LAUNCH_SCREEN = 'nav.LaunchScreen';
// ignite-jhipster-navigation-declaration-needle

const store = createStore();

let lastAppState = 'active';
function handleAppStateChange(nextAppState) {
  if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {

  }
  lastAppState = nextAppState;
}

// function refreshAccount() {
//   store.dispatch(AccountActions.accountRequest());
// }


export function registerScreensAndStartApp() {
  Navigation.registerComponentWithRedux(LAUNCH_SCREEN, () => LaunchScreen, Provider, store);


	// ignite-jhipster-navigation-registration-needle

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        topBar: {
          title: {
            color: Colors.snow,
          },
        },
        backButton: {
          showTitle: false,
          icon: Images.chevronLeftIcon,
          color: Colors.snow,
          iconColor: Colors.snow,
        },
        background: {
          color: Colors.primary,
        },
      },
      sideMenu: {
        left: {
          enabled: false,
        },
      },
    });

    Navigation.setRoot(Home);

		// handle app state and deep links
    AppState.addEventListener('change', handleAppStateChange);
    //Linking.addEventListener('url', handleOpenURL);
  });
}


export const Home = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: LAUNCH_SCREEN,
            options: {
              topBar: {
                visible: false,
                drawBehind: true,
              },
            },
          },
        },
      ],
    },
  },
};

