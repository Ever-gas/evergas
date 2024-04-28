import { Switch, TouchableOpacity } from 'react-native';
 

const ToggleSwitch = ({ isEnabled, handleToggleSwitch }) => {  

  return (
    <TouchableOpacity>
      <Switch
        trackColor={{ false: '#E5E6EB', true: '#38c076' }}
        thumbColor={isEnabled ? '#017737' : '#FFFFFF'}
        ios_backgroundColor="#E5E6EB"
        onValueChange={handleToggleSwitch}
        value={isEnabled}
        // style={{ marginVertical: -8 }}
        // style={{ transform: [{ scaleX: 0.8 }, { scaleY: 1 }] }}
      />
    </TouchableOpacity>
  );
};


export default ToggleSwitch;
