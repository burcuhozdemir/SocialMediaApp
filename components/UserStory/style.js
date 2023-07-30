import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    color: '#022150',
    lineHeight: scaleFontSize(17),
    marginTop: verticalScale(8),
  },
});

export default style;
