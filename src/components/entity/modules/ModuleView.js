import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

const ModuleView = ({ module }) => {
    return (
        <View style={styles.container}>
            <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />
            <View style={styles.infoTray}>
                <Text style={styles.boldText}>
                    View {module.ModuleCode} {module.ModuleName}
                </Text>
                <Text style={styles.text}>Level {module.ModuleLevel}</Text>
                <Text styles={styles.dimText}>{module.ModuleLeaderName} (Module Leader)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    image: {
        borderRadius: 3,
    },
    infoTray: {
        gap: 5,
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    dimText: {
        color: "grey",
    },
});

export default ModuleView;
