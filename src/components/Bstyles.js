import { StyleSheet } from "react-native";
import { COLORS } from "../components/theme";

const styles = StyleSheet.create({
    containers: {
    borderRadius: 60,
    borderColor: 'black',
    paddingHorizontal: 15, 
    paddingVertical: 10,
    marginLeft: "55%",
    marginBottom: 10,
    backgroundColor: '#E0E0E0'
  },
  sec_containers:{
    borderRadius: 60,
    borderColor: 'black',
    paddingHorizontal: 15, 
    marginBottom: 10,
    marginLeft:5,
    paddingVertical: 10,
    marginRight: '10%',
    backgroundColor: '#E0E0E0'
    
  },
  tabRow: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-around',
        padding: 10,
        
    },
    tabText:{
        color:COLORS.white,
        fontSize:12,
        textAlign:"center",
        marginTop:4
        
    },
    tabIcon: {
        padding: 10,
        borderRadius: 50,
        alignItems:"center"
    }
});

export default styles;
