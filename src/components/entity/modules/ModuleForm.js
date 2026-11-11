import { useState } from "react";
import Form from "../../UI/Form";
import Icons from "../../UI/Icons";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImageURL: null,
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
    defaultModule.ModuleCode = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL =
        "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";

    const levels = [
        { value: 3, label: "3 (Foundation)" },
        { value: 4, label: "4 (First year)" },
        { value: 5, label: "5 (Second year)" },
        { value: 6, label: "6 (Final year)" },
        { value: 7, label: "7 (Masters)" },
    ];

    const [module, setModule] = useState(originalModule || defaultModule);

    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => onSubmit(module);

    const submitLabel = originalModule ? "Modify" : "Add";
    const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >
            <Form.InputText
                label={"Module code"}
                value={module.ModuleCode}
                onChange={(value) => handleChange("ModuleCode", value)}
            />
            <Form.InputText
                label={"Module name"}
                value={module.ModuleName}
                onChange={(value) => handleChange("ModuleName", value)}
            />
            <Form.InputSelect
                label={"Module level"}
                prompt="Select module level..."
                options={levels}
                value={module.ModuleLevel}
                onChange={(value) => handleChange("ModuleLevel", value)}
            />
            <Form.InputText
                label={"Module leader"}
                value={module.ModuleLeaderName}
                onChange={(value) => handleChange("ModuleLeaderName", value)}
            />
            <Form.InputText
                label={"Module image URL"}
                value={module.ModuleImageURL}
                onChange={(value) => handleChange("ModuleImageURL", value)}
            />
        </Form>
    );
};

export default ModuleForm;
