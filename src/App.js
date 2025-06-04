import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState} from 'react';
import BookItem from './components/BookItem';
import booksData from './data/books.json'

function App() {

  const [searchText, setSearchText] =useState(''); // arama çubuğu için state 


     // Arama filtresi: title veya author içinde aranan metin varsa o kitaplar gösterilecek
    const filteredBooks = booksData.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) || 
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );


  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Books App</Text>


        {/* Arama Kutusu*/}
        <TextInput
        style={styles.input}
        placeholder='Kitap ya da yazar ara...'
        value={searchText}
        onChangeText={setSearchText}
        
        />

        {/* Kitap Listesi */}

        <FlatList
        
        data={filteredBooks}
        keyExtractor={item =>item.id}
        renderItem={({item}) => <BookItem book={item}/>}
        contentContainerStyle={styles.list}
        
        
        />


    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    marginHorizontal: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default App;