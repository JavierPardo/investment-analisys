import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useAnalisys } from "../hooks";

const Title = styled.Text`
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  font-size: ${(props)=>props.size*10};
`;

const HorizontalView = styled.View({
  flexDirection: "row",
  alignContent: "space-around",
  width: "100%",
  justifyContent: "space-around",
});

const Button = styled.TouchableOpacity`
  background: ${(props) => (props.isPressed ? "white" : props.color)};
  border: 2px ${(props) => props.color};
  padding: 5px 20px;
  border-radius: 5px;
`;

const TextInput=styled.TextInput({
  background:"#ccc",
  borderWidth:1,
  borderColor:'#ddd',
  borderRadius:5,
  padding:5,
  width:'90%'
})

export function AnalisysView() {
  const { operationTypes, operationType,
    onOperationTypeChange, onParameterChanged,parameters,
  stopLossPrice, takeProfitPrice } = useAnalisys();
  return (
    <View>
      <Title size={4}>Analisys</Title>
      <HorizontalView>
        <Button color={"#F6465D"} onPress={onOperationTypeChange.bind(null,"SHORT")} 
        isPressed={operationType==="SHORT"}><Text>SHORT</Text></Button>
        <Button color={"#0ECB81"} onPress={onOperationTypeChange.bind(null,"LONG")} 
        isPressed={operationType==="LONG"}><Text>LONG</Text></Button>
      </HorizontalView>
        <Text>Asset</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"asset")} value={parameters.asset} />
        <Text>Fiat</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"pair")} value={parameters.pair} />
        <Text>Amount risk</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"riskAmount")} value={parameters.riskAmount} />
        <Text>Entry Price</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"entryPrice")} value={parameters.entryPrice} />
        <Text>Leverage</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"leverage")} value={parameters.leverage} />
        <Text>Stop Loss</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"stopLoss")} value={parameters.stopLoss} />
        <Text>Take Profit</Text>
        <TextInput onChangeText={onParameterChanged.bind(null,"takeProfit")} value={parameters.takeProfit} />
        <HorizontalView><Text>Stop Loss Price:</Text><Text>{stopLossPrice}</Text></HorizontalView>
        <HorizontalView><Text>Take Profit Price</Text><Text>{takeProfitPrice}</Text></HorizontalView>
    </View>
  );
}
