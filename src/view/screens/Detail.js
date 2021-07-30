import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const height = Dimensions.get('window').height;

export default class Detail extends React.Component {
  render() {

    const { id, name, Status, img, like, about } = this.props.route.params;

    return (  
      
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.dark,
        }}>
          
        {/* <View style={styleDetail.header}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Product Detail</Text>
          <Icon style={{color: 'white'}} name="favorite" size={28} />
        </View> */}
        <View style={styleDetail.imageContainer}>
          <Image source={img} style={{resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={styleDetail.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>

            </View>
          <View
            style={{
              marginLeft: 20,
              // marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: 250}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', color: '#e4bd8f'}}>{name}</Text>
            </View>
            <View style={styleDetail.StatusTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {Status}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              paddingTop: 10,
              // marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'left',
              alignItems: 'center',
            }}>
            <View style={styleDetail.line} />
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#5d3a37'}}>Ratings &nbsp; 
                <Icon
                  name="star"
                  size={18}
                  color={"yellow"}
                />
                <Icon
                  name="star"
                  size={18}
                  color={"yellow"}
                />
                <Icon
                  name="star"
                  size={18}
                  color={"yellow"}
                />
                <Icon
                  name="star"
                  size={18}
                  color={"yellow"}
                />
                <Icon
                  name="star"
                  size={18}
                  color={"white"}
                />
              </Text>
            </View>
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text> */}
            <ScrollView style={{ height: height / 4 - 20, }} >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {about}
            </Text>
            </ScrollView>
          </View>
          <View style={styleDetail.comBot}>
            <View style={[styleDetail.Btn, {marginTop: 12}]}>
              <Text
                style={{color: COLORS.white, fontSize: 12, fontWeight: 'bold'}}>
                Show Comments
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
   
    );
  }
}


const styleDetail = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
    backgroundColor: "#828282",
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: '#5d3a37',
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  Btn: {
    bottom: 0,
    padding: 15,
    margin: 10,
    backgroundColor: '#e4bd8f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  comBot: {
    alignItems: 'flex-end',
    bottom: 0
  },
  StatusTag: {
    backgroundColor: '#667e99',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

// export default Detail;
