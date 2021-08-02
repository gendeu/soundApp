import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  Linking
} from 'react-native';

import Swiper from 'react-native-swiper';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Video } from 'expo-av';
import FadeInOut from 'react-native-fade-in-out';
// import CardFlip from 'react-native-card-flip';

import { catergories } from '../../consts/data';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Menu extends React.Component {
  state = {
    fadeAnimation: new Animated.Value(0),
    play: true
  };
  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true
    }).start();
  };

  render() {
      
    var categoriesHereP1 = [];
    var categoriesHereP2 = [];
    var categoriesHereP3 = [];

    for(let i = 0; i <= 3; i++){
    
      categoriesHereP1.push(

        <ImageBackground key={ Math.random().toString(36).substr(2, 9) } source={require('../../assets/main.jpg')} style={styles.ImageClassBg} >
        <TouchableOpacity style={styles.categories} key={ Math.random().toString(36).substr(2, 9) } 
          // onPress={ () => this.props.navigation.navigate('List') }
          onPress={() => {
            this.props.navigation.navigate('List', {
              cag: catergories[i].cag,
              name: catergories[i].name
            });
            this.setState({
              play: false
            });
          }}
        >
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: this.state.fadeAnimation
              }
            ]}
          >
          <View>
            
            <Image source={catergories[i].img} style = {styles.ImageClassBg}/>
            
            <View style={{alignItems: 'flex-start', position: 'absolute'}}></View>

          </View>
          
        </Animated.View>
        <View style={styles.bottomView}>
        </View>
        <View style={styles.contentView}>
          <Image source={require('../../assets/crown.png')} style={{position: 'relative', height: 30, width: 60}} />
          <Text style={styles.textStyle}>
            {catergories[i].name}
          </Text>
          <Image source={require('../../assets/starso.png')} style={{position: 'relative', height: 20, width: 60}} />
        </View>
        {/* </ImageBackground> */}
        </TouchableOpacity>
      </ImageBackground>
        
      )
    };
    
    for(let i = 4; i <= 6; i++){
    
      if (i == 4) {
              categoriesHereP2.push(

                  <ImageBackground key={ Math.random().toString(36).substr(2, 9) } source={require('../../assets/main.jpg')} style={styles.ImageClassBgWide} >
                  <TouchableOpacity style={styles.categoriesWide} key={ Math.random().toString(36).substr(2, 9) }
                    onPress={() => Linking.openURL('https://www.facebook.com/groups/940675912663944')}
                  >
                    <Animated.View
                      style={[
                        styles.fadingContainer,
                        {
                          opacity: this.state.fadeAnimation
                        }
                      ]}
                    >
                    <View>
                      
                    <Video
                      source={catergories[i].vid}
                      rate={1.0}
                      volume={1.0}
                      isMuted={false}
                      resizeMode="contain"
                      shouldPlay={this.state.play}
                      // useNativeControls
                      isLooping
                      style={styles.ImageClassBgWide}
                    />
                      
                      <View style={{alignItems: 'flex-start', position: 'absolute'}}>
                      </View>
                    </View>
                      
                    </Animated.View>
                    <View style={styles.bottomView}>
                    </View>
                    <View style={styles.contentView}>
                      <Image source={require('../../assets/crown.png')} style={{position: 'relative', height: 30, width: 60}} />
                      <Text style={styles.textStyle}>
                        {catergories[i].name}
                      </Text>
                      <Image source={require('../../assets/starso.png')} style={{position: 'relative', height: 20, width: 60}} />
                    </View>
                    {/* </ImageBackground> */}
                    </TouchableOpacity>
                  </ImageBackground> 
                  
            )

      } else {
        
        categoriesHereP2.push(

          <ImageBackground key={ Math.random().toString(36).substr(2, 9) } source={require('../../assets/main.jpg')} style={styles.ImageClassBg} >
          <TouchableOpacity style={styles.categories} key={ Math.random().toString(36).substr(2, 9) } 
            onPress={() => {
              this.props.navigation.navigate('List', {
                cag: catergories[i].cag,
              });
              this.setState({
                play: false
              });
            }}
          >
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  opacity: this.state.fadeAnimation
                }
              ]}
            >
            <View>
              
              <Image source={catergories[i].img} style = {styles.ImageClassBg}/>
              
              <View style={{alignItems: 'flex-start', position: 'absolute'}}>
              </View>
            </View>
              
            </Animated.View>
            <View style={styles.bottomView}>
            </View>
            <View style={styles.contentView}>
              <Image source={require('../../assets/crown.png')} style={{position: 'relative', height: 30, width: 60}} />
              <Text style={styles.textStyle}>
                {catergories[i].name}
              </Text>
              <Image source={require('../../assets/starso.png')} style={{position: 'relative', height: 20, width: 60}} />
            </View>
            {/* </ImageBackground> */}
            </TouchableOpacity>
          </ImageBackground> 
    )
      }

    };
 
    categoriesHereP3.push(
      
      <ImageBackground key={ Math.random().toString(36).substr(2, 9) } source={require('../../assets/about-main.jpg')} style={styles.ImageClassBgFull} >
    
      </ImageBackground> 
  )

    return (
   
      <Swiper style={styles.wrapper} showsButtons={true} dotColor="#000" activeDotColor="#667e99"
              nextButton={<View style={styles.nextprevbutton}><Text style={{fontSize: 30}}>›</Text></View>} 
              prevButton={<View style={styles.nextprevbutton}><Text style={{fontSize: 30}}>‹</Text></View>}
      >
        
        <View style={styles.slide1}>
            <View style={styles.categoryContainer}>

              <FadeInOut>
                <Image
                  source={require('../../assets/menu.png')} 
                  style={styles.ImageWelcome} >
                </Image>
              </FadeInOut>
              
                <View style={{
                  height: 0, 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/main.jpg')} style={{width, height}}/>
                </View>
              { categoriesHereP1 }
          </View>
        </View>

        <View style={styles.slide2}>
          <View style={styles.categoryContainer}>
                <View style={{
                  height: 1, 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/main.jpg')} style={{width, height}}/>
                </View>
              { categoriesHereP2 }
          </View>
        </View>

        
        <View style={styles.slide3}>
          <View style={styles.categoryContainer}>
                <View style={{
                  height: 1, 
                  backgroundColor: 'black',
                  }} 
                >
                  <Image source={require('../../assets/main.jpg')} style={{width, height}}/>
                </View>
              { categoriesHereP3 }
          </View>
        </View>

      </Swiper>
      
    )
  }
}

// AppRegistry.registerComponent('sound', () => SwiperComponent)


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  categoryContainer: {  
    height: '100%', 
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {  
    // width: width / 2 - 10, 
    width: width / 2 - 3, 
    height: height / 2 - 33, 
    margin: 3,
  },
  ImageClass:
  {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // width: width / 2 - 10, 
    width: width / 2 - 3, 
    height: height / 2 - 33, 
  },
  ImageClassBg:
  {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // width: width / 2 - 10, 
    width: width / 2 - 3, 
    height: height / 2 - 33, 
  },
  categoriesWide: {  
    width: width - 10, 
    height: height / 2 - 33, 
    margin: 3,
  },
  ImageClassBgWide:
  {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width - 10, 
    height: height / 2 - 33, 
  },
  ImageClassBgFull:
  {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width, 
    height: height - 90, 
  },
  ImageWelcome:
  {
    zIndex: 1, 
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width, 
    height: height, 
  },
  bottomView: {
    width: '100%', 
    // height: height / 2 - 33, 
    // height: 120,
    height: height / 6, 
    backgroundColor: 'black', 
    position: 'absolute',
    opacity: 0.6,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    width: '100%', 
    height: height / 6,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold', 
    color: 'white',
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  },
  nextprevbutton: {
    backgroundColor: '#667e99', 
    // backgroundColor: 'white',
    opacity: 0.6,
    width: 40,
    // height: 40,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
