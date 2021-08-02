import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  // Animated,
  LogBox
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CardFlip from 'react-native-card-flip';
// import AnimatedEllipsis from 'react-native-animated-ellipsis';
import Color from '../../consts/colors';
import { C1, C2, C3, C4, C5, C6, C7 }  from '../../consts/data';
const width = Dimensions.get('window').width / 2 - 20;
const height = Dimensions.get('window').height;


export default class List extends React.Component {
  
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  render() {

    const { cag } = this.props.route.params;
    const { navigate } = this.props.navigation; 
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
                    {/* <AnimatedEllipsis numberOfDots={5}
                                      minOpacity={0.4}
                                      animationDelay={200}
                                      style={{
                                        color: 'white',
                                        fontSize: 30,
                                        letterSpacing: -15,
                                      }}

                                     
                    /> */}
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
            
          // Category 2 
          cag == 'C2' ?
            C2.map((C2, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C2.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C2.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C2.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C2.status}
                  </Text>
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

          // Category 3
          cag == 'C3' ?
            C3.map((C3, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C3.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C3.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C3.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C3.status}
                  </Text>
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

          // Category 4
          cag == 'C4' ?
            C4.map((C4, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C4.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C4.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C4.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C4.status}
                  </Text>
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

          // Category 5
          cag == 'C5' ?
            C5.map((C5, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                setTimeout(function(){
                  navigate('Scheduled', {
                    id: C5.id,
                    name: C5.name,
                    status: C5.status,
                    like: C5.like,
                    promolist : C5.promolist,
                    about: C5.about,
                  });
                }, 500);
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C5.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C5.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C5.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C5.status}
                  </Text>
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


          // Category 6
          cag == 'C6' ?
            C6.map((C6, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C6.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C6.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C6.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C6.status}
                  </Text>
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

          
          // Category 7
          cag == 'C7' ?
            C7.map((C7, index) => 
            <View style={stylesList.item}  key={ index }>
            <CardFlip style={stylesList.card}  ref={ (card) => this['card' + index] = card }>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
                setTimeout(function(){
                  navigate('Scheduled', {
                    id: C7.id,
                    name: C7.name,
                    status: C7.status,
                    like: C7.like,
                    promolist : C7.promolist,
                    about: C7.about,
                  });
                }, 500);
              }}
            >
              
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={C7.img}
                  style={stylesList.image}
                />
                <View style={stylesList.bottomView}></View>

                <View style={stylesList.contentView}>
                  <Text style={stylesList.textStyle}>
                    {C7.name}
                  </Text>
                  <View style={stylesList.appButtonContainer}>
                    <Text style={stylesList.appButtonText}>View Detials</Text>
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
            </TouchableOpacity>
            <TouchableOpacity style={[stylesList.card]}
              onPress={() => {
                this['card' + index].flip();
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
                    {C7.name}
                  </Text>
                  <Text style={{fontSize: 13, color: "white", }}>
                    {C7.status}
                  </Text>
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
