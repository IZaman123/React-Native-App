import { Text } from "react-native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const defaultModule = {
    ModuleID: Math.floor(100000 + Math.random() * 900000),
    ModuleCode: "CI6330",
    ModuleName: "Mobile Application Development",
    ModuleLevel: 6,
    ModuleLeaderID: 1,
    ModuleLeaderName: "Graeme JONES",
    ModuleImage: "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg",
};

const ModuleAddScreen = ({ navigation, route }) => {
    const { onAdd } = route.params;

    const handleAdd = () => onAdd(defaultModule);
    const handleCancel = navigation.goBack;

    return (
        <Screen>
            <Text>Add</Text>
            <ButtonTray>
                <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
                <Button label="Cancel" onClick={handleCancel} />
            </ButtonTray>
        </Screen>
    );
};

export default ModuleAddScreen;
