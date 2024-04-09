import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import SplashScreen from '../SplashScreen/SplashScreen'
import Onboarding from '../Onboarding/Onboarding'

const Welcome = ({ navigation }) => {

    const [showOnBoarding, setShowOnBoarding] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowOnBoarding(true)
        }, 2000)
    }, [])

    return (
        <View>
            {!showOnBoarding ? <SplashScreen /> :
                <Onboarding navigation={navigation} />}
        </View>
    )
}

export default Welcome