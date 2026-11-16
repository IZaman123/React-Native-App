import { MaterialIcons } from "@expo/vector-icons";

const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} />;
const Camera = () => <MaterialIcons name="photo-camera" size={16} />;
const Check = () => <MaterialIcons name="check" size={16} />;
const Close = () => <MaterialIcons name="close" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Favourite = () => <MaterialIcons name="favorite" size={18} color="crimson" />;
const Location = () => <MaterialIcons name="location-on" size={16} />;
const NotFavourite = () => <MaterialIcons name="favorite-border" size={18} color="grey" />;
const Refresh = () => <MaterialIcons name="refresh" size={16} />;
const Submit = () => <MaterialIcons name="check" size={16} />;

Icons.Add = Add;
Icons.Camera = Camera;
Icons.Check = Check;
Icons.Close = Close;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Favourite = Favourite;
Icons.Location = Location;
Icons.NotFavourite = NotFavourite;
Icons.Refresh = Refresh;
Icons.Submit = Submit;

export default Icons;
