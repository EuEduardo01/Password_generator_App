import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from './screens/Home'
import { Passwords } from './screens/Passwords'

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown:false
                }}
            />

            <Tab.Screen
                name='Password'
                component={Passwords}
                options={{
                    headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}