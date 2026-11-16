import { useState } from "react";
import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigation, route }) => {
    const { module, onDelete, onModify } = route.params;

    const [imageURL, setImageURL] = useState(module.ModuleImageURL);

    const onCapture = setImageURL;
    const goToModifyScreen = () => navigation.replace("ModuleModifyScreen", { module, onModify });
    const goToCameraScreen = () => navigation.navigate("CameraScreen", { onCapture });

    return (
        <Screen>
            <ModuleView
                module={module}
                imageURL={imageURL}
                onDelete={onDelete}
                onModify={goToModifyScreen}
                onCamera={goToCameraScreen}
            />
        </Screen>
    );
};

export default ModuleViewScreen;
