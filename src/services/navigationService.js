import { createNavigationContainerRef } from '@react-navigation/native';
// import { StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const replace = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.replace(name, params);
  }
};

/* const push = (...args) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}; */