import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Tasks from './src/screens/Tasks';
import Account from "./src/screens/Account";
import About from "./src/screens/About";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{backgroundColor:'#F60'}
                
            
            }}
            >

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} options={{
                    title: 'Cadastro de Usuário'
                }} />

                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
      <Tab.Navigator
      screenOptions={{
        //cor icones ativos
        tabBarActiveTintColor: '#FFF',
        //cor icones inativos
        tabBarInactiveTintColor: '#F60',
        tabBarActiveBackgroundColor: '#F60',
        // formatar cor de fundo da tab navigator 
        tabBarStyle: {backgroundColor: '#070A52'},
        //alinhar texto no centro
        headerTitleAlign: 'center',
        //alterar cor do texto no header
        headerTintColor: '#FFF', 
        //alterar cor do background do header
        headerStyle: {backgroundColor: '#F60'}

      }}
      >
        <Tab.Screen name="Tasks" component={Tasks} options={{
            title:'Tarefas',
            tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="home" color={color} size={32}/>)
            
        }} />
        <Tab.Screen name="Account" component={Account} options={{
            title:'Dados do usuário',
            tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="account" color={color} size={32}/>)
            
        }} />
        <Tab.Screen name="About" component={About} options={{
            title:'Sobre o aplicativo',
            tabBarIcon: ({color}) => 
                (<MaterialCommunityIcons name="information-outline" color={color} size={32}/>)
            
        }} />
      </Tab.Navigator>
    );
  }