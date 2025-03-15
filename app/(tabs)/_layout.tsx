import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, title, icon}: {focused: boolean, title: string, icon: any}

)=>{
   if(focused){
    return (
        <>
        <View className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 items-center justify-center mt-2 rounded-full overflow-hidden'>
        <Image source={icon} tintColor="tomato" className='size-5'/>
        <Text className=' text-white text-base font-semibold mx-2'>{title}</Text>
        </View>
        </>
    )
   }return (
    <>
    <View className='size-full justify-center items-center mt-2'>
    <Image source={icon} tintColor="#fff" className='size-5'/>
    {/* <Text className='text-white text-[10px] font-semibold mx-2'>{title}</Text> */}
    </View>
    </>
   )
}


const _Layout = () => {

 
    
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle:{
            backgroundColor: "#000",
            borderRadius:60,
            marginBottom:60,
            marginHorizontal: 20,
            overflow: "hidden",

            height: 50,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10

        }
    }}
    >
        <Tabs.Screen name="index" options={{ headerShown: false, title: "Home", tabBarIcon:({focused}) => <TabIcon focused={focused} title='Home' icon={icons.home} /> }} />
        <Tabs.Screen name="discover" options={{ title: "Discover", tabBarIcon:({focused}) => <TabIcon focused={focused} title='Discover' icon={icons.search} /> }} />
        <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon:({focused}) => <TabIcon focused={focused} title='Saved' icon={icons.saved} /> }} />
        <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon:({focused}) => <TabIcon focused={focused} title='Profile' icon={icons.profile} /> }} />
    </Tabs>
  )
}

export default _Layout