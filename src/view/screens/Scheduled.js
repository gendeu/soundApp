import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

export default class Scheduled extends React.Component {
  render() {

    const { id, name, Status, promolist, about } = this.props.route.params;

    return (  
      
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.dark,
        }}>
          
        <View style={styleScheduled.header}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Package Detail</Text>
          <Icon style={{color: 'white'}} name="favorite" size={28} />
        </View>
        {/* <View style={styleScheduled.imageContainer}>
          <Image source={img} style={{resizeMode: 'contain', flex: 1}} />
        </View> */}
        <View style={styleScheduled.ScheduledsContainer}>
          
          <View
            style={{
              marginLeft: 20,
              // marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: 250, paddingTop: 10}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', color: '#e4bd8f'}}>{name}</Text>
            </View>
            <View style={styleScheduled.StatusTag}>
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
              marginTop: 3,
              marginBottom: 10,
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={styleScheduled.line} />
            {/* <Text style={{fontSize: 18, fontWeight: 'bold', color: '#5d3a37'}}>Best choice &nbsp; 
             */}
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
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white',}}>{promolist}</Text>
            <Text
              style={{
                // backgroundColor: 'gray',
                color: 'black',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {about}
            </Text>
          </View>
          <View style={styleScheduled.comBot}>
            <View style={styleScheduled.Btn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Show Comments
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
   
    );
  }
}


const styleScheduled = StyleSheet.create({
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
  ScheduledsContainer: {
    flex: .90,
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
    width: 200,
    height: 50,
    marginRight: 10,
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
    width: 130,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

// export default Scheduled;
