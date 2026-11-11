import { useState } from "react";
import useLoad from "../../API/useLoad";
import Form from "../../UI/Form";
import Icons from "../../UI/Icons";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: null,
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
    defaultModule.ModuleCode = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL =
        "https://assets.codepen.io/2510825/courseImageMobileApplicationDevelopment.jpg";

    const yearsEndpoint = "https://api.unibase.kuapps.uk/api/years";
    const staffEndpoint = "https://api.unibase.kuapps.uk/api/users/staff";

    const levels = [
        { value: 3, label: "3 (Foundation)" },
        { value: 4, label: "4 (First year)" },
        { value: 5, label: "5 (Second year)" },
        { value: 6, label: "6 (Final year)" },
        { value: 7, label: "7 (Masters)" },
    ];

    const [module, setModule] = useState(originalModule || defaultModule);
    const [years] = useLoad(yearsEndpoint);
    const [leaders] = useLoad(staffEndpoint);

    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => onSubmit(module);

    const submitLabel = originalModule ? "Modify" : "Add";
    const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

    const cohorts = years.map((y) => ({ value: y.YearID, label: y.YearName }));
    const staff = leaders.map((l) => ({
        value: l.UserID,
        label: `${l.UserFirstname} ${l.UserLastname}`,
    }));

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
            <Form.InputSelect
                label={"Module cohort"}
                prompt="Select module cohort..."
                options={cohorts}
                value={module.ModuleYearID}
                onChange={(value) => handleChange("ModuleYearID", value)}
            />
            <Form.InputSelect
                label={"Module leader"}
                prompt="Select module leader..."
                options={staff}
                value={module.ModuleLeaderID}
                onChange={(value) => handleChange("ModuleLeaderID", value)}
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
