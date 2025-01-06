import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import bhajans from '../../bhajans.json';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const BhajanLyrics = () => {
    const router = useRouter();
    const { selectedBhajanID }: { selectedBhajanID: any} = useLocalSearchParams();
    const bhajan = bhajans.find((r) => r.id == selectedBhajanID);

    const [language, setLanguage] = useState('english');
    const [fontSize, setFontSize] = useState(16);

    const handleBackClick = () => {
        router.push('/AllBhajans')
    };

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
    };

    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => (prevSize > 12 ? prevSize - 2 : prevSize));
    };

    return (
        <SafeAreaView style={styles.bigContainer}>
            <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {bhajan ? (
                    <>
                        <Text style={styles.title}>
                            {language === 'english' ? bhajan.name : bhajan.gname}
                        </Text>

                        <View style={styles.languageButtons}>
                            <TouchableOpacity
                                style={[styles.languageButton, language === 'english' && styles.activeButton]}
                                onPress={() => toggleLanguage('english')}
                            >
                                <Text style={styles.languageButtonText}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.languageButton, language === 'gujrati' && styles.activeButton]}
                                onPress={() => toggleLanguage('gujrati')}
                            >
                                <Text style={styles.languageButtonText}>Gujrati</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.fontSizeButton} onPress={increaseFontSize}>
                                <Text style={styles.fontSizeButtonText}>+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.fontSizeButton} onPress={decreaseFontSize}>
                                <Text style={styles.fontSizeButtonText}>-</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.section}>
                            <Text style={[styles.lyrics, { fontSize }]}>{bhajan[language]}</Text>
                        </View>
                    </>
                ) : (
                    <Text style={styles.error}>Bhajan not found.</Text>
                )}
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackClick}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        backgroundColor:'orange',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'orange',
        padding: 20,
    },
    languageButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    languageButton: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'orange',
        alignItems: 'center',
    },
    languageButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange',
    },
    activeButton: {
        backgroundColor: 'white',
    },
    section: {
        padding: 15,
    },
    lyrics: {
        fontSize: 16,
        lineHeight: 24,
    },
    error: {
        fontSize: 16,
        color: 'red',
    },
    footer: {
        backgroundColor: 'orange',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    backButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 14,
        color: 'orange',
    },
    fontSizeControls: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    fontSizeButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    fontSizeButtonText: {
        fontSize: 20,
        color: 'white',
    },
});

export default BhajanLyrics;
