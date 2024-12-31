import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import bhajans from '../../bhajans.json';
import { useLocalSearchParams, useRouter } from 'expo-router';

const BhajanLyrics = () => {
    const router = useRouter();
    const { selectedBhajanID }: { selectedBhajanID: any} = useLocalSearchParams();
    const bhajan = bhajans.find((r) => r.id == selectedBhajanID);

    const handleBackClick = () => {
        router.push('/AllBhajans')
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {bhajan ? (
                    <>
                        <Text style={styles.title}>{bhajan?.name}</Text>
                        <View style={styles.section}>
                            <Text style={styles.lyrics}>{bhajan.lyrics}</Text>
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
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
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
