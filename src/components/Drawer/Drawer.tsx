import * as React from 'react';
import {Drawer as PaperDrawer, Menu as PaperMenu} from 'react-native-paper';
import {View} from 'react-native';
import {Greetings} from '../../pages/Home/Greetings/Greetings';

type DrawerItem = {
  name: string;
  icon?: string;
};

const drawerMapping: Array<DrawerItem> = [
  {name: 'Profile', icon: 'account-outline'},
  {name: 'Home', icon: 'home'},
  {name: 'Services', icon: 'poll'},
  {name: 'Billing', icon: 'wallet'},
  {name: 'Support', icon: 'frequently-asked-questions'},
];

export const Drawer = () => {
  const [active, setActive] = React.useState('');

  return (
    // <PaperDrawer.Section title="Some title">
    //   {drawerMapping.map(({name}, index) => (
    //     <PaperDrawer.Item
    //           label={name}

    //       active={active === index}
    //       onPress={() => setActive('first')}
    //     />
    //   ))}
    // </PaperDrawer.Section>
    <View style={{flex: 0.7, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, transform: 'scale(0.5)'}}>
        <Greetings />
      </View>
      <View style={{flex: 1, backgroundColor: '#E5E7EB'}}>
        {drawerMapping.map(({name, icon}, index) => (
          <PaperMenu.Item title={name} leadingIcon={icon} onPress={() => {}} />
        ))}
      </View>
    </View>
  );
};
