import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import bhajans from '../../bhajans.json';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const BhajanLyrics = () => {
    const router = useRouter();
    const { selectedBhajanID }: { selectedBhajanID: any} = useLocalSearchParams();
    const bhajan = bhajans.find((r) => r.id == selectedBhajanID);

    const [language, setLanguage] = useState('english');

    const handleBackClick = () => {
        router.push('/AllBhajans')
    };

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
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
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.lyrics}>{bhajan[language]}</Text>
                        </View>

                        {bhajan.video && (
                            <View style={styles.videoContainer}>
                                <WebView
                                    source={{ uri: bhajan.video}}
                                    style={styles.video}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                />
                            </View>
                        )

                        }
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
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        alignItems: 'center',
    },
    languageButtonText: {
        fontSize: 14,
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
    videoContainer: {
        marginTop: 20,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    video: {
        flex: 1,
    },
    footer: {
        backgroundColor: 'orange',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    backButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 14,
        color: 'orange',
    },
});

export default BhajanLyrics;
