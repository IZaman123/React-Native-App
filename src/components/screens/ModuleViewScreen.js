import { useState } from "react";
import ModuleView from "../entity/modules/ModuleView";
import Screen from "../layout/Screen";

const ModuleViewScreen = ({ navigation, route }) => {
    const { module, onDelete, onModify } = route.params;

    const [imageURL, setImageURL] = useState(module.ModuleImageURL);
    const [coordinates, setCoordinates] = useState(null);

    const goToModifyScreen = () => navigation.replace("ModuleModifyScreen", { module, onModify });

    const onCapture = setImageURL;
    const goToCameraScreen = () => navigation.navigate("CameraScreen", { onCapture });
    
    const onLocate = setCoordinates;
    const goToLocationScreen = () => navigation.navigate("LocationScreen", { onLocate });

    return (
        <Screen>
            <ModuleView
                module={module}
                imageURL={imageURL}
                coordinates={coordinates}
                onDelete={onDelete}
                onModify={goToModifyScreen}
                onCamera={goToCameraScreen}
                onLocation={goToLocationScreen}
            />
        </Screen>
    );
};

export default ModuleViewScreen;
