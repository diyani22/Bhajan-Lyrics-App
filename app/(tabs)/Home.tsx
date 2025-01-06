import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const HomePage = () => {
    const router = useRouter();

    const handleAllBhajansClick = async() => {
        router.push('/AllBhajans');
    }

    return (
        <SafeAreaView style={styles.bigContainer}>
            <View style={styles.container}>
            {/* Top Section (Orange) */}
            <View style={styles.topSection}>
                <Text style={styles.title}>Bhajan Book</Text>
            </View>

            {/* Middle Section with Orange Top and White Bottom */}
            <View style={styles.middleSection}>
                {/* Orange Top Half */}
                <View style={styles.orangeTop}></View>

                <View style={styles.goldLine}></View>

                {/* White Bottom Half */}
                <View style={styles.whiteBottom}></View>

                {/* Circle Container */}
                <View style={styles.circleContainer}>
                    <Image
                        source={require('../../assets/shrinathaji.jpg')} // Correct path to your image
                        style={styles.logo}
                    />
                </View>
            </View>

            {/* Bottom Section with Button */}
            <View style={styles.bottomSection}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAllBhajansClick}
                >
                    <Text style={styles.buttonText}>   All Bhajans   </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAllBhajansClick}
                >
                    <Text style={styles.buttonText}>Category One</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAllBhajansClick}
                >
                    <Text style={styles.buttonText}>Cateogry Two</Text>
                </TouchableOpacity>

            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Bhajan Book</Text>
            </View>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        backgroundColor: 'orange',
    },
    container: {
        flex: 1,
    },
    topSection: {
        height: '10%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleSection: {
        height: 150,
        position: 'relative',
    },
    orangeTop: {
        flex: 1,
        backgroundColor: 'orange',
    },
    goldLine: {
        height: 5,
        backgroundColor: 'gold',
        width: '100%',
    },
    whiteBottom: {
        flex: 1,
        backgroundColor: 'white',
    },
    circleContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'gold',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -75,
        marginTop: -75, 
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 75,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    bottomSection: {
        flex: 1, 
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: 'orange',
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    footerText: {
        fontSize: 14,
        color: 'white',
    },
});

export default HomePage;
