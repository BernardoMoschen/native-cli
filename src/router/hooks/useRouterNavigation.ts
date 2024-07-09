import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

// TO-DO type route names

export const useRouterNavigation = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return navigation;
};
