import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

// [SYSTEM REQ] You must use an arrow function for the functional component.
const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // Course inventory lists
  // [USER REQ] Display the 8 core, 2 depth of study, and 1 capstone course.
  // [USER REQ] Access the CityU's catalog at https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/.
  const coreCourses = [
    "CS 504 Software Engineering",
    "CS 506 Programming for Computing",
    "CS 519 Cloud Computing Overview",
    "CS 533 Computer Architecture",
    "CS 547 Secure Systems and Programs",
    "CS 622 Discrete Math and Algorithms for Computing",
    "DS 510 Artificial Intelligence for Data Science",
    "DS 620 Machine Learning & Deep Learning"
  ];

  const depthCourses = [
    "CS 624 Full-Stack Development - Mobile App",
    "CS 628 Full-Stack Development - Web App"
  ];

  const capstoneCourse = "CS 687 Computer Science Capstone";

  return (
    // [SYSTEM REQ] You must use the core components at least once - View, Text, ScrollView, Image, TextInput, and StyleSheet.
    // [SYSTEM REQ] Your screen is scrollable.
    <ScrollView style={styles.container}>
      {/* 1. Image Component */}
      <Image 
        // [USER REQ] Find the "icon.png" under the "./assets" directory.
        source={require('../../assets/images/icon.png')} 
        style={styles.image} 
      />

      {/* 2. TextInput Component */}
      <Text>Which course did you like?</Text>
      <TextInput
        // [USER REQ] Enter your favorite course.
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={(text) => setFavoriteCourse(text)}
        style={styles.inputBox}
      />

      {/* 3. Core Requirements View */}
      <View>
        <Text
          style={styles.headerText}
        >
          Core Requirements (24 credits)
        </Text>
        {coreCourses.map((course, index) => (
          <Text key={index}>{course}</Text>
        ))}
      </View>

      {/* 4. Depth of Study View */}
      <View>
        <Text
          style={styles.headerText}
        >
          Depth of Study (6 Credits)
        </Text>
        {depthCourses.map((course, index) => (
          <Text key={index}>{course}</Text>
        ))}
      </View>

      {/* 5. Capstone View */}
      <View>
        <Text
          style={styles.headerText}
        >
          Capstone (3 Credits)
        </Text>
        <Text>{capstoneCourse}</Text>
      </View>
    </ScrollView>
  );
};

// [SYSTEM REQ] By using an internal style, the screen shows some styles.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        backgroundColor: 'yellow'
    },
    inputBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default App;


