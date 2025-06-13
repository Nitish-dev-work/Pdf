import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet
} from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    objectFit: 'cover',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  }
});

const HtmlToPdf = () => {
  return (
     <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>React PDF Image Example</Text>
        <Image
          style={styles.image}
          src="/vite.svg"
        />
      </View>

      <View style={styles.section}>
        <Text>Another Image Below:</Text>
        <Image
          style={styles.image}
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
        />
      </View>
    </Page>
  </Document>
  )
}

export default HtmlToPdf