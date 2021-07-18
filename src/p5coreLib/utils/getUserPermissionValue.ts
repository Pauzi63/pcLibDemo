import { IUserPermission } from "../interfaces/Ip5coreLibInterfaces";

export default function getUserPermissionValue(
  userPermission: IUserPermission[],
  permissionItem: string
): string | undefined {
  var selectedUserPermission = userPermission.find(
    (item) => item.permissionItem === permissionItem
  );
  console.log("UserPermission: ", userPermission.length);

  console.log("PermissionItem: ", selectedUserPermission?.permissionItem);
  console.log("PermissionValue: ", selectedUserPermission?.permissionValue);

  return selectedUserPermission?.permissionValue;
}
