import { getAuthUserDetails } from "@/lib/queries";
import React from "react";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getAuthUserDetails();

  if (!user) {
    return null;
  }

  if (!user.Agency) {
    return null;
  }

  const details =
    type === "agency"
      ? user?.Agency
      : user?.Agency.SubAccount.find((subaccount) => subaccount.id === id);

  if (!details) {
    return;
  }

  let sideBarLogo = user.Agency.agencyLogo || "/assets/plura-logo.svg";

  const isWhiteLabeledAgency = user.Agency.whiteLabel;
  if (!isWhiteLabeledAgency) {
    if (type === "subaccount") {
      sideBarLogo =
        user?.Agency.SubAccount.find((subaccount) => subaccount.id === id)
          ?.subAccountLogo || user.Agency.agencyLogo;
    }
  }

  const sidebarOpt =
    type === "agency"
      ? user.Agency.SidebarOption || []
      : user.Agency.SubAccount.find((subaccount) => subaccount.id === id)
          ?.SidebarOption || [];

  const subaccounts = user.Agency.SubAccount.filter((subaccount) =>
    user.Permissions.find(
      (permission) =>
        permission.subAccountId === subaccount.id && permission.access,
    ),
  );
  return <div>Sidebar</div>;
};

export default Sidebar;
