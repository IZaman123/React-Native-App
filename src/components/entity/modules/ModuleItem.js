import { StyleSheet, Text, View } from "react-native";
import Favourite from "../../UI/Favourite";
import Selector from "../../UI/Selector";

const ModuleItem = ({ module, onSelect, onFavourite }) => {
    const handleSelect = () => onSelect(module);
    const handleFavourite = () => onFavourite(module);

    return (
        <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
            <View style={styles.item}>
                <Favourite isFavourite={module.ModuleFavourite} onSelect={handleFavourite} />
                <Text style={styles.text}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
            </View>
        </Selector>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "lightgray",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        paddingLeft: 10,
    },
    pressedItem: {
        backgroundColor: "azure",
    },
});

export default ModuleItem;
