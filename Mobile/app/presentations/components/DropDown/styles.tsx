import {Dimensions, StyleSheet} from 'react-native';
import {Theme} from '../../../resources/themes';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 400
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "rgba(247, 248, 255, 1)",
    padding: 16,
    borderRadius: 8,
    borderColor: "rgba(247, 248, 255, 1)",
    borderWidth: 1,
    width: '100%',
    height: 55,
  },
  selectedText: {
    backgroundColor: "rgba(247, 248, 255, 1)",
    color: '#000',
    fontSize: 12,
    fontWeight: 700
  },
  placeholder: {
    fontSize: 12,
    fontWeight: 400
  },
  touchableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  line: {
    width: 1,
    height: 30,
    backgroundColor: "#152C2A",
    marginHorizontal: 10,
  },
  arrowDown: {
    width: 12,
    height: 7,
  },
  modalOverlay: {
    flex: 1,
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: "rgba(21, 44, 42, 1)",
  },
  dropdownContainer: {
    backgroundColor: "rgba(247, 248, 255, 1)",
    borderWidth: 1,
    borderColor: "rgba(247, 248, 255, 1)",
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    width: width - 62,
    maxHeight: 130,
  },
  item: {
    height: 50, // Hauteur de chaque élément
    color: 'black',
  },
});
