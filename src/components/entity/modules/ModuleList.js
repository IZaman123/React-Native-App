import { ScrollView } from "react-native";
import ModuleItem from "./ModuleItem";

const ModuleList = ({ modules, onSelect, onFavourite }) => {
    return (
        <ScrollView>
            {modules.map((module) => {
                return (
                    <ModuleItem
                        key={module.ModuleCode}
                        module={module}
                        onSelect={onSelect}
                        onFavourite={onFavourite}
                    />
                );
            })}
        </ScrollView>
    );
};

export default ModuleList;
