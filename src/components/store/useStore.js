import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useStore = (key, initialRecord) => {
    const [record, setRecord] = useState(initialRecord);

    const loadRecord = async () => {
        try {
            const recoveredJSON = await AsyncStorage.getItem(key);
            if (recoveredJSON !== null) {
                const record = JSON.parse(recoveredJSON);
                setRecord(record);
            }
        } catch (err) {
            Alert.alert(`Error loading ${key} record: ${err}`);
        }
    };

    const saveRecord = async (newRecord) => {
        try {
            const encodedRecord = JSON.stringify(newRecord);
            await AsyncStorage.setItem(key, encodedRecord);
            setRecord(newRecord);
        } catch (err) {
            Alert.alert(`Error loading ${key} record: ${err}`);
        }
    };

    useEffect(() => {
        loadRecord();
    }, []);

    return [record, saveRecord];
};

export default useStore;
