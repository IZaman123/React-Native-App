import { ScrollView } from "react-native";
import ModuleItem from "./ModuleItem";

const ModuleList = ({ modules, onSelect }) => {
    return (
        <ScrollView>
            {modules.map((module) => {
                return <ModuleItem key={module.ModuleCode} module={module} onSelect={onSelect} />;
            })}
        </ScrollView>
    );
};

export default ModuleList;
