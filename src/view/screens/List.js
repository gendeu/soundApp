import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CardFlip from 'react-native-card-flip';
import { Video, AVPlaybackStatus } from 'expo-av';

import Color from '../../consts/colors';
import { C1, C2, C3, C4, C5, C6, C7 }  from '../../consts/data';

const width = Dimensions.get('window').width / 2 - 20;
const height = Dimensions.get('window').height;

export default function List({route, navigation}) {
  const { cag } = route.params;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={stylesList.container}>
      <ScrollView>
      <View style={stylesList.fullWidth}>
      
      {
        // Category 1
        cag == 'C1' ?
          C1.map((C1, index) => 
          <View style={stylesList.item}  key={ index }>
          <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
          <View style={[stylesList.card]}
            
          >
              
            <View
              style={{
                height: 100,
                alignItems: 'center',
              }}>
              <Image
                source={C1.img}
                style={stylesList.image}
              />
              <View style={stylesList.bottomView}></View>

              <View style={stylesList.contentView}>
                <Text style={{fontSize: 22, color: "white"}}>Key of </Text> 
                <Text style={stylesList.textStyle}>
                  {C1.name}
                </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                  <TouchableOpacity style={stylesList.appButtonContainer} 
                    onPress={() => {
                      this['card' + index].flip();
                      this['video' + index].playAsync();
                    }}>
                    <Text style={stylesList.appButtonText}>Play Now</Text>
                  </TouchableOpacity>
                  <View style={stylesList.appButtonContainer2}>
                    <Text style={stylesList.appButtonText2}>
                    <Icon
                    name="bookmark"
                    backgroundColor="#3b5998"
                    // onPress={this.loginWithFacebook}
                    >
                    </Icon>
                    </Text>
                  </View>
                </View>
              </View>

            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              
              <Text
                  style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
              </Text>
              
            </View>
          </View>
          <TouchableOpacity style={[stylesList.card]}
            onPress={() => {
              this['card' + index].flip();
              this['video' + index].pauseAsync();
            }}
          >
              
            <View
              style={{
                height: 100,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/main.jpg')}
                style={stylesList.image}
              />
              <View style={stylesList.bottomView}></View>

              <View style={stylesList.contentView}>
                <Text style={stylesList.textStyle}>
                  {C1.name}
                </Text>
                <Text style={{fontSize: 13, color: "white", textAlign: 'center'}}>
                  {C1.status}
                </Text>
                <Video
                  ref={ (video) => this['video' + index] = video }
                  source={C1.url}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                />

              </View>

            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              
              <Text
                  style={{fontSize: 22, color: "white", fontWeight: 'bold'}}>
              </Text>
              
            </View>
          </TouchableOpacity>
          </CardFlip>
        </View>
        )
        :
           
        console.log('else')

      }
      </View>
      </ScrollView>
    </View>
    
  );
}

const stylesList = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
  item: {
    alignItems: 'center',
    width: '50%',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16, 
    color: 'grey', 
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: Color.dark,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Color.dark,
  },
  card: {
    height: height / 3 - 40, 
    width: width, 
    // backgroundColor: 'gray',
    marginHorizontal: 2,
    borderRadius: 10,
    // padding: 15,
    margin: 8,

  },
  header: {
    backgroundColor: "white",
    height: 100,
    marginTop: 30,
  },
  searchContainer: {
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: "brown",
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Color.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%', 
    height: height / 3 - 20,
    // height: 120, 
    backgroundColor: 'black', 
    opacity: 0.5,
    bottom: 0,
  },
  contentView: {
    width: '100%', 
    height: height / 3 - 20,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold', 
    color: 'white',
    fontSize: 32,
    padding: 10,
    textAlign: 'center'
  },
  image: {
    height: height / 3 - 50, 
    width: width - 10, 
    position: 'absolute', 
    zIndex: 0
  },
  appButtonContainer: {
    zIndex: 2,
    elevation: 8,
    backgroundColor: "#667e99",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonContainer2: {
    zIndex: 2,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 5,
  },
  appButtonText: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonText2: {
    fontSize: 12,
    color: "black",
    padding: 1.7,
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
