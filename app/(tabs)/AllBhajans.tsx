import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import bhajans from '../../bhajans.json';
import { SearchBar } from 'react-native-screens';

const { width } = Dimensions.get('window');

const AllBhajans = () => {
    const router = useRouter();
    const [selectedBhajan, setSelectedBhajan]: any = useState(null);
    const [language, setLanguage] = useState('english');
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleBhajanClick = async (bhajan: any) => {
        const bhajanId = String(bhajan.id);
        setSelectedBhajan(bhajan);
        router.push(`/BhajanLyrics?selectedBhajanID=${bhajanId}&language=${language}`);
    };

    const handleBackClick = () => {
        router.push('/Home')
    };

    const toggleLanguage = (lang: string) => {
        setLanguage(lang);
    };

    const filteredBhajans = bhajans.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.gname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const normalizeFontSize = (size) => {
        const scale = width/375;
        const newSize = size * scale;
        return Math.round(newSize);
    }

    return (
        <SafeAreaView style={styles.bigContainer}>
            <View style={styles.container}>
            <View>
                <Text style={styles.title}>All Bhajans</Text>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for a bhajan"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

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
            </View>
                <FlatList
                    data={filteredBhajans}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.bhajanItem}
                            onPress={() => handleBhajanClick(item)}
                        >
                            <Text style={styles.bhajanName}>
                                {language === 'english' ? item.name : item.gname}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackClick}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        backgroundColor: 'orange',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBar: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    bhajanListContainer: {
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
    bhajanItem: {
        padding: 15,
        borderBottomWidth: 1,
    },
    bhajanName: {
        fontSize: 18,
        color: 'black',
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
});

export default AllBhajans;
