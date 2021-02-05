
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';


import DocumentPicker from 'react-native-document-picker';

const AddImage = () => {
  const [singleFile, setSingleFile] = useState('');

  const selectOneFile = async () => {

    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],

      });
 
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);

      setSingleFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {

        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
}