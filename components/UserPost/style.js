import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#79869F',
    paddingTop: verticalScale(5),
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: horizontalScale(10),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  post: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(16),
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatButton: {
    marginRight: horizontalScale(27),
    flexDirection: 'row',
  },
  userPostStatIcon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStatText: {
    color: '#79869F',
  },
});

export default style;
